import React, { Component } from 'react';
import {connect} from 'react-redux'
import {findTitle } from '../actions'
class ByName extends Component{
     handleSearchTitle = (e) =>  {
        this.props.findTitle(e.target.value)
        console.log(e.target.value)
     }
    render(){
        return(
        <div className="name-search">
            <input id="input" placeholder="Type movie name to search" type="text" onChange={this.handleSearchTitle} />
            <button type="submit" id="button">Search</button>
        </div>)}}
export default connect (null, {findTitle})(ByName) 