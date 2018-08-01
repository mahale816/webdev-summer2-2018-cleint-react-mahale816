import React from 'react';
import TopicService from '../../services/TopicService';
import TopicPillItem from '../../components/TopicPillItem';
import LessonEditor from "../lessons/LessonEditor";
import TestCase from '../../components/TestCase';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopicEditor from "./TopicEditor";

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: 'Untitled Topic'},
            topics: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.topicService = TopicService.instance;
        this.deleteTopic = this.deleteTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setTopicTitle(event) {
        this.setState({
            topic: {
                title: event.target.value
            }
        })
    }

    setTopics(topics) {
        this.setState(
            {topics: topics}
        )
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(
            newProps.courseId,
            newProps.moduleId,
            newProps.lessonId);
    }
    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(
                courseId,
                moduleId,
                lessonId
            ).then((topics) => {
            this.setTopics(topics)
        });

    }

    createTopic() {
        this.topicService.createTopic(
                this.state.courseId,
                this.state.moduleId,
                this.state.lessonId,
                this.state.topic)
            .then(() => {
            this.findAllTopicsForLesson(this.state.courseId,
                this.state.moduleId,
                this.state.lessonId);
        })

    }


    deleteTopic(topicId)
    {
        this.topicService.deleteTopic(topicId)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId,
                    this.state.moduleId,
                    this.state.lessonId);
            })
    }


    updateTopic(topicId,topictitle)
    {
        let top = {title:topictitle,id:topicId};
        this.topicService.updateTopic(topicId,top)
            .then(() => {
                this.findAllTopicsForLesson
                (this.state.courseId,
                    this.state.moduleId,
                    this.state.lessonId);
            })
    }
    renderTopics() {
        let topics = this.state.topics.map((topic) => {
            return (
                <TopicPillItem key={topic.id}
                               courseId={this.state.courseId}
                               moduleId={this.state.moduleId}
                               lessonId={this.state.lessonId}
                               topic={topic}
                               delete={this.deleteTopic}/>
            )
        });
        return <ul className="nav nav-pills">{topics}</ul>;
    }

    render(){
        return(
            <div>
                <button className="float-right"
                        onClick={this.createTopic}>Add Topic
                </button>
                <div>
                    {this.renderTopics()}
                </div>
                <hr/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                       component={TopicEditor}/>
            </div>
        )
    }
}

