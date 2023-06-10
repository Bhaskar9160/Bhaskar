import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import TableExample from './Examples/Table';
import TableBordered from './Examples/TableBordered';
import TableBorderless from './Examples/TableBorderless';
import TableDark from './Examples/TableDark';


const RegularTables = (props) => {
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" appear={true}
                    timeout={0} enter={false} exit={false}>
                    <div>
                        
                        <div>
                            <Row>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Dispense By Date</CardTitle>
                                            <TableExample/>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Dispense Value by Period</CardTitle>
                                            <TableBordered/>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Price History</CardTitle>
                                            <TableBorderless/>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="6">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Tank Level History</CardTitle>
                                            <TableDark/>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default RegularTables;
