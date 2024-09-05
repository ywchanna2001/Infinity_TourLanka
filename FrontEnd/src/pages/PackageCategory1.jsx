import React from 'react';
import PackageCard1 from './PackageCard1';
import './PackageCategory1.css'; // Assuming you'll add your styles here

function PackageCategory1({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      {/* Added className 'description' for the description text */}
      <p className="text-center description">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div className="col-md-3" key={index}>
            <PackageCard1 packageInfo={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory1;
