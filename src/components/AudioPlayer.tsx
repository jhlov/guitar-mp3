import RepeatIcon from "@mui/icons-material/Repeat";
import classNames from "classnames";
import { LessonData } from "data";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";

interface Props {
  title: string;
  src: string;
  lessonData: LessonData;
}

export const AudioPlayer = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isRepeat, setIsRepeat] = useState(false);
  const [speed, setSpeed] = useState<number>(1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = props.lessonData.start;
      audioRef.current.volume = 0.5;
    }

    audioRef.current?.addEventListener("timeupdate", onTimeupdate);
    audioRef.current?.addEventListener("ended", onEnded);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", onTimeupdate);
      audioRef.current?.removeEventListener("ended", onEnded);
    };
  });

  const onTimeupdate = () => {
    if (audioRef.current) {
      if (!_.isNil(props.lessonData.end)) {
        if (props.lessonData.end <= audioRef.current.currentTime) {
          audioRef.current.currentTime = props.lessonData.start;
          if (!isRepeat) {
            audioRef.current.pause();
          }
        }
      }
    }
  };

  const onEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = props.lessonData.start;
      if (isRepeat) {
        audioRef.current.play();
      }
    }
  };

  const onChangeSpeed = (value: number) => {
    setSpeed(value);
    if (audioRef.current) {
      audioRef.current.playbackRate = value;
    }
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div className="d-flex flex-wrap gap-y-1">
        <audio controls ref={audioRef} className="mr-4">
          <source src={props.src} />
        </audio>
        <div className="d-flex items-center">
          <div>
            <ButtonGroup>
              <ToggleButton
                id={`repeat_${props.title}_${props.src}_${props.lessonData.start}`}
                type="checkbox"
                variant="outline-success"
                checked={isRepeat}
                value={`repeat_${props.title}_${props.src}_${props.lessonData.start}`}
                onChange={e => setIsRepeat(e.target.checked)}
              >
                <RepeatIcon fontSize="small" />
              </ToggleButton>
            </ButtonGroup>
          </div>

          <div className="ml-2">
            <ButtonGroup>
              {[0.5, 0.6, 0.7, 0.8, 0.9, 1].map(item => {
                return (
                  <Button
                    key={`radio_${props.title}_${props.src}_${props.lessonData.start}_${item}`}
                    variant="outline-secondary"
                    className={classNames({ active: item === speed })}
                    onClick={() => onChangeSpeed(item)}
                  >
                    {item}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
