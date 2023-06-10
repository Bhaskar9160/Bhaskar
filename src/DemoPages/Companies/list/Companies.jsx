import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';

export default class Companies extends React.Component {
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
        <Button outline className="mb-5 me-2 btn-transition" color="info" style={{marginLeft:'850px'}} onClick={this.toggle}>Add Company</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Company</ModalHeader>
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
                                                <Label for="cname">Company Name</Label>
                                                <Input type="text" name="cname" id="cname"
                                                    placeholder="Enter Company Name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="caddress">Company Address</Label>
                                                <Input type="text" name="caddress" id="caddress"
                                                    placeholder="Enter Company Address"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="phone">Phone</Label>
                                                <Input type="text" name="phone" id="phone"
                                                    placeholder="Enter Company Mobile Number"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="cemail">Company Email</Label>
                                                <Input type="text" name="cemail" id="cemail"
                                                    placeholder="Enter Company Email"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="cpass">Company Password</Label>
                                                <Input type="password" name="cpass" id="cpass"
                                                    placeholder="Enter Company Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="tin">Tax Identification Number</Label>
                                                <Input type="text" name="tin" id="tin"
                                                    placeholder="Enter Tax identification number"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="brn">Business Registration Number</Label>
                                                <Input type="text" name="brn" id="brn"
                                                    placeholder="Enter Business registration number"/>
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
                            <CardTitle>Companies</CardTitle>     
                <Table bordered className="mb-0">
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th>Company Mobile number</th>
                        <th>Company Email</th>
                        <th>Tax Identification Number</th>
                        <th>Business Registration Number</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Bharat</td>
                        <td>Kurnool</td>
                        <td>6348902898</td>
                        <td>bharat@gmail.com</td>
                        <td>98293822838</td>
                        <td>999882828328</td>
                        <td>
                            <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                            <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Reliance</td>
                        <td>Kurnool</td>
                        <td>7848902898</td>
                        <td>reliance@gmail.com</td>
                        <td>56294322838</td>
                        <td>883662828328</td>
                        <td>
                            <a onClick={this.toggle}><FontAwesomeIcon icon={faEdit}/></a>&nbsp;
                            <a href='#'><FontAwesomeIcon icon={faTrash}/></a>    
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Indian</td>
                        <td>Kurnool</td>
                        <td>8348902898</td>
                        <td>indian@gmail.com</td>
                        <td>89293856836</td>
                        <td>977882828345</td>
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
