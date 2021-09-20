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




import React, { Component } from 'react';  
import PropTypes from 'prop-types';  
class App extends React.Component {  
   render() {  
      return (  
          <div>  
              <h1>ReactJS Props validation example</h1>  
              <table>  
                  <tr>  
                      <th>Type</th>  
                      <th>Value</th>  
                      <th>Valid</th>  
                      <th>Foo</th>
                  </tr>  
                  <tr>  
                      <td>Array</td>  
                      <td>{this.props.propArray}</td>  
                      <td>{this.props.propArray ? "true" : "False"}</td>  
                      <td>bar </td>
                  </tr>  
                  <tr>  
                      <td>Boolean</td>  
                      <td>{this.props.propBool ? 'True' : 'false'}</td>  
                      <td>{this.props.propBool ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Function</td>  
                      <td>{this.props.propFunc(5)}</td>  
                      <td>{this.props.propFunc(5) ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>String</td>  
                      <td>{this.props.propString}</td>  
                      <td>{this.props.propString ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Number</td>  
                      <td>{this.props.propNumber}</td>  
                      <td>{this.props.propNumber ? "true" : "False"}</td>  
                  </tr>
                  <tr>
                    <td>Anoter Array</td>
                    <td>{this.props.propArray2}</td>
                    <td>{this.props.propArray ? 'True' : "fALSE" }</td>
                  </tr>
             </table>  
        </div>  
        );  
   }  
}  
App.propTypes = {  
    propArray: PropTypes.array,  
    propBool: PropTypes.bool,
    propFunc: PropTypes.func,  
    propNumber: PropTypes.number.isRequired,  
    propString: PropTypes.string.isRequired,
    propArray2: PropTypes.array,
}  
App.defaultProps = {  
    propArray: [1,2,3,4,5],  
    propBool: true,  
    propFunc: function(x){return x^2},  
    propNumber: 1,  
    propString: "JavaTpoint",
    propArray2: [1],
}  
export default App;  




import React, { Component } from 'react';  
  
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log(this.props);  
  }  
  render() {  
    return (  
      <div className="App">  
        <h2>React Constructor Example</h2>  
        <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default App;  



import React, { Component } from 'react';  
  
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com'  
      }  
  }  
  handleEvent = () => {  
    console.log(this.props);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default App;




import React, { Component } from 'react';  
import PropTypes from 'prop-types';  
class App extends React.Component {  
   constructor() {  
      super();        
      this.state = {  
          msg: "Welcome to JavaTpoint"  
      };      
      this.updateSetState = this.updateSetState.bind(this);  
   }  
   updateSetState() {  
       this.setState({  
          msg:"Its a best ReactJS tutorial"  
       });  
   }  
   render() {  
      return (  
         <div>  
             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>SET STATE</button>  
         </div>  
      );  
   }  
}  
export default App;  




import React, { Component } from 'react';  
class App extends React.Component {  
   constructor() {  
      super();            
      this.forceUpdateState = this.forceUpdateState.bind(this);  
   }  
   forceUpdateState() {  
      this.forceUpdate();  
   };  
   render() {  
      return (  
         <div>  
             <h1>Example to generate random number</h1>  
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
         </div>  
      );  
   }  
}  
export default App;  



// nie pyka
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
class App extends React.Component {  
   constructor() {  
      super();  
      this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
      this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);  
   };  
   findDomNodeHandler1() {  
       var myDiv = document.getElementById('myDivOne');  
       ReactDOM.findDOMNode(myDivOne).style.color = 'red';  
   }  
   findDomNodeHandler2() {  
       var myDiv = document.getElementById('myDivTwo');  
       ReactDOM.findDOMNode(myDivTwo).style.color = 'blue';  
   }  
   render() {  
      return (  
         <div>  
             <h1>ReactJS Find DOM Node Example</h1>  
             <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
             <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
             <h3 id = "myDivOne">JTP-NODE1</h3>  
             <h3 id = "myDivTwo">JTP-NODE2</h3>  
         </div>  
      );  
   }  
}  
export default App;  



import React, { Component } from 'react';  
  
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {hello: "JavaTpoint"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   changeState(){  
    this.setState({hello:"foo"});  
 }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
export default App;




import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef();  
  }  
  updateSubmit(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  
  render() {  
    return (  
      <form onSubmit={this.updateSubmit}>  
        <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form>  
    );  
  }  
}  
export default App;  





import React, { Component } from 'react';  
class App extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {value: ''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({value: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfully: ' + this.state.value);  
      event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App;  





import React, { Component } from 'react';  
class App extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
   }  
   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }  
  render() {  
      return (  
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>  
     );  
  }  
}  
export default App;  
