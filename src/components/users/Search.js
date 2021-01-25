import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text:''
    };

    static proptypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.funct.isrequired
    }
    onSubmit = (e) => {
        e.preventDefault();
        //Passing state text to the main app component through props
        this.props.searchUsers(this.state.text);
        
        //Clearing the form 
        this.setState({text:''});        
    } 

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})}    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form"> 
                 <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={this.state.text}
                    onChange={this.onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            <button className='btn btn-light btn-block'onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search
