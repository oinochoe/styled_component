import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin:0;
        width:100%;
        height:100vh;
        background:blue;
    }
`;

const Button = styled.button`
    min-width: 120px;
    padding: 5px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    appearance: none;
    background-color: #2ecc71;
    &:active,
    &:focus {
        outline: none;
    }

    background-color: ${(props) => (props.danger ? '#ec1920' : '#2ecc71')};
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: skyblue;
`;

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Container>
                    <Button>Hello</Button>
                    <Button danger>Hello</Button>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
