import RepeatIcon from "@mui/icons-material/Repeat";
import { LessonData } from "data";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { ToggleButton } from "react-bootstrap";

interface Props {
  title: string;
  src: string;
  lessonData: LessonData;
}

export const AudioPlayer = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = props.lessonData.start;
    }

    audioRef.current?.addEventListener("timeupdate", onTimeupdate);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", onTimeupdate);
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

  return (
    <div>
      <h3>{props.title}</h3>
      <div className="d-flex items-center">
        <audio controls ref={audioRef} className="mr-4">
          <source src={props.src} />
        </audio>

        <div>
          <ToggleButton
            id={`repeat_${props.title}_${props.src}_${props.lessonData.start}`}
            type="checkbox"
            variant="outline-success"
            checked={isRepeat}
            value="loop"
            onChange={e => setIsRepeat(e.target.checked)}
          >
            <RepeatIcon />
          </ToggleButton>
        </div>
      </div>
    </div>
  );
};
