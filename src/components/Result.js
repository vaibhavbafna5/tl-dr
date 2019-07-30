import React, { Component } from 'react';
import styled from "styled-components";

const CardDiv = styled.div`
    width: 600px;
    height: 80px;
    margin-left: 240px;
    display: flex;
    flex-direction: row;
    border: 1px solid white;
    margin-top: 8px;
    margin-bottom: 8px;
    overflow: auto;
`;

const EntityName = styled.h1`
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    color: white;
    display: inline-block;
    position: relative;
    top: 10%;
`;

const EntScoreBackground = styled.span`
    height: 48px;
    width: 48px;
    background-color: #139AC3;
    border-radius: 50%;
    display: inline-block;
    color: white;
    vertical-align: middle;
    margin-right: 5px;
    margin-top: 16px;
`;

const EntScore = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
    text-align: right;
    color: white;
    margin-right: 14px;
    vertical-align: middle;
    margin-top: -36px;
`;

const EntityScore = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 18px;
    color: white;
    background: #139AC3;
    line-height: 50px;
    text-align: center;
    margin: auto;
    margin-right: 4px;
    margin-top: 16px;
    font-family: 'Roboto Mono', monospace;
`;

export default class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entityName: '',
            entityScore: 0,
            subreddit: '',
            commentBody: '',
            commentLink: '',
        };
    }

    render() {
        return(
            <CardDiv>
                <div style={{width: "20px", height: "82px", background: "#139AC3", marginRight: "8px"}}></div>
                <div style={{width: "400px"}}>
                    <EntityName>{this.props.entityName}</EntityName>
                </div>
                <div style={{textAlign: "right", width: "200px", height: "80px", display: "table"}}>
                    <EntityScore>{this.props.entityScore}</EntityScore>
                </div>
            </CardDiv>
        );
    }

}