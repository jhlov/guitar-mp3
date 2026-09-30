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
  const soloSrc = `/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}.mp3`;
  const drumSrc = `/guitar-mp3/assets/mp3/${props.bookId}/${props.chapterId}-drum.mp3`;

  return (
    <div className="space-y-4">
      {/* 1. 모범 연주 (Full Track: 기타 연주 + 밴드 반주) */}
      <AudioPlayer
        key={`solo_${soloSrc}_${props.lessonIndex}`}
        title={"모범 연주 (기타 + 반주)"}
        src={soloSrc}
        lessonData={props.lessonData}
        isBacking={false}
      />

      {/* 2. 반주 트랙 (Backing Track: 기타 미포함 드럼/MR) */}
      {props.hasBackingTrack && (
        <AudioPlayer
          key={`drum_${drumSrc}_${props.lessonIndex}`}
          title={"반주 트랙 (드럼 / MR)"}
          src={drumSrc}
          lessonData={props.lessonData}
          isBacking={true}
        />
      )}
    </div>
  );
};
