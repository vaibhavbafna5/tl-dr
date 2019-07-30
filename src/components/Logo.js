import React, { Component } from "react"; 
import Pin from "../img/pin.png"
import styled from "styled-components"; 

//CSS STYLING

//styling for container div
const LogoDiv = styled.div`
    align: 'center'; 
    display: block;  
    width: fit-content;  
    padding-left: 25px;
    margin-top: -10px;
    padding-right: 30px;
`;

const LogoHeader = styled.h2`
    font-family: 'Roboto Mono', monospace;
    color: white; 
    display: inline-block; 
    font-size: 46px;
    text-align: center;
`;


export default class Logo extends Component {

    render() {
        return(
            <LogoDiv>
                <LogoHeader> tl;dr </LogoHeader>
            </LogoDiv>
        ); 
        
    }

}