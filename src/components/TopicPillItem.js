import React from 'react';

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
                            {this.props.topic.title}
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