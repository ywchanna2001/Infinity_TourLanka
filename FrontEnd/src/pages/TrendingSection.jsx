import React from 'react';
import PackageCategory from './PackageCategory';

const categories = [
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
    <div className="container mt-5">
      {categories.map((category, index) => (
        <PackageCategory key={index} category={category} />
      ))}
    </div>
  );
}

export default TrendingSection;
