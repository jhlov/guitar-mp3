import { LessonData } from "data";
import { useRef } from "react";
import { AudioPlayer } from "./AudioPlayer";

interface Props {
  bookId: string;
  chapterId: string;
  lessonIndex: number;
  lessonData: LessonData;
  hasBackingTrack: boolean;
}

export const Lesson = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="mb-4 text-left">
      <h2 className="mb-2">
        {`${props.lessonData.title}  BPM ${props.lessonData.bpm} (${
          props.lessonData.start
        } ~ ${props.lessonData.end ?? ""})`}
      </h2>

      <AudioPlayer
        title={"example"}
        src={`/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}.mp3`}
        lessonData={props.lessonData}
      />

      {props.hasBackingTrack && (
        <div className="mt-1">
          <AudioPlayer
            title={"drum"}
            src={`/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}-drum.mp3`}
            lessonData={props.lessonData}
          />
        </div>
      )}
      <hr className="mt-2" />
    </div>
  );
};
