import React, { Component } from 'react';
import Pin from "../img/pin.png"
import Logo from "./Logo";
import axios from "axios"; 
import styled from "styled-components"; 

const BASE_ENDPOINT = "http://127.0.0.1:5000/query/v2/"
// const BASE_ENDPOINT = "https://dry-ravine-70681.herokuapp.com/query/v2/"

// CSS STYLING

// styling for div container that holds input field
const HeaderDiv = styled.div`
    margin-top: -10px;
    display: flex;
`;

// styling for button 
const SearchButton = styled.button`
    height: 50px;
    margin-top: 34px;
    width: 160px;
    font-size: 20px;
    font-family: 'Roboto Mono', monospace;
    background: #139AC3;
    color: white;
    border: none;
    outline:none;
    &:hover {
        background: #1089AD;
    }
`;

// styling for div container that holds input field
const SearchDiv = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 650px;
    height: 60px;
    padding-top: 34px;
    padding-left: 10px;
`; 

// styling for input field 
const SearchInput = styled.input`
    width: 680px; 
    height: 45px; 
    padding-left: 8px; 
    outline: none;
    position: center; 
    font-size: 20px;
    font-family: 'Roboto Mono', monospace;
    color: white;
    spellcheck: 'false';
    background: black;
    border: 1px solid white;
`; 


export default class SearchBox extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            query: '',
            results: [],
        }; 
    }

    getResults(query) {
        var formattedQuery = query.split(' ').join('+')
        axios.get(BASE_ENDPOINT + formattedQuery)
        .then(res => {
            this.setState({
                results: res.data.entities.slice(0, 10),
            })
            this.props.onResultsChange(this.state.results)
        })
    }

    onChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onQueryChange(this.state.query)
        this.getResults(this.state.query)
        console.log("QUERY SUBMITTED: ", this.state.query)
    }

    render() {
        return (
        <div>
            <HeaderDiv>
                <Logo/>
                <SearchDiv>
                    <form onSubmit={this.onSubmit}>
                        <SearchInput value={this.state.query} onChange={this.onChange} />
                    </form>
                </SearchDiv>
                <div style={{marginLeft: "60px"}}>
                    <SearchButton onClick={this.onSubmit} type="button">Crawl Reddit</SearchButton>
                </div>
            </HeaderDiv>
        </div>
        ); 
    }

}
