import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';


export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
  render() {
    const externalCloseBtn = <button className="btn-close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
        <>
        <span className="d-inline-block mb-2 me-2">
        <Button outline className="mb-5 me-2 btn-transition" color="info" style={{marginLeft:'850px'}} onClick={this.toggle}>Add Transaction</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalBody>
            <TransitionGroup>
                    <CSSTransition
                        component="div"
                        className="TabsAnimation"
                        appear={true}
                        timeout={0}
                        enter={false}
                        exit={false}>
                        <div>
                            <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="tcode">Transaction Code</Label>
                                                <Input type="text" name="tcode" id="tcode"
                                                    placeholder="Enter Transaction Code"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="dcode">Dispenser Code</Label>
                                                <Input type="select" name="dcode" id="dcode">
                                                    <option value="D001">D001</option>
                                                    <option value="D002">D002</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="fueltype">Fuel Type</Label>
                                                <Input type="select" name="fueltype" id="fueltype">
                                                    <option value="Petrol">Petrol</option>
                                                    <option value="Diesel">Diesel</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="quantity">Quantity Dispensed</Label>
                                                <Input type="text" name="quantity" id="quantity"
                                                    placeholder="Enter Quantity Dispensed"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="price">Price Per Unit</Label>
                                                <Input type="text" name="price" id="price"
                                                    placeholder="Enter Price"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="amount">Total Amount</Label>
                                                <Input type="text" name="amount" id="amount"
                                                    placeholder="Enter Total Amount"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="date">Date/Time</Label>
                                                <Input type="date" name="date" id="date"
                                                    placeholder="Enter Date/Time"/>
                                            </FormGroup>

                                            
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                            {/* <FormsCustomControls/> */}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
          </ModalFooter>
        </Modal>
      </span>
        
        <div>
            <Row>
                <Col lg="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Transactions</CardTitle>     
                <Table bordered className="mb-0">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Transaction Code</th>
                        <th>Dispenser Code</th>
                        <th>Fuel Type</th>
                        <th>Quantity Dispensed</th>
                        <th>Price Per Unit</th>
                        <th>Total Amount</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Ts001</td>
                        <td>D001</td>
                        <td>Petrol</td>
                        <td>1000</td>
                        <td>50</td>
                        <td>50000</td>
                        <td>03-05-2023 12:00</td>
                        <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ts001</td>
                        <td>D001</td>
                        <td>Petrol</td>
                        <td>1000</td>
                        <td>50</td>
                        <td>50000</td>
                        <td>03-05-2023 12:00</td>
                        <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>   
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ts001</td>
                        <td>D001</td>
                        <td>Petrol</td>
                        <td>1000</td>
                        <td>50</td>
                        <td>50000</td>
                        <td>03-05-2023 12:00</td>
                        <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
            </Card>
        </Col>
    </Row>
    </div> 
      </>
    );
  }
}
