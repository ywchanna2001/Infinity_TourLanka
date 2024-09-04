import React from 'react';
import PackageCard3 from './PackageCard3';

function PackageCategory3({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      <p className="text-center">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div className="col-md-3" key={index}>
            <PackageCard3 packageInfo={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory3;
