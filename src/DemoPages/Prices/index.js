import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';


// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';
import Prices from './list/Prices';

const Price = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/prices`} component={Prices}/>
                </div>
                <AppFooter/>
            </div>
        </div>

    </Fragment>
);

export default Price;