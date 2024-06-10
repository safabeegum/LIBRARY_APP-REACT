import React from 'react'

const Delete = () => {
  return (
    <div>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger" onClick={readValue}>DELETE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete