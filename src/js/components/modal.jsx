import React from 'react'
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import{ addArticle} from '../actions'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: "",
      image: "",
      modal: false};

    this.toggle = this.toggle.bind(this);}
  
  callFunction=()=>{
    this.props.addArticle(this.state)
    this.setState({
      modal : false
    })

  }

  handleTitle=(e)=>
    this.setState({
      title:e.target.value})

  handleRate =(e)=>
    this.setState({
      rating:e.target.value})

  handleImage =(e)=>
    this.setState({
      image:e.target.value})


  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));}

  render() {
    const {title,rating,image}=this.state
    return (
      <div>
        <Button id="add" color="light" onClick={this.toggle}>+</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <label>Movie title</label>
              <input className='form-control' onChange={this.handleTitle} />

              <label>Movie rate</label>
              <input className='form-control' onChange={this.handleRate} />
              
              <label>Movie image</label>
              <input className='form-control' onChange={this.handleImage} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.callFunction}>Add movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>);}}

export default connect(null,{addArticle})(ModalExample) ;