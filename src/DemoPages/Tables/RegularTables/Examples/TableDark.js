import React from 'react';
import { Table } from 'reactstrap';

export default class TableDark extends React.Component {
  render() {
    return (
      <Table  className="mb-0">
        <thead>
          <tr>
          <th>S.No</th>
          <th>Tank Code</th>
          <th>Tank Capacity</th>
          <th>Fuel Grade</th>
          <th>Fuel Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th scope="row">1</th>
          <td>T001</td>
          <td>10000</td>
          <td>Petrol95</td>
          <td>500</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>T002</td>
          <td>2000</td>
          <td>Diesel</td>
          <td>400</td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>T003</td>
          <td>5000</td>
          <td>Petrol</td>
          <td>300</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
