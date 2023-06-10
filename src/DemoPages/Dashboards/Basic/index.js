import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
    Row, Col,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';


import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
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
                                <Col md="12" lg="12">
                                    <Card className="mb-3">
                                        <CardHeader className="card-header-tab">
                                            <div className="card-header-title">
                                                <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                                Petrol Sales
                                            </div>
                                            
                                        </CardHeader>
                                        <TabContent activeTab={this.state.activeTab1}>
                                            <TabPane tabId="11">
                                                <CardBody className="pt-2">
                                                    <Row className="mt-3">
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                63%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Total Sales Percentage
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="danger"
                                                                            value="63"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                37%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                               Remaining Fuel Level
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="success"
                                                                            value="37"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="divider mt-4"/>
                                                    <Row>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                71%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Petrol Price Increse Percentage
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="primary"
                                                                            value="71"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                41%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Diesel Price Increase Percentage
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="warning"
                                                                            value="41"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                                <div className="widget-chart p-0">
                                                    <div className="widget-chart-content">
                                                        <div className="widget-description mt-0 text-warning">
                                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                                            <span className="ps-1">175.5%</span>
                                                            <span className="text-muted opacity-8 ps-1">increased server resources</span>
                                                        </div>
                                                    </div>
                                                    <ResponsiveContainer height={187}>
                                                        <AreaChart data={data} margin={{top: -45, right: 0, left: 0, bottom: 0}}>
                                                            <defs>
                                                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop offset="10%" stopColor="#f7b924" stopOpacity={0.7}/>
                                                                    <stop offset="90%" stopColor="#f7b924" stopOpacity={0}/>
                                                                </linearGradient>
                                                            </defs>
                                                            <Tooltip/>
                                                            <Area type='monotoneX' dataKey='uv' stroke='#f7b924' strokeWidth={2} fillOpacity={1}
                                                                fill="url(#colorPv2)"/>
                                                        </AreaChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="22">
                                                <div className="widget-chart p-0">
                                                    <ResponsiveContainer height={179}>
                                                        <ComposedChart data={data2}>
                                                            <CartesianGrid stroke="#ffffff"/>
                                                            <Area type="monotone" dataKey="amt" fill="#f7ffd0" stroke="#85a200"/>
                                                            <Bar dataKey="pv" barSize={16} fill="#545cd8"/>
                                                            <Line type="monotone" dataKey="uv" strokeWidth="3" stroke="#d92550"/>
                                                        </ComposedChart>
                                                    </ResponsiveContainer>
                                                    <div className="widget-chart-content mt-3 mb-2">
                                                        <div className="widget-description mt-0 text-success">
                                                            <FontAwesomeIcon icon={faArrowUp}/>
                                                            <span className="ps-2 pe-2">37.2%</span>
                                                            <span className="text-muted opacity-8">performance increase</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CardBody className="pt-2">
                                                    <Row>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                23%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Deploys
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="warning"
                                                                            value="23"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                76%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Traffic
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="info"
                                                                            value="76"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="divider mt-4"/>
                                                    <Row>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                83%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Servers Load
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="danger"
                                                                            value="83"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="6">
                                                            <div className="widget-content">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left me-3">
                                                                            <div className="widget-numbers fsize-3 text-muted">
                                                                                48%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <div className="text-muted opacity-6">
                                                                                Reported Bugs
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-progress-wrapper mt-1">
                                                                        <Progress
                                                                            className="progress-bar-sm progress-bar-animated-alt"
                                                                            color="alternate"
                                                                            value="48"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                </CardBody>
                                            </TabPane>
                                        </TabContent>
                                    </Card>
                                    <Row>
                                       
                                    </Row>
                                </Col>
                                <Col md="12" lg="6">
                                    <Row>
                                        
                                    </Row>
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-warning"/>
                                                <i className="lnr-heart icon-gradient bg-premium-dark"> </i>
                                            </div>
                                            <div className="widget-numbers">
                                                4517.82
                                            </div>
                                            <div className="widget-subheading">
                                                Active Petrol Stations
                                            </div>
                                            <div className="widget-description">
                                                Down by
                                                <span className="text-danger ps-1 pe-1">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                    <span className="ps-1">54.1%</span>
                                                </span>
                                                from 30 days ago
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper chart-wrapper-relative">
                                            <ResponsiveContainer height={100}>
                                                <LineChart data={data2}
                                                        margin={{top: 0, right: 10, left: 10, bottom: 0}}>
                                                    <Line type="monotone" dataKey="pv" stroke="#d6b5ff" strokeWidth={2}/>
                                                    <Line type="monotone" dataKey="uv" stroke="#a75fff" strokeWidth={2}/>
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{ width: '71%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Income Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="54" aria-valuemin="0" aria-valuemax="100" style={{ width: '54%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Expenses Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Spendings Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-start card">
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left pe-2 fsize-1">
                                                        <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                                    </div>
                                                    <div className="widget-content-right w-100">
                                                        <div className="progress-bar-xs progress">
                                                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{ width: '89%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left fsize-1">
                                                    <div className="text-muted opacity-6">Totals Target</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Row>
                                
                            </Row>
                            <Row>
                                <Col md="4">
                                    <div className="card mb-3 widget-chart">
                                        <div className="widget-chart-content">
                                            <div className="icon-wrapper rounded-circle">
                                                <div className="icon-wrapper-bg bg-danger"/>
                                                <i className="lnr-laptop-phone text-danger"/>
                                            </div>
                                            <div className="widget-numbers">
                                                5.82k
                                            </div>
                                            <div className="widget-subheading">
                                               Overal Report
                                            </div>
                                            <div className="widget-description text-danger">
                                                <FontAwesomeIcon icon={faAngleDown}/>
                                                <span className="ps-1">54.1%</span>
                                            </div>
                                        </div>
                                        <div className="widget-chart-wrapper">
                                            <ResponsiveContainer width='100%' aspect={3.0 / 1.0}>
                                                <BarChart data={data}>
                                                    <Bar dataKey='uv' fill='#81a4ff' stroke='#3f6ad8' strokeWidth={2}/>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}
