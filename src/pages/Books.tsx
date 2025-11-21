import { books } from "data";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Books = () => {
  return (
    <Container className="py-5">
      <Row className="flex-col items-center">
        <Col xs="12" sm="8" md="6">
          <ButtonGroup vertical className="d-flex">
            {books.map(book => {
              return (
                <Link
                  to={`/${book.id}`}
                  className="btn btn-outline-primary btn-lg"
                >
                  {book.title}
                </Link>
              );
            })}
          </ButtonGroup>
        </Col>
      </Row>
      <div className="pt-5"></div>
    </Container>
  );
};
