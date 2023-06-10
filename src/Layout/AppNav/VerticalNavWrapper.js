import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {MainNav,PricesNav, ReportsNav, PetrolStationNav, DispenserNav, TanksNav, TransactionsNav, CompaniesNav} from './NavItems';

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                
                <h5 className="app-sidebar__heading">Dashboard</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Companies</h5>
                <MetisMenu content={CompaniesNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Petrol Station</h5>
                <MetisMenu content={PetrolStationNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Dispenser</h5>
                <MetisMenu content={DispenserNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Tank</h5>
                <MetisMenu content={TanksNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Transactions</h5>
                <MetisMenu content={TransactionsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Prices</h5>
                <MetisMenu content={PricesNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                
                <h5 className="app-sidebar__heading">Reports</h5>
                <MetisMenu content={ReportsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
               
                
                
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);