import React from "react";

function CheckOutForm({
  handleCheckOutChange,
  handleCheckOutSubmit,
  formCheckOutData,
}) {
  return (
    <>
      <h1>Student CheckOut Form</h1>

      <div>
        <h3>Enter Roll No. </h3>
        <input
          onChange={handleCheckOutChange}
          type="text"
          placeholder="Enter Roll No to Check Out"
          value={formCheckOutData.rollno}
          name="rollno"
        />
      </div>
      <div>
        <h3>Enter CheckOut Time </h3>
        <input
          onChange={handleCheckOutChange}
          type="time"
          value={formCheckOutData.checkouttime}
          name="checkouttime"
        />
      </div>
      <div>
        <input type="submit" value="Check Out" onClick={handleCheckOutSubmit} />
      </div>
    </>
  );
}

export default CheckOutForm;
