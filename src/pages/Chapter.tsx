import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import classNames from "classnames";
import { Lesson } from "components/Lesson";
import { BookData, ChapterData, books } from "data";
import _ from "lodash";
import { useEffect, useMemo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import "./Chapter.scss";

interface Params {
  id?: string;
  cid?: string;
}
export const Chapter = () => {
  const match = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookData: BookData | undefined = useMemo(() => {
    const id = (match.params as Params).id;
    return books.find(book => book.id === id);
  }, [match.params]);

  const chapterData: ChapterData | undefined = useMemo(() => {
    const cid = (match.params as Params).cid;
    return bookData?.chapters.find(chapter => chapter.id === cid);
  }, [match.params, bookData]);

  const getTimeString = (time: number | undefined) => {
    if (_.isNil(time)) {
      return "";
    }

    return `${Math.floor(time / 60)}:${Math.floor(time % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const getTitle = (title: string) => {
    const index = title.indexOf(" ");
    return (
      <>
        <span style={{ fontSize: "24px" }}>{title.substring(0, index)}</span>{" "}
        <span
          dangerouslySetInnerHTML={{ __html: title.substring(index) }}
        ></span>
      </>
    );
  };

  return (
    <Container className="py-5">
      <Row className="flex-col items-center">
        <Col xs="12" sm="10" md="8">
          <div className="d-flex justify-between mb-5 items-center">
            <Link
              to={`/${bookData?.id}`}
              className="btn btn-outline-secondary btn-sm"
            >
              <ArrowBackIcon fontSize="small" />
            </Link>
            <h1 className="text-xl font-bold">{chapterData?.title}</h1>
            <div>
              <Link
                to={`/${bookData?.id}/${Number(chapterData?.id!) - 1}`}
                className={classNames(
                  "btn btn-outline-secondary btn-sm",
                  Number(chapterData?.id!) === 1 && "disabled disabled-link"
                )}
              >
                <NavigateBeforeIcon fontSize="small" />
              </Link>
              <Link
                to={`/${bookData?.id}/${Number(chapterData?.id!) + 1}`}
                className={classNames(
                  "btn btn-outline-secondary btn-sm",
                  Number(chapterData?.id!) === bookData?.chapters.length &&
                    "disabled disabled-link"
                )}
              >
                <NavigateNextIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </Col>

        {chapterData?.lessons.map((lesson, i) => {
          return (
            <Col
              key={`${bookData?.id}_${chapterData.id}_${lesson.start}`}
              xs="12"
              sm="10"
              md="8"
            >
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="text-left">
                    {getTitle(lesson.title)}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-left">
                    {`BPM ${lesson.bpm}  (CD ${getTimeString(
                      lesson.start
                    )} ~ ${getTimeString(chapterData?.lessons[i + 1]?.start)})`}
                  </Card.Subtitle>
                  <Lesson
                    bookId={bookData?.id ?? ""}
                    chapterId={chapterData.id}
                    lessonIndex={i}
                    lessonData={{
                      ...lesson,
                      end: chapterData?.lessons[i + 1]?.start
                    }}
                    hasBackingTrack={chapterData.hasBackingTrack ?? false}
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
