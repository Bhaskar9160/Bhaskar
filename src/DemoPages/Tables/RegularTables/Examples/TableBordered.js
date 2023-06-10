import React from 'react';
import { Button, Input, Table } from 'reactstrap';

export default class TableBordered extends React.Component {
  render() {
    return (
      <div class="form-group row">
                      <label class="col-sm-3 col-form-label"><i class="icon-clock menu-icon"></i> From Time</label>
                      <div class="col-sm-9">
                      <Input type="time" name="fromDate" class="form-control"/>
                      </div>
                      <label class="col-sm-3 col-form-label"><i class="icon-clock menu-icon"></i> To Time</label>
                      <div class="col-sm-9">
                      <input type="time" name="toDate" class="form-control"/>
                      </div>
                      <Button color="link" type='submit'>Submit</Button>
      <Table className="mb-0" bordered>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Dispenser Code</th>
          <th>Fuel Type</th>
          <th>Dispenser Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>D001</td>
            <td>Petrol</td>
            <td>1:30 P.M</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>D002</td>
            <td>Diesel</td>
            <td>2:30 P.M</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>D003</td>
            <td>Petrol</td>
            <td>3:30 P.M</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}
