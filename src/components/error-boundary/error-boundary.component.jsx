import React from 'react';

import './error-boundary.styles.scss';
import error from '../../assets/error.gif'

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        const { hasErrored } = this.state;

        if (hasErrored) {
            return (
                <div className='error'>
                    <h1 className='title'>Something went wrong</h1>
                    <img src={error} alt="Error." className='img' />
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;