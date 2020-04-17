import React, { Component } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

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
    ${(props) => {
        if (props.danger) {
            return css`
                animation: ${rotation} ${props.duration}s linear ${props.delay}s infinite;
            `;
        }
    }}
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: skyblue;
`;

const Anchor = styled(Button.withComponent('a'))`
    text-decoration: none;
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Input = styled.input.attrs({
    required: true,
})`
    border-radius: 5px;
`;

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Input placeholder='hello' />
                {/* <Container>
                    <Button>Hello</Button>
                    <Button danger duration={1} delay={2}>
                        Hello
                    </Button>
                    <Anchor href='https://google.com'>Go to google</Anchor>
                </Container> */}
            </React.Fragment>
        );
    }
}

export default App;
