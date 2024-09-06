import React from 'react';
import PackageCard from './PackageCard';

function PackageCategory({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      <p className="text-center">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div className="col-md-3" key={index}>
            <PackageCard packageInfo={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory;
