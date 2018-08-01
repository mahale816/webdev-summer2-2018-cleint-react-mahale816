import React from 'react';
import {Link} from 'react-router-dom';

class TopicPillItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <li className="nav-item col-sm-auto">
                    <div className="col-xs-3">
                        <span className="nav-link border">
                            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
                            {this.props.topic.title}
                            </Link>
                            <button className="fa fa-times"
                            onClick={()=>{
                                this.props.delete(this.props.topic.id)}}>
                            </button>
                            <button className="fa fa-check">

                            </button>
                        </span>
                    </div>
                </li>
            </div>
        )
    }
}

export default TopicPillItem;