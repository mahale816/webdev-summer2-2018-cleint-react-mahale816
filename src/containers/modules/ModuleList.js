import React from 'react';
import LessonTabs from '../lessons/LessonTabs';
import ModuleService from '../../services/ModuleService';
import ModuleListItem from '../../components/ModuleListItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModuleEditor from '../../containers/modules/ModuleEditor';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModuleIndex: 0,
            courseId: '',
            module: {title: '',
                    moduleId: ''},
            modules: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    selectModule = (index) => {
      console.log(index);
      this.setState({
        selectedModuleIndex: index
      });
    };

    deleteModule(moduleId)
    {
        this.moduleService.deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });

    }
    createModule() {
        this.moduleService.createModule
        (this.state.courseId, this.state.module)
            .then(() => {
            this.findAllModulesForCourse
            (this.state.courseId);
        });
    }

    setModuleTitle(event) {
        console.log(event.target.value)
        this.setState({module: {
                title: event.target.value
            }
        })
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} key={module.moduleId}
                                   delete={this.deleteModule}
                                   courseId={this.state.courseId}/>
        });

        return <ul className="list-group">{modules}</ul>
    }

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-4">
                        <div>
                            <div className="input-group">
                                <input placeholder="New Module"
                                       defaultValue={this.state.module.title}
                                       onChange={this.setModuleTitle}/>
                                <button onClick={this.createModule}
                                        className="btn btn-primary float-right">
                                    Add
                                </button>
                            </div>
                            {/*<div className="input-group-append float-right">*/}
                               {/**/}
                            {/*</div>*/}
                        </div>
                        <br/>
                        <br/>
                        <div>
                            {this.renderModules()}
                        </div>
                    </div>
                    <div className="col-8">
                        <Route path = "/course/:courseId/module/:moduleId"
                               component={ModuleEditor}/>
                    </div>
                </div>
            </Router>

        )}
}
