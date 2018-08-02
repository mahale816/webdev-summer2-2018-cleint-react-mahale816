import React, {Component} from 'react'
import WidgetContainer from '../../components/widget'
import '../../Style.css';

class WidgetListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {topicId: ''};
        this.selectTopic = this.selectTopic.bind(this);
        this.saveW = this.saveW.bind(this);
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

    saveW(){

        this.props.save(this.state.topicId);
    }
    render() {
        return(
            <div>
            <div className="container pt-1">
                <div className="row flex-row-reverse pr-2 pb-3">
                    <div className="d-flex float-right my-auto">
                        <label>Preview</label><hr/>
                        <label className="m-auto" id="cm-style">
                            <input type="checkbox" onClick={this.props.preview}/>
                            <span className="round" id="cm-toggle"/>
                        </label>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                                onClick={this.saveW}>
                            Save
                        </button>
                    </div>
                    <div className="d-flex pr-3">
                        <button className="btn btn-secondary" onClick={this.props.addWidget}
                                hidden={this.props.previewMode}>
                            Add Widget
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
            </div>
        )
    }
}
export default WidgetListComponent;
