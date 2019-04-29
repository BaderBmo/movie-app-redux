import React, { Component } from 'react'
import ByName from './searchByName'
import ByRate from './searchByRate'

class Header extends Component{
    render (){
        return(
            <div className="header">





                <ByName handleSearchTitle={this.props.handleSearchTitle}/>





                <ByRate  handleTheRate={this.props.handleTheRate} filmRate={this.props.theRate}/>
            </div>)}}

export default Header;
//handleThrate={handleThrate}