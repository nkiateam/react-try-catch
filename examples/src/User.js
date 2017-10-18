import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    handleClick = () => {
        console.info("handleClick");
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error){
            throw new Error('사용자 정의 에러');
        }

        return (
            <div>
                <div>
                    {this.props.user.name}
                </div>
                <div>
                    <button type="button" onClick={this.handleClick}>사용자 정의 에러</button>
                </div>
            </div>
        );
    }
}

export default User;
