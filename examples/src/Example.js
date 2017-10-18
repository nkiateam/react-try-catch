import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import TryCatch from '../../lib/react-try-catch'
//import TryCatch from '../../src/react-try-catch'
import User from './User';

class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {name: 'Chris'},
            hasError: false
        }
    }

    /*
    componentDidCatch(error, errorInfo) {
        console.info("componentDidCatch", error);
        this.setState(state => ({
            ...state, hasError: true
        }))
    }
    */

    handleClick = () => {
        console.info("handleClick");
        //throw new Error('에러 발생');
        this.setState(state => ({
            ...state, user: null
        }))
    }

    render() {
        return (
            <div>
                <TryCatch>
                    <User user={this.state.user} /><br/>
                    <button type="button" onClick={this.handleClick}>테스트</button>
                </TryCatch>
            </div>
        );
    }
}

export default Example;
