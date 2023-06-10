import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';


// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import Reports1 from './list/Reports1';
import RegularTables from '../Tables/RegularTables';

const Report1 = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                

                    <Route path={`${match.url}/reports`} component={RegularTables}/>
                </div>
                <AppFooter/>
            </div>
        </div>

    </Fragment>
);

export default Report1;