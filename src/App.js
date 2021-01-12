import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
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
