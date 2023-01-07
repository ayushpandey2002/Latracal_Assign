import React, { useState } from "react";
import FormInput from "./FormInput";
import CurrentTable from "./CurrentTable";
import { getCurrentDate } from "./CurrentDate.jsx";
import "./DisplayFormData.styles.css";
import CheckOutForm from "./CheckOutForm.jsx";

function DisplayFormData() {
  const [currenttableData, setcurrentTableData] = useState([]);
  const [finaltableData, setfinalTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    rollno: "",
    checkintime: "",
  });
  const [studentcount, setstudentcount] = useState(0);
  const [formCheckOutData, setformCheckOutData] = useState({
    rollno: "",
    checkouttime: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };
  const handleCheckOutChange = (evnt, rowdata) => {
    const newdata = (data1) => ({
      ...data1,
      [evnt.target.name]: evnt.target.value,
    });
    setformCheckOutData(newdata);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setcurrentTableData(newData);

      setstudentcount((count) => count + 1);

      const emptyInput = {
        fullName: "",
        rollno: "",
        checkintime: "",
        checkouttime: "",
      };
      setformInputData(emptyInput);
    }
  };

  const handleCheckOutSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formCheckOutData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formCheckOutData];
      setfinalTableData(newData);
      setstudentcount((count) => count - 1);

      const emptyInput = { checkouttime: "", rollno: "" };
      setformCheckOutData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="upperrow">
          <div className="date">
            <h2> Today's Date: {getCurrentDate()} </h2>
          </div>
          <div className="studentcount">
            <h2> Current number of Students in School: {studentcount}</h2>
          </div>
        </div>

        <div className=" row">
          <div className="">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="checkout">
            <CheckOutForm
              handleCheckOutSubmit={handleCheckOutSubmit}
              handleCheckOutChange={handleCheckOutChange}
              formCheckOutData={formCheckOutData}
            />
          </div>
        </div>
        <div className="lowerrow">
          <div className="">
            <CurrentTable
              className="currenttable"
              currenttableData={currenttableData}
              finaltableData={finaltableData}
              formCheckOutData={formCheckOutData}
              handleCheckOutSubmit={handleCheckOutSubmit}
              handleCheckOutChange={handleCheckOutChange}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DisplayFormData;
