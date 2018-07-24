import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import HelloWorld from './hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills2'
import CourseList from './containers/courses/CourseList'
import ES6 from './containers/es6/es6'
import CourseEditor from './containers/courses/CourseEditor'


const ModuleListItemStateless = ({title}) =>
  <li className="list-group-item">
    {title} (Stateless)
    <span className="pull-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
      </span>
  </li>

class ModuleListItem extends React.Component {
  render() {
    return(
      <li className="list-group-item">
        {this.props.title}
        <span className="pull-right">
          <i className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </span>
      </li>
    )
  }
}

// class ModuleList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: 'dummy module title',
//       modules: [
//         {title: 'Module 1'},
//         {title: 'Module 2'},
//         {title: 'Module 3'},
//         {title: 'Module 4'}
//       ]
//     };
//     console.log("THIS");
//     console.log(this);
//     // this.titleChanged = this.titleChanged.bind(this);
//   }
//   titleChanged = (event) => {
//     console.log("THAT");
//     console.log(this);
//     if(event) {
//       this.setState({title: event.target.value});
//     }
//   }
//   renderModuleList() {
//     let modules = this.state.modules.map( (module, i) =>
//       <ModuleListItemStateless
//         key={i}
//         title={module.title}/>
//     );
//     return modules
//   }
//   createModule = () => {
//     console.log(this.state.title);
//     console.log(this.state.modules);
//     var module = {title: this.state.title};
//     this.state.modules.push(module);
//     this.setState({"modules": this.state.modules})
//   };
//
//   render() {
//     return (
//       <div>
//         <h1>Module List</h1>
//         <h2>{this.state.title}</h2>
//
//         <input className="form-control"
//                onChange={this.titleChanged}
//                placeholder="title"/>
//         <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>
//
//         <p>{this.state.title}</p>
//         <ul className="list-group">
//           {
//             this.renderModuleList()
//           }
//         </ul>
//       </div>
//     )
//   }
// }
//
// class CourseCard extends React.Component {
//   render() {
//     return (
//
//       <div className="card" styles={{width: '18rem'}}>
//         <img className="card-img-top"
//              src="https://picsum.photos/300/200"/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Card text.</p>
//           <a href="#" className="btn btn-primary">More...</a>
//         </div></div>
//
//     )
//   }
// }

class WhiteBoard extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Whiteboard</h1>
        <CourseList/>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <Link to="/whiteboard">WhiteBoard</Link>
          <Route path='/whiteboard' component={WhiteBoard}/>
          <Route path='/course/:courseId' component={CourseEditor}/>
        </div>
      </Router>
    );
  }}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);