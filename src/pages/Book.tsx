import { Lesson } from "components/Lesson";
import { BookData, books } from "data";
import { useMemo } from "react";
import { Accordion } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

interface Params {
  id?: string;
}

export const Book = () => {
  const match = useRouteMatch();

  const bookData: BookData | undefined = useMemo(() => {
    const id = (match.params as Params).id;
    return books.find(book => book.id === id);
  }, []);

  return (
    <div className="pt-5">
      <h1 className="mb-3 text-xl font-bold">{bookData?.title}</h1>
      <Accordion defaultActiveKey="0">
        {bookData?.chapters.map(chapter => {
          return (
            <Accordion.Item
              key={`${bookData.id}_${chapter.id}`}
              eventKey={chapter.id}
            >
              <Accordion.Header>{chapter.title}</Accordion.Header>
              <Accordion.Body>
                {chapter.lessons.map((lesson, i) => {
                  return (
                    <Lesson
                      key={`${bookData.id}_${chapter.id}_${i}`}
                      bookId={bookData.id}
                      chapterId={chapter.id}
                      lessonIndex={i}
                      lessonData={lesson}
                      hasBackingTrack={chapter.hasBackingTrack ?? false}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
