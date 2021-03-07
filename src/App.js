import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []   
  }
  //Will show loading or spnning while waiting for the api to complete
  // async componentDidMount(){
    
  //   this.setState({loading: true});
  //    const response = await axios.get(`https://api.github.com/users?client_id=$
  //    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);     
    
  //   this.setState({users:response.data, loading: false}); 
  // };
  
 //Search user input button
  searchUsers = async(text) => {    
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);         
     
    this.setState({users:response.data.items, loading: false}); 
  };

  //Get single Github user
  getUser = (async (username) => {
    this.setState({loading:true});
      const response = await axios.get(`https://api.github.com/users/${username}?client_id=$
       {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
       {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);         
       
      this.setState({user:response.data, loading: false});      
  });  

  //Get users repos
  getUserRepos = (async(username) => {
    this.setState({loading:true});

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page5&sort=created:asc&client_id=$
       {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
       {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({repos: response.data, loading: false});
  })

  
  //Clear Users Button
  clearUsers = () => this.setState({users:[], loading:false});  
   
  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}});

    setTimeout(() => this.setState({alert:null}), 3000)
  }

  render(){ 
    const {users, user, repos, loading} = this.state;
    return(  
      <Router>
      <div className='App'>        
         <Navbar />
         <div className="container">
           <Alert alert={this.state.alert} />
           <Switch>
             <Route exact path='/' render={(props) => (             
               <Fragment>
                 <Search 
                  searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  // checking if there are 0 or more than 0 users 
                  showClear = {users.length > 0 ? true : false}
                  //The alert here has two argments and is just a message text
                  setAlert={this.setAlert}
                />            
                <Users loading={loading} users={users} />
               </Fragment>
             )} />
              
              {/* About page */}
             <Route exact path='/about' component={About} />
             
             {/* single page user */}
             <Route exact path='/user/:login' render={(props) => (
               <User 
               {...props}                
               getUser={this.getUser} 
               getUserRepos = {this.getUserRepos}
               user={user}
               repos={repos}
               loading={loading}
               />
             )}/>

           </Switch>           
         </div>         
      </div>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Alvin React!</h1>
//     </div>
//   );
// }

export default App;
