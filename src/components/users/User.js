import React, {Fragment, Component} from 'react';
import Spinner from '../layout/Spinner';
import  Repos  from '../repos/Repos';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

class User extends Component{
    componentDidMount(){
        //React router match object
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login)       
    }    

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired, //object
        getUser: PropTypes.func.isRequired, //function
        getUserRepos:PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired
    }

    render(){
        const{name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user;

        const {loading, repos} = this.props

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
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} 
                        className='round-img'                        
                        alt=""
                        style={{width:'150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>                    
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    {/* Button */}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>UserName: </strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
                    </div>
                </div>
                {/* end of card class                 */}
                <div className="card text-center">
                   <div className="badge badge-primary">Followers: {followers}</div>
                   <div className="badge badge-success">Following: {following}</div>
                   <div className="badge badge-light">Public Repos: {public_repos}</div>
                   <div className="badge badge-dark">Public Gists {public_gists}</div>
                </div>                
                {/* end of card class */}
                <Repos repos={repos} />
            </Fragment>
        );
    }
}

export default User; 