import React from 'react'

function Loading() {
  return (
    
    <div className="m-0 vh-50 row justify-content-center">
    <div className="col-auto mt-5">
      {/* <img
        className=" justify-content-center"
        src="http://lepassetempsderose.l.e.pic.centerblog.net/9d6e9cbb.gif" style={{width:"15rem"}}
        alt="loading"
         
      /> */}
      <span className="spinner-grow me-1"> </span><span className="spinner-grow me-1"></span><span className="spinner-grow me-1"></span>
    </div>
  </div>
    
  )
}

export default Loading