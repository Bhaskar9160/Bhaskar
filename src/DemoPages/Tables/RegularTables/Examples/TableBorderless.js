import React from 'react';
import { Table } from 'reactstrap';

export default class TableBorderless extends React.Component {
  render() {
    return (
      <Table bordered className="mb-0">
        <thead>
          <tr>
          <th>S.No</th>
          <th>Fuel Type</th>
          <th>Price</th>
          <th>EffectedDateAndTime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th scope="row">1</th>
          <td>Petrol95</td>
          <td>100</td>
          <td>10/05/2023</td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>Diesel75</td>
          <td>50</td>
          <td>4/6/2023</td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>LPG</td>
          <td>200</td>
          <td>5/5/2023</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
