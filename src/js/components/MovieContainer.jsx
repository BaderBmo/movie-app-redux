import React, { Component } from 'react';
import MovieCard from './movieCard'
import ModalExample from './modal'
import Header from './Header'

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { movies :  state.addReducer.movies}
}

class MovieContainer extends Component {
    constructor(props){
        super(props)
this.state ={theRate:5,
             searchedTitle:""}}

handleTheRate =(value)=>{
this.setState({
     theRate:value})}



handleSearchTitle = (title) =>{
    this.setState({
searchedTitle:title
    })}

    

render (){

    return (
        <div className="movie-container">
            <Header handleTheRate={this.handleTheRate} theRate={this.state.theRate} handleSearchTitle={this.handleSearchTitle}/>
            {this.props.movies.filter(el => (el.rating<=this.state.theRate) &&(el.title.toLowerCase().includes(this.state.searchedTitle.toLowerCase()))  ).map(el => <MovieCard description={el} />)}

            <ModalExample />
        </div>)}}

export default connect(mapStateToProps)(MovieContainer);