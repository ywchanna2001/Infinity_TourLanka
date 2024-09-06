import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // If you are using Button as well


function PackageCard({ packageInfo }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={packageInfo.imageUrl} alt={packageInfo.title} />
      <Card.Body>
        <Card.Title>{packageInfo.title}</Card.Title>
        <Card.Text>{packageInfo.likes} Likes</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default PackageCard;
