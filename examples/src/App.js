import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Example from './Example'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Example />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
