import React from  'react'
import TopicPills from "../topics/TopicPills";
import LessonService from '../../services/LessonService';
import LessonTabItem from '../../components/LessonTabItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LessonEditor from '../../containers/lessons/LessonEditor';


export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {
                title: 'Untitled Lesson',
                lessonId: ''
            },
            lessons: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson =this.deleteLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonService = LessonService.instance;
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);

    }

    createLesson() {
        this.lessonService.createLesson(
            this.state.courseId,
            this.state.moduleId,
            this.state.lesson
        ).then(() => {
            this.findAllLessonsForModule
            (this.state.courseId,
                this.state.moduleId);
        })
    }

    deleteLesson(lessonId)
    {
        this.lessonService
            .deleteLesson(lessonId)
            .then(()=>
                this.findAllLessonsForModule(
                    this.state.courseId,
                    this.state.moduleId));
    }

    updateLesson(lessonId,lessonTitle){
        let les = {title:lessonTitle,id:lessonId};
        this.lessonService
            .updateLesson(lessonId,les)
            .then(()=>
                this.findAllLessonsForModule(
                    this.state.courseId,
                    this.state.moduleId));
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(
                courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons)
            });
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    renderLessons() {
        var tabs =
            this.state.lessons.map((lesson) => {
                return  <LessonTabItem key={lesson.id}
                                 courseId={this.state.courseId}
                                 moduleId={this.state.moduleId}
                                 lesson={lesson}
                                 delete={this.deleteLesson}
                />
            });
        return tabs;
    }
    render() {
        return (
            <Router>
                <div>

                    <ul className="nav nav-tab nav-justified ">
                        {this.renderLessons()}
                        <button className="fa fa-plus btn-secondary" onClick={this.createLesson}></button>
                    </ul>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           component={LessonEditor}/>
                </div>
             </Router>
        );
    }


}
