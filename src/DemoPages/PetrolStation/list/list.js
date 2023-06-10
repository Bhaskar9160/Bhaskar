import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';

export default class PetrolStations extends React.Component {
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
        <Button outline className="mb-5 me-2 btn-transition" color="info" style={{marginLeft:'850px'}} onClick={this.toggle}>Add Petrol Station</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Petrol Station</ModalHeader>
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
                                                <Label for="stationName">Petrol Station Name</Label>
                                                <Input type="text" name="psname" id="stationName"
                                                    placeholder="Enter Petrol station name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stationAddress">Petrol Station Address</Label>
                                                <Input type="textarea" name="text" id="stationAddress"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stationEmail">Email</Label>
                                                <Input type="email" name="email" id="stationEmail"
                                                    placeholder="Enter Petrol station email"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="stationPassword">Password</Label>
                                                <Input type="password" name="password" id="stationPassword"
                                                    placeholder="Enter password placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="mobile">Mobile Number</Label>
                                                <Input type="text" name="mobile" id="mobile"
                                                    placeholder="Enter mobile number"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="otime">Opening Time</Label>
                                                <Input type="text" name="otime" id="otime"
                                                    placeholder="Enter opening time"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="ctime">Closing Time</Label>
                                                <Input type="text" name="ctime" id="ctime"
                                                    placeholder="Enter closing time"/>
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
                            <CardTitle>Petrol Stations</CardTitle>   
      <Table bordered className="mb-0">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Station Name</th>
            <th>Station Address</th>
            <th>Station Code</th>
            <th>Opening Hours</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bharat Petroleum</td>
            <td>Kurnool</td>
            <td>PS001</td>
            <td>10:00am to 10:00pm</td>
            <td>6738927879</td>
            <td>bharat@gmail.com</td>
            <td>
            <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
            <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bharat Petroleum</td>
            <td>Kurnool</td>
            <td>PS001</td>
            <td>10:00am to 10:00pm</td>
            <td>6738927879</td>
            <td>bharat@gmail.com</td>
            <td>
            <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
            <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bharat Petroleum</td>
            <td>Kurnool</td>
            <td>PS001</td>
            <td>10:00am to 10:00pm</td>
            <td>6738927879</td>
            <td>bharat@gmail.com</td>
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
