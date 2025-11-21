import { LessonData } from "data";
import { AudioPlayer } from "./AudioPlayer";

interface Props {
  bookId: string;
  chapterId: string;
  lessonIndex: number;
  lessonData: LessonData;
  hasBackingTrack: boolean;
}

export const Lesson = (props: Props) => {
  return (
    <div className="text-left">
      <AudioPlayer
        title={"모범 연주"}
        src={`/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}.mp3`}
        lessonData={props.lessonData}
      />

      {props.hasBackingTrack && (
        <div className="mt-3">
          <AudioPlayer
            title={"반주"}
            src={`/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}-drum.mp3`}
            lessonData={props.lessonData}
          />
        </div>
      )}
    </div>
  );
};
