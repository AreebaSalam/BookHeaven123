import React from "react";

const AddBooks = () =>{
    return(
        <div classNameName="bg-dark d-flex justify-content-center align-items-center" style={{minHeight:"91vh"}}>
            <div className="container p-4 ">
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
</div>
<div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  placeholder="Enter Book Name"/>
</div>
 <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
</div>
<div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  placeholder="Enter Author Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
</div>
<div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  placeholder="Enter Description"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
</div>
<div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" 
  placeholder="Enter URL Of Image"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
</div>
<div className="mb-3">
  <input type="Number" className="form-control" id="exampleFormControlInput1" 
  placeholder="Enter Price"/>
</div>
<button className="btn btn-success">Submit</button>
        </div>
        </div>
    );
};
export default AddBooks;