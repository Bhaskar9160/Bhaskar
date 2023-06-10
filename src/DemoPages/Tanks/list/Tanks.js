import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';


export default class Tanks extends React.Component {
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
        <Button outline className="mb-5 me-2 btn-transition" color="info" style={{marginLeft:'850px'}} onClick={this.toggle}>Add Tank</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Tank</ModalHeader>
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
                                                <Label for="tcode">Tank Code</Label>
                                                <Input type="text" name="tcode" id="tcode"
                                                    placeholder="Enter Tank Code"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="tcapacity">Tank Capacity</Label>
                                                <Input type="text" name="tcapacity" id="tcapacity"
                                                    placeholder="Enter Tank Capacity"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="fuelgrade">Fuel Grade</Label>
                                                <Input type="select" name="fuelgrade" id="fuelgrade">
                                                    <option value="Petrol95">Petrol 95</option>
                                                    <option value="Diesel12">Diesel 12</option>
                                                    
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="height">Height,mm</Label>
                                                <Input type="text" name="height" id="height"
                                                    placeholder="Enter height of the Tank"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="chproduct">Critical high product alarm,mm</Label>
                                                <Input type="text" name="chproduct" id="chproduct"
                                                    placeholder="Enter critical high product alarm"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="hproduct"> High product alarm,mm</Label>
                                                <Input type="text" name="hproduct" id="hproduct"
                                                    placeholder="Enter high product alarm"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="clproduct">Critical low product alarm,mm</Label>
                                                <Input type="text" name="clproduct" id="clproduct"
                                                    placeholder="Enter critical low product alarm"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="lproduct">Low product alarm,mm</Label>
                                                <Input type="text" name="lproduct" id="lproduct"
                                                    placeholder="Enter low product alarm"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="hwater">High water alarm,mm</Label>
                                                <Input type="text" name="hwater" id="hwater"
                                                    placeholder="Enter high water alarm"/>
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
                            <CardTitle>Tanks</CardTitle>     
                <Table bordered className="mb-0">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Tank Code</th>
                        <th>Tank Capacity</th>
                        <th>Fuel Grade</th>
                        <th>Height,mm</th>
                        <th>Critical high product alarm,mm</th>
                        <th>High product alarm,mm</th>
                        <th>Critical low product alarm,mm</th>
                        <th>Low product alarm,mm</th>
                        <th>High water alarm,mm</th>
                        <th>Tank Level</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>T001</td>
                        <td>10000</td>
                        <td>Petrol95</td>
                        <td>3750</td>
                        <td>3700</td>
                        <td>3650</td>
                        <td>150</td>
                        <td>100</td>
                        <td>50</td>
                        <td>500</td>
                        <td>
                            
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>      
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>T002</td>
                        <td>2000</td>
                        <td>Diesel</td>
                        <td>3750</td>
                        <td>3700</td>
                        <td>3650</td>
                        <td>150</td>
                        <td>100</td>
                        <td>50</td>
                        <td>400</td>
                        <td>
                        <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                        <a href='#'><FontAwesomeIcon icon={faTrash}/></a>      
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>T003</td>
                        <td>5000</td>
                        <td>Petrol</td>
                        <td>3750</td>
                        <td>3700</td>
                        <td>3650</td>
                        <td>150</td>
                        <td>100</td>
                        <td>50</td>
                        <td>300</td>
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
