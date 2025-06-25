import React from 'react'
import { PuffLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <PuffLoader 
        color="#3A6351" // Use your brand color
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingSpinner
