import Forward5Icon from "@mui/icons-material/Forward5";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import Replay5Icon from "@mui/icons-material/Replay5";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { LessonData } from "data";
import _ from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  src: string;
  lessonData: LessonData;
  isBacking?: boolean;
}

export const AudioPlayer = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState(props.lessonData.start || 0);
  const [duration, setDuration] = useState(props.lessonData.end || 0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const start = props.lessonData.start || 0;
  const end = props.lessonData.end;

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Setup audio on source / lesson change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
    audio.src = props.src;
    audio.currentTime = start;
    setCurrentTime(start);
    audio.volume = isMuted ? 0 : volume;
    audio.playbackRate = speed;
    audio.load();

    const handleLoadedMetadata = () => {
      setDuration(end ?? audio.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [props.src, start, end, isMuted, speed, volume]);

  const onTimeupdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const current = audio.currentTime;
    setCurrentTime(current);

    if (!_.isNil(end) && current >= end) {
      if (isRepeat) {
        audio.currentTime = start;
        audio.play().catch(() => {});
      } else {
        audio.pause();
        audio.currentTime = start;
      }
    }
  }, [end, isRepeat, start]);

  const onEnded = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = start;
    if (isRepeat) {
      audio.play().catch(() => {});
    }
  }, [isRepeat, start]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", onTimeupdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeupdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [onTimeupdate, onEnded]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (!_.isNil(end) && audio.currentTime >= end) {
        audio.currentTime = start;
      }
      audio.play().catch(() => {});
    }
  };

  const skipSeconds = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    let target = audio.currentTime + seconds;
    if (target < start) target = start;
    if (!_.isNil(end) && target > end) target = end;
    audio.currentTime = target;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const targetTime = Number(e.target.value);
    audio.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const onChangeSpeed = (value: number) => {
    setSpeed(value);
    if (audioRef.current) {
      audioRef.current.playbackRate = value;
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  // Section range calculations
  const effectiveEnd = end ?? (duration > 0 ? duration : start + 30);
  const sectionDuration = Math.max(0.1, effectiveEnd - start);
  const progressPercent = Math.min(
    100,
    Math.max(0, ((currentTime - start) / sectionDuration) * 100)
  );

  return (
    <div
      className={`rounded-2xl p-4 sm:p-5 border transition-all ${
        props.isBacking
          ? "bg-slate-900/90 border-cyan-500/30 shadow-lg shadow-cyan-950/20"
          : "bg-slate-900/90 border-amber-500/30 shadow-lg shadow-amber-950/20"
      }`}
    >
      {/* Direct source on audio element for reliable loading */}
      <audio ref={audioRef} src={props.src} preload="metadata" />

      {/* Header Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isPlaying
                ? props.isBacking
                  ? "bg-cyan-400 animate-pulse"
                  : "bg-amber-400 animate-pulse"
                : "bg-slate-600"
            }`}
          />
          <h4 className="text-sm sm:text-base font-bold text-white tracking-wide m-0">
            {props.title}
          </h4>
          <span
            className={`text-[11px] px-2 py-0.5 rounded font-mono font-medium ${
              props.isBacking
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
            }`}
          >
            {props.isBacking ? "DRUM / MR" : "GUITAR + MR"}
          </span>
        </div>

        {/* Visual Waveform Animation when playing */}
        {isPlaying && (
          <div className="flex items-center gap-1 h-4">
            <span
              className={`w-1 rounded-full animate-bounce ${
                props.isBacking ? "bg-cyan-400" : "bg-amber-400"
              }`}
              style={{ animationDuration: "0.6s" }}
            />
            <span
              className={`w-1 rounded-full animate-bounce ${
                props.isBacking ? "bg-cyan-400" : "bg-amber-400"
              }`}
              style={{ animationDuration: "0.4s", animationDelay: "0.15s" }}
            />
            <span
              className={`w-1 rounded-full animate-bounce ${
                props.isBacking ? "bg-cyan-400" : "bg-amber-400"
              }`}
              style={{ animationDuration: "0.7s", animationDelay: "0.3s" }}
            />
            <span
              className={`w-1 rounded-full animate-bounce ${
                props.isBacking ? "bg-cyan-400" : "bg-amber-400"
              }`}
              style={{ animationDuration: "0.5s", animationDelay: "0.1s" }}
            />
          </div>
        )}
      </div>

      {/* Progress Bar & Timers */}
      <div className="space-y-1.5 mb-4">
        <div className="relative w-full flex items-center group">
          <input
            type="range"
            min={start}
            max={effectiveEnd}
            step={0.1}
            value={Math.min(Math.max(currentTime, start), effectiveEnd)}
            onChange={handleSeek}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
            style={{
              background: `linear-gradient(to right, ${
                props.isBacking ? "#06b6d4" : "#f59e0b"
              } 0%, ${
                props.isBacking ? "#06b6d4" : "#f59e0b"
              } ${progressPercent}%, #1e293b ${progressPercent}%, #1e293b 100%)`
            }}
          />
        </div>

        <div className="flex justify-between text-xs font-mono text-slate-400">
          <span>{formatTime(currentTime)}</span>
          <span className="text-slate-500 font-sans text-[11px]">
            구간: {formatTime(start)} ~ {formatTime(effectiveEnd)}
          </span>
          <span>{formatTime(effectiveEnd)}</span>
        </div>
      </div>

      {/* Main Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-800/80">
        {/* Playback Buttons */}
        <div className="flex items-center gap-2">
          {/* -5s button */}
          <button
            type="button"
            onClick={() => skipSeconds(-5)}
            title="5초 뒤로"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all"
          >
            <Replay5Icon fontSize="small" />
          </button>

          {/* Main Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shadow-md transition-all active:scale-95 ${
              props.isBacking
                ? "bg-gradient-to-tr from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 text-slate-950 shadow-cyan-900/40"
                : "bg-gradient-to-tr from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-slate-950 shadow-amber-900/40"
            }`}
          >
            {isPlaying ? (
              <PauseIcon fontSize="medium" className="text-slate-950" />
            ) : (
              <PlayArrowIcon fontSize="medium" className="text-slate-950 ml-0.5" />
            )}
          </button>

          {/* +5s button */}
          <button
            type="button"
            onClick={() => skipSeconds(5)}
            title="5초 앞으로"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all"
          >
            <Forward5Icon fontSize="small" />
          </button>

          {/* Loop / Repeat Button */}
          <button
            type="button"
            onClick={() => setIsRepeat(!isRepeat)}
            title="구간 무한 반복"
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isRepeat
                ? props.isBacking
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800 border border-transparent"
            }`}
          >
            <RepeatIcon fontSize="small" />
            <span>반복</span>
          </button>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-xl border border-slate-800">
          {[0.5, 0.7, 0.8, 0.9, 1.0].map(item => {
            const isSelected = item === speed;
            return (
              <button
                key={item}
                type="button"
                onClick={() => onChangeSpeed(item)}
                className={`px-2 py-1 text-xs rounded-lg font-mono font-medium transition-all ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item}x
              </button>
            );
          })}
        </div>

        {/* Volume Controls */}
        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <button
            type="button"
            onClick={toggleMute}
            className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeOffIcon fontSize="small" />
            ) : (
              <VolumeUpIcon fontSize="small" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>
    </div>
  );
};
