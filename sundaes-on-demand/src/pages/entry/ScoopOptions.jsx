import React from "react";

const ScoopOptions = ({ name, imagePath }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imagePath} className="card-img" alt={`${name} scoop`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoopOptions;
