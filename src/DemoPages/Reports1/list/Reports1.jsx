import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';

export default class Reports1 extends React.Component {
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
        <Button outline className="mb-5 me-2 btn-transition" color="info" style={{marginLeft:'850px'}} onClick={this.toggle}>Add Price</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Price</ModalHeader>
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
                                                <Label for="discode">Price</Label>
                                                <Input type="text" name="discode" id="discode"
                                                    placeholder="Enter Price"/>
                                            </FormGroup>
                                            
                                            <FormGroup>
                                                <Label for="fueltype">Fuel Type</Label>
                                                <Input type="select" name="fueltype" id="fueltype">
                                                    <option value="Petrol">Petrol</option>
                                                    <option value="Diesel">Diesel</option>
                                                    
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="disstatus">EffectedDateAndTime</Label>
                                                <Input type="text" name="disstatus" id="disstatus"
                                                    placeholder="Enter Fuel Type"/>
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
                            <CardTitle>Prices</CardTitle>     
                <Table responsive className="mb-0">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Fuel Type</th>
                        <th>Price</th>
                        <th>EffectedDateAndTime</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Petrol95</td>
                    <td>100</td>
                    <td>10/5/2023</td>
                    <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Diesel75</td>
                    <td>50</td>
                    <td>4/6/2023</td>
                    <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>LPG</td>
                    <td>200</td>
                    <td>5/5/2023</td>
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
