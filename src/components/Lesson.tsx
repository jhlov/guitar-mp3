import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { LessonData } from "data";
import { useState } from "react";
import { AudioPlayer } from "./AudioPlayer";

interface Props {
  bookId: string;
  chapterId: string;
  lessonIndex: number;
  lessonData: LessonData;
  hasBackingTrack: boolean;
}

export const Lesson = (props: Props) => {
  const [activeTab, setActiveTab] = useState<"lead" | "backing">("lead");

  const soloSrc = `/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}.mp3`;
  const drumSrc = `/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}-drum.mp3`;

  return (
    <div className="space-y-4">
      {/* Track Selector Tabs (if backing track exists) */}
      {props.hasBackingTrack ? (
        <div className="flex items-center gap-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("lead")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "lead"
                ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <MusicNoteIcon fontSize="small" />
            <span>모범 연주 (Solo)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("backing")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "backing"
                ? "bg-cyan-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <SportsEsportsIcon fontSize="small" />
            <span>반주 트랙 (Drum)</span>
          </button>
        </div>
      ) : null}

      {/* Render Selected Track */}
      {props.hasBackingTrack ? (
        activeTab === "lead" ? (
          <AudioPlayer
            title={"모범 연주"}
            src={soloSrc}
            lessonData={props.lessonData}
            isBacking={false}
          />
        ) : (
          <AudioPlayer
            title={"반주 트랙 (드럼/MR)"}
            src={drumSrc}
            lessonData={props.lessonData}
            isBacking={true}
          />
        )
      ) : (
        <AudioPlayer
          title={"모범 연주"}
          src={soloSrc}
          lessonData={props.lessonData}
          isBacking={false}
        />
      )}
    </div>
  );
};
