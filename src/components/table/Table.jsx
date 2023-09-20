import React from 'react';
import './Table.css';

const Table = ({ theadData, bodyData }) => {
  return (
    <div className="table-container">
      <table>
        {/* <caption>The last 14 F1 champions</caption> */}
        <thead>
          <tr>
            {theadData.map((header, index) => (
              <th key={index} data-cell={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {theadData.map((header, index) => (
                <td key={index} data-cell={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
