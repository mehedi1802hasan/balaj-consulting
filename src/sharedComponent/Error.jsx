import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
                <div className="container mx-auto">
                    
                <div className="flex items-center justify-center">
      <div className=" ">
        <img
          src="https://i.ibb.co/yPvL7Mp/jelly-living-numbers-four-hundred-and-four.gif"
          className=""
        />
        <div className=" inset-0 flex items-center justify-center">
         <Link to='/'>
         <button className="px-5 py-5 text-yellow-500 bg-white rounded hover:bg-black btn btn-outline btn-primary">
            Go Back
          </button></Link>
        </div> 
      </div>
    </div>
                </div>
        </div>
    );
};

export default Error;