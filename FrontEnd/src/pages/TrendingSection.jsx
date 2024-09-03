import React from 'react';
import PackageCategory from './PackageCategory';
import './TrendingSection.css';


const categories1 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      { title: 'Cycling', likes: 500, imageUrl: '/path-to-images/cycling.jpg' },
      { title: 'Rafting', likes: 495, imageUrl: '/path-to-images/rafting.jpg' },
      { title: 'Surfing', likes: 480, imageUrl: '/path-to-images/surfing.jpg' },
      { title: 'Safari', likes: 470, imageUrl: '/path-to-images/safari.jpg' }
    ]
  }
];
const categories2 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      { title: 'Cycling', likes: 500, imageUrl: '/path-to-images/cycling.jpg' },
      { title: 'Rafting', likes: 495, imageUrl: '/path-to-images/rafting.jpg' },
      { title: 'Surfing', likes: 480, imageUrl: '/path-to-images/surfing.jpg' },
      { title: 'Safari', likes: 470, imageUrl: '/path-to-images/safari.jpg' }
    ]
  }
];
const categories3 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      { title: 'Cycling', likes: 500, imageUrl: '/path-to-images/cycling.jpg' },
      { title: 'Rafting', likes: 495, imageUrl: '/path-to-images/rafting.jpg' },
      { title: 'Surfing', likes: 480, imageUrl: '/path-to-images/surfing.jpg' },
      { title: 'Safari', likes: 470, imageUrl: '/path-to-images/safari.jpg' }
    ]
  }
];
const categories4 = [
  {
    title: 'Adventure Packages',
    description: 'Explore Sri Lanka\'s most thrilling adventures with our top-rated packages. Loved by travelers for their blend of excitement and stunning scenery. From mountain treks to underwater exploration, these tried-and-true experiences promise unforgettable moments for every adventurer.',
    packages: [
      { title: 'Cycling', likes: 500, imageUrl: '/path-to-images/cycling.jpg' },
      { title: 'Rafting', likes: 495, imageUrl: '/path-to-images/rafting.jpg' },
      { title: 'Surfing', likes: 480, imageUrl: '/path-to-images/surfing.jpg' },
      { title: 'Safari', likes: 470, imageUrl: '/path-to-images/safari.jpg' }
    ]
  }
];

function TrendingSection() {
  return (
    <div>
      <div className="container mt-5">
      {categories1.map((category, index) => (
        <PackageCategory key={index} category={category} />
      ))}
    </div>
    <div className="container mt-5">
      {categories2.map((category, index) => (
        <PackageCategory key={index} category={category} />
      ))}
    </div>
    <div className="container mt-5">
      {categories3.map((category, index) => (
        <PackageCategory key={index} category={category} />
      ))}
    </div>
    <div className="container mt-5">
      {categories4.map((category, index) => (
        <PackageCategory key={index} category={category} />
      ))}
    </div>
    </div>
  );
}

export default TrendingSection;
