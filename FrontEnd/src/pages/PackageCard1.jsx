import React from 'react';
import Card from 'react-bootstrap/Card';
import CycleCard from './Cards/CycleCard';
import SurfCard from './Cards/SurfCard';
import SafariCard from './Cards/SafariCard';
import RaftingCard from './Cards/RaftingCard';

function PackageCard1({ packageInfo, cardType }) {
  // Determine which card to render based on the cardType prop
  const renderCard = () => {
    switch (cardType) {
      case 'CycleCard':
        return <CycleCard />;
      case 'SafariCard':
        return <SafariCard />;
      case 'SurfCard':
        return <SurfCard />;
      default:
        return <RaftingCard />;

    }
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={packageInfo.imageUrl} alt={packageInfo.title} />
      <Card.Body>
        <Card.Title>{packageInfo.title}</Card.Title>
        {renderCard()}
      </Card.Body>
    </Card>
  );
}

export default PackageCard1;
