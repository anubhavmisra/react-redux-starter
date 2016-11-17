import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app'
import IndexComponent from './components/index_component'
import SampleForm from './components/sample_form'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexComponent} />
        <Route path="/sampleform" component={SampleForm} />
    </Route>
);