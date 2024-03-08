import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import { Lesson } from "components/Lesson";
import { BookData, ChapterData, books } from "data";
import _ from "lodash";
import { useEffect, useMemo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

interface Params {
  id?: string;
  cid?: string;
}
export const Chapter = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log(match.params);
  }, []);

  const bookData: BookData | undefined = useMemo(() => {
    const id = (match.params as Params).id;
    return books.find(book => book.id === id);
  }, []);

  const chapterData: ChapterData | undefined = useMemo(() => {
    const cid = (match.params as Params).cid;
    return bookData?.chapters.find(chapter => chapter.id === cid);
  }, [bookData]);

  const getTimeString = (time: number | undefined) => {
    if (_.isNil(time)) {
      return "";
    }

    return `${Math.floor(time / 60)}:${Math.floor(time % 60)}`;
  };

  return (
    <Container className="pt-5">
      <Row className="flex-col items-center">
        <Col xs="12" sm="10" md="8">
          <div className="d-flex justify-between mb-5 items-center">
            <Link
              to={`/`}
              className="btn btn-outline-secondary btn-sm invisible"
            >
              <HomeIcon fontSize="small" />
            </Link>
            <h1 className="text-xl font-bold">{chapterData?.title}</h1>
            <Link
              to={`/${bookData?.id}`}
              className="btn btn-outline-secondary btn-sm"
            >
              <ArrowBackIcon fontSize="small" />
            </Link>
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
                  <Card.Title className="text-left">{lesson.title}</Card.Title>
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
