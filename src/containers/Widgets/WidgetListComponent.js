import React, {Component} from 'react'
import WidgetContainer from '../../components/widget'
import '../../Style1.css';

class WidgetListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {topicId: ''};
        this.selectTopic = this.selectTopic.bind(this);
        this.saveToServer = this.saveToServer.bind(this);
    }

    componentDidMount() {
        this.selectTopic
        (this.props.topicId);
    }
    componentWillReceiveProps(newProps) {
        this.selectTopic
        (newProps.topicId);
        if(this.props.topicId!==newProps.topicId){
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    selectTopic(topicId) {
        this.setState({topicId: topicId});
    }

    saveToServer(){

        this.props.save(this.state.topicId);
    }
    render() {
        return(
            <html>
            <body>
            <div className="container pt-5">
                <div className="row flex-row-reverse pr-2 pb-3">
                    <div className="d-flex float-right my-auto">

                        <label className="switch m-auto">
                            <input type="checkbox" onClick={this.props.preview}/>
                            <span className="slider round"/>
                        </label>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                                onClick={this.saveToServer}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {this.props.widgets.map(widget => (
                    <WidgetContainer widget={widget}
                                     preview={this.props.previewMode}
                                     key={widget.widgetOrder}
                                     widgetLength={this.props.widgets.length}/>
                ))}
            </div>

            <div className="container pt-1">
                <div className="row flex-row-reverse pr-2 pb-3">
                    <div className="row flex-row-reverse pr-2 pb-3">
                        <button className="btn btn-danger" onClick={this.props.addWidget}
                                hidden={this.props.previewMode}>
                            <i className="fa fa-plus-square"/>
                        </button>
                    </div>
                </div>
            </div>
            </body>
            </html>
        )
    }
}
export default WidgetListComponent;
