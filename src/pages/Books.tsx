import { books } from "data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Books = () => {
  return (
    <Container className="py-5">
      <Row className="flex-col items-center">
        {books.map(book => {
          return (
            <Col xs="12" sm="8" md="6">
              <div className="d-grid">
                <Link
                  to={`/${book.id}`}
                  className="btn btn-outline-primary btn-lg"
                >
                  {book.title}
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="pt-5"></div>
    </Container>
  );
};
