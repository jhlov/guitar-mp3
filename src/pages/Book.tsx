import { BookData, books } from "data";
import { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

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
    <Container className="pt-5">
      <h1 className="mb-3 text-xl font-bold mb-5">{bookData?.title}</h1>
      <Row className="flex-col items-center">
        {bookData?.chapters.map(chapter => {
          return (
            <Col xs="12" sm="8" md="6">
              <div className="d-grid">
                <Link
                  to={`/${bookData.id}/${chapter.id}`}
                  className="btn btn-outline-primary btn-lg"
                >
                  {chapter.title}
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
