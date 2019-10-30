import React, { Component } from 'react';
import styled from 'styled-components';

const Result = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    justify-content: flex-end;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #fff;
    box-shadow: inset 2px 4px 0 0 rgba(0, 0, 0, .2);
`;

const Button = styled.button`
    justify-content: center;
    user-select: none;
    background-color: #e8e8e8;
    transition: all .1s ease-out;
    box-shadow: inset -2px -4px 0 0 rgba(0, 0, 0, .2);
    border: none;

    &, &:focus {
        outline: none;
    }

    &:hover {
        background-color: #dedede;
    }

    &:active {
        margin-top: 2px;
        box-shadow: inset 0 -2px 0 0 rgba(0,0,0,.2);
    }

    &:nth-child(18) {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &:nth-child(4n + 1), &:last-child {
        background-color: #ff8d00;
    }
`;

const Calculator = styled.div`
    width: 400px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px repeat(5, 1fr);
    grid-gap: 5px;

    ${Result}, ${Button} {
        display: flex;
        align-items: center;
        font-size: 2em;
    }
`;

function Buttons(props) {
    const buttons = [
        'C', '+/−', '%', {'÷': '/'},
        7, 8, 9, {'×': '*'},
        4, 5, 6, {'−': '-'},
        1, 2, 3, '+',
        0, '.', '='
    ];

    return buttons.map((button) => {
        const [text, value] = typeof button === 'object'
            ? Object.entries(button)[0]
            : [button, button];

        return <Button key={`button_${value}`} name={value} onClick={props.onClick}>{text}</Button>
    });
}

class App extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            result: ''
        }
    }

    handleClick(event) {
        const {target: {name}} = event;
        const value = isNaN(parseInt(name))
            ? name
            : parseInt(name);
        let result = '';

        switch (value) {
            case '=':
                result = this.calculate();
                break;
            case 'C':
                break;
            case '+/−':
                result = this.state.result * -1;
                break;
            default:
                result = this.state.result === '0'
                    ? value
                    : `${this.state.result}${value}`;
        }

        this.setState({
            result
        });
    }

    calculate = () => {
        let result;

        try {
            // eslint-disable-next-line
            result = `${eval(this.state.result) || ''}`;
        } catch (e) {
            result = 'error';
        } finally {
            return result;
        }
    };

    render() {
        return (
            <Calculator>
                <Result>{this.state.result || 0}</Result>
                <Buttons onClick={this.handleClick} />
            </Calculator>
        );
    }
}

export default App;
