import React from   'react';
import {Link} from 'react-router-dom';


class LessonTabItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <span className="nav-link active">
                        <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                            {this.props.lesson.title}
                        </Link>
                        <button className="fa fa-times"
                                onClick={()=>{this.props.delete(this.props.lesson.id)}}>
                        </button>
                        <button className="fa fa-check">
                        </button>
                    </span>
                </li>
            </ul>
        )
    }
}

export default LessonTabItem;