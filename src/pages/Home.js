import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Express</h1>
              <p className="lead">
                Tutorial FullStack Express.js dan React.js oleh{" "}
                <strong>Teguh Dana Prayuda</strong>
              </p>
              <Button href="" variant="primary" size="lg">
                SELENGKAPNYA
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
