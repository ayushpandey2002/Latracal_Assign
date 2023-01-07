import React from "react";
function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row ">
      <h1>Student CheckIn Form</h1>
      <div className="col">
        <h3>Enter Student's Name</h3>
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          className="form-control"
          placeholder="Enter Student Name"
          required="required"
        />
      </div>
      <div className="col">
        <h3>Enter Student's Roll Number</h3>
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.rollno}
          name="rollno"
          className="form-control"
          placeholder="Enter Roll No."
          required="required"
        />
      </div>
      <div className="col">
        <h3>Enter CheckIn Time</h3>
        <input
          type="time"
          onChange={handleChange}
          value={formInputData.checkintime}
          name="checkintime"
          className="form-control"
          required="required"
        />
      </div>
      <div className="col">
        <input
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default FormInput;
