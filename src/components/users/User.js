import React, {Fragment, Component} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

class User extends Component{
    
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired, //object
        getUser: PropTypes.func.isRequired //function
    }

    render(){

        const {loading, hireable} = this.props

        if(loading){
            return <Spinner />
        }

        return(
            <Fragment>
                <Link to='/' className='btn btn-light'>
                   Back to search 
                </Link> 
                Hireable: {''}               
                {hireable ? (<FaCheckCircle />) : (<FaTimesCircle />) }
            </Fragment>
        )
    }
}

export default User 