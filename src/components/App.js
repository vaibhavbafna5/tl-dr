import React, { Component } from 'react';
import SearchBox from "./SearchBox"; 
import Logo from "./Logo";
import Dummy from "./Dummy";
import Result from "./Result";
import SearchBoxHeader from "./SearchBoxHeader"; 
import wave from "../img/wave.png"; 
import styled from "styled-components"; 
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'

// CSS STYLING

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
const HeaderDiv = styled.div`
    margin-top: -10px;
    display: flex;
`; 

// styling for thin horizontal line
const DividerLine = styled.hr`
    border-top: 0.05px solid white;
    margin-top: -8px;
    margin-bottom: 5px;
`;


export default class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        query: '',
        results: [],
        cardRoutes: [],
        loading: false,
    }
  }

  onQueryChange = (newQuery) => {
      this.setState({query: newQuery})
  }

  onResultsChange = (newResults) => {
      this.setState({results: newResults})
      console.log("results: ", this.state.results);
  }

  render() {
      return(
            <div>
                <SearchBox 
                query={this.state.query} 
                results={this.state.results} 
                onQueryChange={this.onQueryChange}
                onResultsChange={this.onResultsChange} />
                <DividerLine />
                <div style={{paddingTop: "36px"}}>
                {this.state.results.map((route, index) => (
                    <div key={index}>
                        <Result
                            entityName={route.entity_name}
                            entityScore={route.entity_score}
                        />
                    </div>
                ))}
                </div>
            </div>
      )
  }
}

