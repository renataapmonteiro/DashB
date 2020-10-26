import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../Actions/index'

class Search extends React.Component{

    constructor(props){
        super(props);
       
        this.state = { term:''}
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);        
    }

    render(){
        return (
            <div >
                <h1>Search</h1>   
            </div>
        )
    }
}


export default Search;
    
