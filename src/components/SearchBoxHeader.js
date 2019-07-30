import React, { Component } from 'react';
import Pin from "../img/pin.png"
import axios from "axios"; 
import styled from "styled-components"; 

//CSS STYLING

//style for overall container 
const HeaderDiv = styled.div`
    display:flex; 
    flex-direction: row; 
    align-items: center;
    margin-left: 25px; 
`; 

//styling for div container that holds input field
const SearchDiv = styled.div`
    margin-top: 10px;
    width: fit-content;
    height: 60px; 
    float: left; 
    padding-left: 25px; 
`; 

//styling for input field 
const SearchInput = styled.input`
    width: 640px; 
    height: 45px; 
    padding-left: 6px; 
    outline: none;
    position: left; 
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border: none; 
    font-family: 'proxima-nova'; 
    spellcheck: 'false';
`; 

//styling for img 
const LogoImg = styled.img`
    height: 60px; 
    width: 60px;
`; 

//styling for TLDR text 
const LogoHeader = styled.h2`
    font-family: 'proxima-nova'; 
    color: #5691C8; 
    display: inline-block; 
    font-size: 48px;
    text-align: center;
`; 

export default class SearchBoxHeader extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            query: '',
            numResults: 0,
            results: [],
            entity: '',
        }; 
    }

    makeRequest(query) {
        let formattedQuery = query.split(' ').join('+')
        console.log(formattedQuery)
        axios.get("https://test-api-vaibhav.structure.sh/query/" + formattedQuery)
        .then(res => {
            this.setState({
                results: res.data.items,
                entity: Object.keys(res.data.items)[0]
            }); 
            console.log(this.state.results)
            console.log(this.state.entity)
        })
    }

    componentDidMount () {
        document.body.style.backgroundImage = "none";
        var searchQuery = this.props.match.url; 
        searchQuery = searchQuery.substring(1, searchQuery.length);
        this.setState(() => ({ query: searchQuery }))
        this.makeRequest(searchQuery)
    }

    onChange = (event) => {
        this.setState({query: event.target.value}); 
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("entered submit")
        this.makeRequest(this.state.query)
        // this.setState({
        //     query: event.target.value
        // }); 
        // console.log("SUBMITTED")
        // let results = makeRequest(this.state.query)
        // console.log("WE HAVE RESULTS: ", results)
    }

    render() {
        var entity = this.state.entity
        return(
            <div>
                <HeaderDiv>
                    <LogoImg src={Pin} />
                    <LogoHeader> tldr </LogoHeader> 
                    <SearchDiv>
                        <form onSubmit={this.onSubmit}>
                            <SearchInput id="search_input" value={this.state.query} onChange={this.onChange} />
                        </form>
                    </SearchDiv>
                </HeaderDiv>
                <div>
                    {
                        this.state.results.map((item, i) => (
                            <div key={i}>
                                <p>{item['entity']}</p>
                                {
                                    Object.keys(item['subreddits']).map((sub, j) => (
                                        <div key={j}>
                                            <p>{item['subreddits'][sub]}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                {/* <div>
                    {
                        Object.keys(this.state.results).map((item, i) => (
                            <div key={i}>
                            {this.state.results[item].map(())}
                            </div>
                        ))
                    }
                </div> */}
                {/* <div>
                    {
                        Object.keys(this.state.results).map((item, i) => (
                            Object.keys(this.state.results[item]).map((elem, j) => (
                                Object.keys(this.state.results[item][elem]).map((val, k) => (
                                    <div key={k}>
                                        <p>{item == entity ? '' : item}</p>
                                        {entity = item}
                                        <p>{this.state.results[item]['upvotes']}</p>
                                        <p>{val}</p>
                                        <p>{this.state.results[item][elem][val]}</p>
                                    </div>
                                ))
                            ))
                        ))
                    }
                </div> */}
            </div>
        )
    }

    // render() {
    //     return(
    //         <div>
    //             <HeaderDiv>
    //                 <LogoImg src={Pin} />
    //                 <LogoHeader> tldr </LogoHeader> 
    //                 <SearchDiv>
    //                     <form onSubmit={this.onSubmit}>
    //                         <SearchInput id="search_input" value={this.state.query} onChange={this.onChange} />
    //                     </form>
    //                 </SearchDiv>
    //             </HeaderDiv>
    //             <div>
    //                 {
    //                     Object.keys(this.state.results).map((item, i) => (
    //                         <div key={i}>
    //                             <p>{item}</p>
    //                             <p>{this.state.results[item].permalinks}</p>
    //                             {/* <p>{item.subreddits}</p>
    //                             <p>{item.upvotes}</p> */}
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     )
    // }

}