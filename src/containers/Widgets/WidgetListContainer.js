import {connect} from 'react-redux';
import * as actions from '../../actions';
import WidgetListComponent from '../../containers/Widgets/WidgetListComponent';

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch,topicId),
    addWidget: () => actions.addWidget(dispatch),
    save: (topicId) => actions.save(dispatch,topicId),
    preview: () => actions.preview(dispatch)
});
const WidgetListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetListComponent);

export default WidgetListContainer;
