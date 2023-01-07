import React from "react";

function FinalTable({ rollNo, finaltableData }) {
  return (
    <div>
      <table className="finaltable">
        <tbody>
          {finaltableData.map((data, index) => {
            return (
              <tr key={index}>
                <td> {data.rollno === rollNo ? data.checkouttime : null} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FinalTable;
