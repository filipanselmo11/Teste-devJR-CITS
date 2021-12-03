import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListaQuadrinho from '../pages/ListaQuadrinho';
import DetalheQuadrinho from '../pages/DetalheQuadrinho';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={ListaQuadrinho} exact/>
                <Route path="/detalhe-quadrinho" component={DetalheQuadrinho} exact/>
            </Switch>
        </Router>
    );

} 