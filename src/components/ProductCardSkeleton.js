import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductCardSkeleton() {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="mx-1 my-lg-3 my-md-2 my-0 rounded cardHover shadow bg-light">
        <div className="text-center">
          <Skeleton height={300} width={300} />
        </div>
        <div className="bg-light ms-2 p-1 py-3">
          <div>
            <div className="d-flex align-items-center mb-2">
              <p className="text-secondary mb-0 me-2" style={{ fontSize: "17px" }}>
                <Skeleton width={50} />
              </p>
              <h5 className="text-dark mb-0" style={{ fontSize: "17px" }}>
                <Skeleton width={100} />
              </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="mb-0 w-50">
                <Skeleton width={40} />
                <Skeleton width={60} />
              </h6>
              <button className="btn btn-success btn-sm  me-2" style={{ width: "33%" }}>
                <Skeleton width={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
