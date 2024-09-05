import React from 'react';
import PackageCategory3 from './PackageCategory3';
import PackageCategory2 from './PackageCategory2';
import PackageCategory1 from './PackageCategory1';
import PackageCategory4 from './PackageCategory4';
import './TrendingSection.css';

const categories1 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      {},
    ]
  }
];

const categories2 = [
  {
    title: 'Cultural and Historical Packages',
    description: 'Immerse yourself in Sri Lanka’s rich cultural heritage with our top-rated packages, cherished by travelers for their deep connection to the island’s history and traditions. From ancient temples to vibrant festivals, these thoughtfully curated experiences offer a journey through the heart of Sri Lanka’s diverse and captivating culture.',
    packages: [
      {},
    ]
  }
];

const categories3 = [
  {
    title: 'Budget-Friendly Packages',
    description: 'Experience the magic of Sri Lanka with our Budget packages, designed for travelers seeking unforgettable adventures without overspending. This value-packed option offers a perfect blend of cultural highlights, scenic beauty, and local experiences, all while keeping your wallet happy. Enjoy a thoughtfully curated journey that ensures you make the most of your trip, all at a fraction of the cost.',
    packages: [
      {},

    ]
  }
];

const categories4 = [
  {
    title: 'Seasonal Packages',
    description: 'Explore Sri Lanka throughout the year with our Seasonal Escapes packages. Whether it’s the vibrant summer beaches, serene winter retreats, or the enchanting monsoon rains, each package offers a unique experience tailored to the season, ensuring you enjoy the island’s beauty in every weather.',
    packages: [
      {},
    ]
  }
];

function TrendingSection() {
  return (
    <div>
      <div className="container mt-5">
        {categories1.map((category, index) => (
          <PackageCategory1 key={index} category={category} />
        ))}
      </div>
      <div className="container mt-5">
        {categories2.map((category, index) => (
          <PackageCategory2 key={index} category={category} />
        ))}
      </div>
      <div className="container mt-5">
        {categories3.map((category, index) => (
          <PackageCategory3 key={index} category={category} />
        ))}
      </div>
      <div className="container mt-5">
        {categories4.map((category, index) => (
          <PackageCategory4 key={index} category={category} />
        ))}
      </div>
    </div>

    
  );
}

export default TrendingSection;
