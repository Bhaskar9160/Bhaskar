import React from 'react';
import { Button, Table } from 'reactstrap';

export default class TableExample extends React.Component {
  render() {
    return (
      <div class="form-group row">
                      <label class="col-sm-3 col-form-label"><i class="icon-clock menu-icon"></i> From Date</label>
                      <div class="col-sm-9">
                      <input type="datetime-local" name="fromDate" class="form-control"/>
                      </div>
                      <label class="col-sm-3 col-form-label"><i class="icon-clock menu-icon"></i> To Date</label>
                      <div class="col-sm-9">
                      <input type="datetime-local" name="toDate" class="form-control"/>
                      </div>
                      <Button color="link" type='submit'>Submit</Button>
      <Table className="mb-0" bordered>
      
        <thead>
          <tr>
          <th>S.No</th>
          <th>Dispenser Code</th>
          <th>Fuel Type</th>
          <th>Dispenser Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>D001</td>
            <td>Petrol</td>
            <td>12/04/2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>D002</td>
            <td>Diesel</td>
            <td>12/04/2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Doo3</td>
            <td>Petrol</td>
            <td>12/04/2022	</td>
          </tr>
        </tbody>
      </Table>
      </div>

    );
  }
}
