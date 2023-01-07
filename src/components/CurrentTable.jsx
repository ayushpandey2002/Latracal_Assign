import React from "react";
import FinalTable from "./FinalTable.jsx";

function CurrentTable({
  currenttableData,
  finaltableData,
  formCheckOutData,
  handleCheckOutChange,
  handleCheckOutSubmit,
}) {
  return (
    <>
      <div>
        <h1>Student Attendance Table</h1>
      </div>
      <div>
        <table className="currenttable">
          <thead>
            <tr>
              <th>| S.No | </th>
              <th>Student Name |</th>
              <th>Roll Number | </th>
              <th>CheckIn Time | </th>
              <th>CheckOut Time | </th>
            </tr>
          </thead>
          <tbody>
            {currenttableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.fullName}</td>
                  <td>{data.rollno}</td>
                  <td>{data.checkintime}</td>
                  <td>
                    <FinalTable
                      rollNo={data.rollno}
                      finaltableData={finaltableData}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CurrentTable;
