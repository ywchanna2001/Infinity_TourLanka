import React from 'react';
import PackageCard4 from './PackageCard4';

function PackageCategory4({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      <p className="text-center">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div className="col-md-3" key={index}>
            <PackageCard4 packageInfo={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory4;
