import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import LoadingSpinner from './Spinner/LoadingSpinner';

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

useEffect(()=>{
  setLoading(true);
}, [location.pathname]);

  useEffect(() => {
    if(loading){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    
    const timer = setTimeout(() => {
      setLoading(false);
    },3000); 

    return () => clearTimeout(timer);
  }
 }, [loading]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
};
export default PageWrapper


