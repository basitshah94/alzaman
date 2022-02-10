import React, { Component } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import RadioGroup from '@material-ui/core/RadioGroup';
import {Container, Radio } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import {setQasaidSearchTerm,searchQasaid,setSearchTerm,setSearchCategory} from '../../redux/actions';
import {connect} from 'react-redux';
class Search extends Component {
  state={
    input: '',
    radioValue:'poetry'
  }
  search = async (e) =>{
    e.preventDefault();
    await this.props.setSearchCategory(this.state.radioValue)
    await this.props.setQasaidSearchTerm(this.state.input)
    await this.props.setSearchTerm(this.state.input)
    await this.props.searchQasaid()
    window.location.pathname='/results'
    
  };
  redirectToPdfs = async (e) =>{
    e.preventDefault();
    window.location.pathname='/pdfs'
  };
  redirectToAudio = async (e) =>{
    e.preventDefault();
    window.location.pathname='/audio'
  };
  componentDidMount(){
  }
  render(){
    return (
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input value={this.state.input}
          placeholder='بغیر اعراب اور صلوات کے اردو فونٹ میں لکھ کر سرچ کریں' onChange={(e) => this.setState({input:e.target.value})} />
        </div>
          <div>
            <RadioGroup className='radioGroup' value={this.state.radioValue} onChange={(e) => this.setState({radioValue:e.target.value})}>
              <Container className='radioGroup'>
                  <FormControlLabel value='both' control={<Radio color="primary"/>} label="Both" />
                  <FormControlLabel value='poetry' control={<Radio color="primary"/>} label="Poetry" />
                  <FormControlLabel value='books' control={<Radio color="primary"/>} label="Books" />
              </Container>
            </RadioGroup>
            <div className="search__buttons">
                <Button onClick={this.search} type='submit' variant="outlined"> 
                    S E A R C H
                </Button>
            </div>
            <div className="search__buttons">
                <Button onClick={this.redirectToPdfs} type='submit' variant="outlined"> 
                    PDF BOOKS
                </Button>
                <Button onClick={this.redirectToAudio} type='submit' variant="outlined"> 
                    A U D I O
                </Button>
            </div>
          </div>
      </form>
    );
  }
}

const mapStateToProps=(state)=>{
  const {qasaidSearchTerm,searchTerm,searchCategory}=state;
  return {qasaidSearchTerm,searchTerm,searchCategory}
}
export default connect(mapStateToProps,{setQasaidSearchTerm,searchQasaid,setSearchTerm,setSearchCategory})(Search);