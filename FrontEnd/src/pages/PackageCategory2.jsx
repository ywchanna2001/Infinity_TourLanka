import React from 'react';
import PackageCard2 from './PackageCard2';

function PackageCategory2({ category }) {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-3">{category.title}</h2>
      <p className="text-center">{category.description}</p>
      <div className="row">
        {category.packages.map((pkg, index) => (
          <div className="col-md-3" key={index}>
            <PackageCard2 packageInfo={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCategory2;
