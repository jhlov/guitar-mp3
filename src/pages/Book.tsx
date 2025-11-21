import HomeIcon from "@mui/icons-material/Home";
import { BookData, books } from "data";
import { useMemo } from "react";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
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
    <Container className="py-5">
      <Row className="flex-col items-center">
        <Col xs="12" sm="8" md="6">
          <div className="d-flex justify-between mb-5 items-center">
            <Link to={"/"} className="btn btn-outline-secondary btn-sm">
              <HomeIcon fontSize="small" />
            </Link>
            <h1 className="text-xl font-bold">{bookData?.title}</h1>
            <div style={{ width: "16px" }} />
          </div>
        </Col>

        <Col xs="12" sm="8" md="6">
          <ButtonGroup vertical className="d-flex">
            {bookData?.chapters.map(chapter => {
              return (
                <Link
                  to={`/${bookData.id}/${chapter.id}`}
                  className="btn btn-outline-primary btn-lg"
                >
                  {chapter.title}
                </Link>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
