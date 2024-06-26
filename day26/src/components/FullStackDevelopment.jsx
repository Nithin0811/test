// FullStackDevelopment.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function FullStackDevelopment() {
  return (
    <div>
      <h2>All Courses</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
        <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png" className="img-fluid" height={150} width={150} />
            <Card.Body>
              <Card.Title>Front End</Card.Title>
              <Card.Text>
              A Full stack development is the process of building both the front-end and back-end of an application.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png" />
            <Card.Body>
              <Card.Title>Back End</Card.Title>
              <Card.Text>
              Data science is an academic field that uses scientific methods, algorithms, and systems to extract insights from data.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
          <Card.Img variant="top" src="https://www.kasandbox.org/programming-images/avatars/duskpin-seedling.png" />
            <Card.Body>
              <Card.Title>Full Stack</Card.Title>
              <Card.Text>
              Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. 
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FullStackDevelopment;