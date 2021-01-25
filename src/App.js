import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false   
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

  //Clear Users Button
  clearUsers = () => this.setState({users:[], loading:false});
  

  render(){ 
        
    return(  
      <div className='App'>        
         <Navbar />
         <div className="container">
           <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear = {this.state.users.length > 0 ? true : false}/>
           <Users loading={this.state.loading} users={this.state.users} />
         </div>         
      </div>
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
