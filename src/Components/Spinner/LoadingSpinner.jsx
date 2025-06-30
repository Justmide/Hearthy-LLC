import React from 'react'
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <PuffLoader 
        color="#1877F3" 
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingSpinner
