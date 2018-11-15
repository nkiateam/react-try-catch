import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TryCatch extends Component {
    // static propTypes = {
    //     component: PropTypes.string,
    //     debug: PropTypes.bool,
    // };

    // static defaultProps = {
    //     component: 'TryCatch',
    //     debug: false,
    // };

    static get ERROR() {
        return {
            RENDER: 'RENDER_ERROR',
            SOURCE: 'SOURCE',
        };
    }

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>오류가 발생하였습니다.!!</h1>
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default TryCatch;
