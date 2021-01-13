import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  async componentDidMount(){
    const response = await axios.get('https:api.github.com/users');
    console.log(response.data);
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
