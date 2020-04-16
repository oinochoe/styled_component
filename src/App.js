import React, { Component, Fragment } from 'react';
import './App.css';

const Button = ({ danger }) => <button className={danger ? 'button button--danger' : 'button button--success'}>Hello</button>;

class App extends Component {
    render() {
        return (
            <Fragment>
                <Button danger />
                <Button />
            </Fragment>
        );
    }
}

export default App;
