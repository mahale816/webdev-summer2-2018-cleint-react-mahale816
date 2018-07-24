import React from 'react'
import CourseService from "../../services/CourseService";
import ModuleList from "../modules/ModuleList"
import LessonTabs from "../lessons/LessonTabs";
import TopicPills from "../topics/TopicPills";

export default class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.service = CourseService.instance
    this.state = {
        course:'',
        courseId:''
    }
  }
  componentDidMount() {
    this.service.findCourseById(this.props.match.params.courseId)
      .then(course => this.setState({course: course}));
  }
  // componentWillReceiveProps(newProps){
  //   this.SelectCourse(newProps.match.params.courseId);
  // }
  render() {
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand">
            <h2>Course Editor</h2>
          </div>
        </nav>
          <h3>{this.state.course.title}</h3>
          <div className="container-fluid">
            <ModuleList courseId={this.props.match.params.courseId}/>
          </div>
      </div>
    )
  }
}
