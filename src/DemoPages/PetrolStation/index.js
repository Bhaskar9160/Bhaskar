import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';


// Layout
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';
import PetrolStations from './list/list';

const Petrol = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Widgets */}

                    <Route path={`${match.url}/petrolstations`} component={PetrolStations}/>
                </div>
                <AppFooter/>
            </div>
        </div>

    </Fragment>
);

export default Petrol;