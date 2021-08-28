import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello <code>cruel</code> World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
        <div>  
        <h1>JavaTpoint</h1>  
        <h2>Training Institutes</h2>  
        <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
        </div>  
        );  
      }  
    }  
    export default App;
    


import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
            <h1 className = "hello" >JavaTpoint</h1>  
            <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;

import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      return(  
         <div>  
            <h1 className = "hello" >{25+20}</h1>  
         </div>  
      );  
   }  
}  
export default App;



import React, { Component } from 'react';  

class App extends Component{
  render(){
    return(
      <div>
        <First/>
        <Second/>
      </div>
    );
  }
}

class First extends Component{  
   render(){  
     var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }
      var yourStyle = {
        fontSize: 20,
        color: '#8DB600'
      }
      var i=5;
      return (  
         <div>  
            <h1 style = {myStyle}>www.javatpoint.com</h1>
            <p style = {yourStyle}>coś /\ między p</p>
            <h2>{i===5 ?'True!':'False!'}</h2>
         </div>  
      );  
   }  
}
class Second extends Component {  
  render() {  
     return (  
        <div>  
           <h1>Drugi class</h1>  
        </div>  
     );  
  }  
}

export default App; 




import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
         data:   
         [  
            {             
               "name":"Abhishek"             
            },  
            {            
               "name":"Saharsh"             
            },  
            {    
               "name":"Ajay"          
            }  
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}  
class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Student Name Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.data.name}</li>   
         </ul>  
      );  
   }  
}  
export default App;  




import React, { Component } from 'react';  
class App extends React.Component {  
  constructor() {  
    super();        
    this.state = { displayBio: true };  
  }  
  render() {  
      const bio = this.state.displayBio ? (  
        <div>  
          <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
          <h3><p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</p></h3>   
          <h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3>
          <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</p>   
        </div>  
      ) : null;  
      return (  
        <div>  
            <h1> Welcome to JavaTpoint!! </h1>  
            { bio }   
        </div>  
      );
  }  
}  
export default App;




import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
  }  
  toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
  }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to JavaTpoint!!</h1>  
                  {  
                      this.state.displayBio ? (   
                        <div>  
                          <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>
                          <button onClick={this.toggleDisplayBio}> Show Less </button>
                        </div>  
                          ) : (  
                        <div>  
                          <button onClick={this.toggleDisplayBio}> Read More </button>  
                        </div>  
                        )  
                  }  
             </div>  
        )  
    }  
}  
export default App;




import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (
          <div>  
            <h1> Welcome to { this.props.name } </h1>
            <p><h4> Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4></p>
          </div>  
      );  
   }  
}  
export default App;

// to coś się sypie i nie działa
ReactDOM.render(<App name = "JavaTpoint!!" />, document.getElementById('app'));




import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Default Props Example</h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "JavaTpoint"  
}  
export default App; 


// to też
ReactDOM.render(<App/>, document.getElementById('app'));




import React, { Component } from 'react';  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "JavaTpoint",         
      }  
   }  
   render() {  
      return (  
         <div>  
            <JTP jtpProp = {this.state.name}/>             
         </div>  
      );  
   }  
}  
class JTP extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.jtpProp}</h3>  
              <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
         </div>    
      );  
   }  
}  
export default App;  


