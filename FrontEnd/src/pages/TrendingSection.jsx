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
      {},
      {},
      {},
    ]
  }
];
const categories2 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      {},
      {},
      {},
      {}
    ]
  }
];
const categories3 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      {},
      {},
      {},
      {},
    ]
  }
];
const categories4 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      {},
      {},
      {},
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
