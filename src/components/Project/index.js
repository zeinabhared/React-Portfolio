import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import { Container, Card, Col, Row, CardImg } from 'react-bootstrap';

function Project({ project }) {

  const { name, repo, link, subtitle, description } = project;

  return (
    <div key={name}>
    <Container>
        <Row xs={1} md={3} className="g-4 py-3">
            <Col>
                <Card>
                    <Card.Img variant='top' src={require(`../../assets/projects/${name}.jpg`).default} />
                    <Card.Body> 
                        <Card.Title className="fw-bold"> {removeHyphensAndCapitalize(name)} </Card.Title>
                        <Card.Subtitle> {subtitle} </Card.Subtitle>
                        <Card.Text> {description} </Card.Text>
                        <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                        <a href={repo}>
                        <i className="fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Project;
