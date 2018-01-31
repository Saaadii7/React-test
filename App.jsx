import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         count: 0,
         count1: 0
      }
      this.forSetState = this.forSetState.bind(this);
      this.forForceUpdate = this.forForceUpdate.bind(this);
      this.forfindDomNode = this.forfindDomNode.bind(this);
      this.setNewNumber = this.setNewNumber.bind(this)
      this.setNewNumber1 = this.updateState.bind(this)
   }
   forSetState() {
      var item = {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
   forForceUpdate() {
      this.forceUpdate();
   };
   forfindDomNode() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   };
   setNewNumber() {
      this.setState({count: this.state.count + 1})
   }
   updateState(e) {
   	console.log(e.target)
      this.setState({count1: e.target.value});
   }
   render() {
      var i=0;
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
         	<button onClick = {this.forfindDomNode}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>

         	<button onClick = {this.forForceUpdate}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>

         	<h1>{i == 1 ? 'True!' : 'False'}</h1>
            <Header stylo = {myStyle}/>

            <button onClick = {this.forSetState}>SET forSetState</button>
            State Array: 
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         	<button onClick = {this.setNewNumber}>INCREMENT</button>
            <input type = "text" value = {this.state.count} 
               onChange = {this.setNewNumber} />
            <Content stylo = {myStyle} content = {this.props.content} myNumber = {this.state.count}/>
            <p data-myattribute = "saad">This is the content!!!</p>

            <h1> Hello, {this.props.name} </h1>
            <h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>

            <Test myDataProp = {this.state.count1} 
               updateStateProp = {this.setNewNumber1}></Test>
         </div>
      );
   }
}
App.propTypes = {
   name: PropTypes.string,
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
};
App.defaultProps = {
   name: 'Tutorialspoint.com',
   propArray: [1, 2, 3, 4, 5],
   propBool: true,
   propFunc: function(e) {
      return e
   },
   propNumber: 1,
   propString: "String value...",
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 style = {this.props.stylo}>Header</h1>
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
      console.log('Component WILL RECIEVE PROPS!',newProps)
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!',nextProps,nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!',prevProps, prevState);
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   constructor(props) {
      super(props);
      let style = {
      	fontSize: this.props.stylo.fontSize - 50,
      	color: this.props.stylo.color
      }
      this.state = {stylo: style}
      // this.setState({ stylo: count})
   }
   render() {
      return (
         <div>
            <h2 style = {this.state.stylo}>Content</h2>
            <p>{this.props.content}</p>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

class Test extends React.Component {
   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default App;