import React from 'react';
import CourseRow from './CourseRow'
import CourseService from '../../services/CourseService';

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.instance;
    this.deleteCourse = this.deleteCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.formChanged = this.formChanged.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.state = {
      course: {
       title: '',
       id: ''
      },
      courses: []
    };
  }

  editCourse(id, title){
    this.setState(
        {
            course:{
                title: title,
                id: id
            }
        }
    )
  }

  componentDidMount() {
    this.courseService.findAllCourses()
      .then(courses => {
        this.setState({courses: courses});
      });
  }

  formChanged = (event) => {
    console.log(event.target.value);
    this.setState({course: {
      title: event.target.value
    }})
  };

  deleteCourse = (courseId) => {
    this.courseService.deleteCourse(courseId)
      .then(() => this.courseService.findAllCourses())
      .then(courses => this.setState({courses: courses}))
  };

  createCourse = () => {
    this.courseService.createCourse(this.state.course)
      .then(course  => this.courseService.findAllCourses())
      .then(courses => this.setState({courses: courses}))
  };

  updateCourse = () =>{
    this.courseService
        .updateCourse(
            this.state.course.id,
            this.state.course
        ).then(()=>{
          this.state.course.id = '';
          this.courseService.findAllCourses();
    })
  }

    render()
    {
    return (
      <div>
        <h2>Course List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
            <tr>
              <th><input onChange={this.formChanged} className="form-control"/> </th>
              <th><button onClick={this.createCourse} className="btn btn-primary">Add</button> </th>
              <th><button onClick={this.updateCourse} className="btn btn-secondary">Update</button></th>
            </tr>
          </thead>
          <tbody>
          {this.state.courses.map((course) =>
            <CourseRow key={course.id}
                       deleteCourse={this.deleteCourse}
                       edit={this.editCourse}
                       course={course}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CourseList;
