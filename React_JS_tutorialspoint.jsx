// Using JSX
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>Hello World 2</div>
    );
  }
}
export default App;




// Nested Elements
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
        );
    }
}
export default App;




// Attributes
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>
            </div>
        );
    }
}
export default App;




// JavaScript Expressions
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{1+4}</h1>
            </div>
        );
    }
}
export default App;


import React from 'react';

class App extends React.Component {
  render() {
    var i = 1;
    return (
      <div>
        <h1>{i === 1 ? 'True' : 'False'}</h1>
      </div>
    );
  }
}
export default App;




// Styling
import React from 'react';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    var i = 1
    return (
      <div>
        <h1 style = {myStyle}>{i === 1 ? 'True' : 'False'}</h1>
      </div>
    );
  }
}
export default App;




// Comments
import React from 'react';

class App extends React.Component {
  render() {
    var i = 1
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    return (
      <div>
        <h1 style = {myStyle}>{i === 1 ? 'True' : 'False'}</h1>;
        {/* multi line comment */}
      </div>
    );
  }
}
export default App;




// Stateless Example
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Text/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    var myStyle1 = {
      fontSize: 100,
      color: '#FF0000'
    }
    return (
      <div>
        <h1 style = {myStyle1}>Header</h1>
        {/* multi line comment */}
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    var i = 1
    var myStyle2 = {
      fontSize: 20,
      color: '#AA0560'
    }
    return (
      <div>
        <h1 style = {myStyle2}>{i === 1 ? 'True' : 'False'}</h1>
        {/* multi line comment */}
      </div>
    );
  }
}

export default App;




// Stateful Example
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataa:
        [
          {
            "id_id": 1,
            "name": "Foo",
            "age": "20"
          },
          {
            "id_id": 2,
            "name": "Bar",
            "age": "30"
          },
          {
            "id_id": 3,
            "name": "Baz",
            "age": "40"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <table>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          {/* to jest zamieszane */}
          <tbody>
            {this.state.dataa.map((personn, iu) => <TableRow key={iu}
              data={personn} />)}
          </tbody>
        </table>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>table name</h1>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id_id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
export default App;




// Using State
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header from state',
      content: 'Content from state'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
        <h3>inside return</h3>
      </div>
    )
  }
}

export default App;




// Using Props
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            <h3>inside return</h3>
         </div>
      );
   }
}
export default App;

ReactDOM.render(
  <App headerProp = "Header from props..." contentProp = "Content
   from props..."/>, 
  document.getElementById('root')
);




// Using Props #2
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            <h3>inside return</h3>
         </div>
      );
   }
}
App.defaultProps = {
  headerProp: "Header from props...",
  contentProp: "Content from props..."
}
export default App;




// State and Props
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }
   render() {
      return (
         <div>
            <Header headerProp2 = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp2}</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
export default App;




// Validating Props
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
   render() {
      return (
         <div>
            <table>
              <tr>
                <th>propType</th>
                <th>Is type ?</th>
              </tr>
              <tr>
                <td><h3>Array: {this.props.propArray}</h3></td>
                <td><h4>Is Array ? {this.props.propArray ? 'True' : 'False'}</h4></td>
              </tr>
            </table>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
         </div>
      );
   }
}

App.propTypes = {
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propObject: PropTypes.object
}

App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",
  propObject: {
    objectName1:"objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
}
export default App;




// Set State
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  };
  setStateHandler() {
    var item = "setState... name"
    var myArray = this.state.data.slice();
	  myArray.push(item);
    this.setState({data: myArray})
  };
  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler}>SET STATE BUTTON</button>
        <h4>State Array Name: {this.state.data}</h4>
      </div>
    );
  }
}
export default App;




// Force Update
import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}
export default App;




// Find Dom Node
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };
  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'pink';
  }
  render() {
    return (
      <div>
        <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
        <div id = "myDiv">NODE</div>
      </div>
    );
  }
}
export default App;




// Lifecycle Methods
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
            <h4>number: {this.state.data}</h4>
         </div>
      );
   }
}
class Content extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}
export default App;




// Forms
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <input   type = "text" 
                     value = {this.state.data} 
                     onChange = {this.updateState}/>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;




// Forms #2





















