import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    Users: [],
    loading: false  
  }

  async componentDidMount(){
    this.setState({loading: true})
     const response = await axios.get('https:api.github.com/users');
    
    this.setState({users: response.data, loading: false}); 
  }
  
  render(){
        
    return(  
      <div className='App'>        
         <Navbar />
         <div className="container">
           <Users  />
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
