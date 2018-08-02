import React, {Component} from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import * as constants from '../constants'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let elementHolder;
    let inputHolder;
    let nameHolder;
    return (
    <div>
    <div className="container widget-container"
         style={widgetContainerStyle}>
        <div className="col-md-12">
            <div hidden={preview}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Heading Text</label>
                            <input onChange={() => headingTextChanged(widget.id, inputHolder.value)}
                                   value={widget.text}
                                   ref={node => inputHolder = node}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Heading Size</label>
                            <select onChange={() => headingSizeChanged(widget.id, elementHolder.value)}
                                    value={widget.size}
                                    ref={node => elementHolder = node} className="form-control">
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Heading Title</label>
                            <input onChange={() => headingNameChanged(widget.id, nameHolder.value)}
                                   value={widget.name}
                                   ref={node => nameHolder = node} className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <h5>Preview</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)
};
const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
});
const stateToPropsMapper = state => ({
    preview: state.preview
});
const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);

const Paragraph = ({widget, preview, paraTextChanged, paraNameChanged}) => {
    let inputHolder;
    let nameHolder;
    return(
        <div>
        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Paragraph Text</label>
                                <textarea onChange={() => paraTextChanged(widget.id, inputHolder.value)}
                                          ref={node => inputHolder= node}
                                            value={widget.text} className="form-control">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Paragraph Name</label>
                                <input onChange={() => paraNameChanged(widget.id, nameHolder.value)}
                                       value={widget.name}
                                       ref={node => nameHolder = node} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Paragraph Preview</h4>
                            </div></div></div></div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <p> {widget.text} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

const dispatchToPropsMapperPara = dispatch =>
    ({
        paraTextChanged: (widgetId, newText) =>
            actions.paraTextChanged(dispatch,widgetId, newText),
        paraNameChanged: (widgetId, newName) =>
            actions.paraNameChanged(dispatch,widgetId, newName)
    });

const stateToPropsMapperPara = state => ({
    preview: state.preview
});

const ParaContainer = connect(stateToPropsMapperPara,dispatchToPropsMapperPara)(Paragraph);

const Image = ({widget, preview, imageTextChanged, imageNameChanged}) => {
    let inputHolder3;
    let nameHolder;
    return(
        <div>
        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Image Url</label>
                                <input onChange={() => imageTextChanged(widget.id, inputHolder3.value)}
                                       ref={node3 => inputHolder3= node3}
                                       value={widget.text} className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Image Name</label>
                                <input onChange={() => imageNameChanged(widget.id, nameHolder.value)}
                                       value={widget.name}
                                       ref={node => nameHolder = node} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Image Preview</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2">
                                <img src={widget.text} alt={widget.text} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
};

const stateToPropsMapperImage = state => ({
    preview: state.preview
});

const dispatchToPropsMapperImage = dispatch =>
    ({
        imageTextChanged: (widgetId, imageText) =>
            actions.imageTextChanged(dispatch,widgetId, imageText),
        imageNameChanged: (widgetId, imageName) =>
            actions.imageNameChanged(dispatch,widgetId, imageName)
    });

const ImageContainer = connect(stateToPropsMapperImage,dispatchToPropsMapperImage)(Image);

const List = ({widget, preview, listTextChanged, listTypeChanged, listNameChanged}) =>{
    let elementHolder2;
    let inputHolder2;
    let nameHolder;
    return(
        <div>
        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>List Items</label>
                                <textarea onChange={() => listTextChanged(widget.id, inputHolder2.value)}
                                          ref={node2 => inputHolder2= node2}
                                          value={widget.text}  className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>List Type</label>
                                <select onChange={() => listTypeChanged(widget.id, elementHolder2.value)}
                                        ref={node2 => elementHolder2=node2}
                                        value={widget.listType} className="form-control">
                                    <option value="ordered">Ordered List</option>
                                    <option value="unordered">Unordered List</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>List Name</label>
                                <input onChange={() => listNameChanged(widget.id, nameHolder.value)}
                                       value={widget.name}
                                       ref={node => nameHolder = node} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <h5> Preview</h5>
                            </div></div></div></div>
                <div className="row">
                    <div className="col-md-12">
                        {widget.listType=== "ordered" && <div>{textToOrderedList(widget.text)} </div>}
                        {widget.listType=== "unordered" && <div> {textToUnorderedList(widget.text)}</div>}
                    </div></div>
            </div>
        </div>
        </div>
    )
};


const stateToPropsMapperList = state => ({
    preview: state.preview
});

const dispatchToPropsMapperList = dispatch =>
    ({
        listTextChanged: (widgetId, newListText) =>
            actions.listTextChanged(dispatch,widgetId,newListText),
        listNameChanged: (widgetId, newListName) =>
            actions.listNameChanged(dispatch,widgetId,newListName),
        listTypeChanged: (widgetId,listType) =>
            actions.listTypeChanged(dispatch,widgetId,listType)
    });


const ListContainer = connect(stateToPropsMapperList,dispatchToPropsMapperList)(List);

const textToOrderedList = (text) =>
{
    let stringArray = text.split("\n");
    return (

        <ol className="list-group" >
            {stringArray.map(line => ( <li> {line} </li>))}
        </ol>
    )
};

const textToUnorderedList = (text) =>
{
    let stringArray = text.split("\n");
    return (

        <ul className="list-group" >
            {stringArray.map(line => ( <li> {line} </li>))}
        </ul>
    )
};

const Link = ({widget, preview, linkTextChanged, linkNameChanged, linkDispChanged}) => {
    let inputHolder3;
    let nameHolder;
    let nameDisplay;
    return <div>
        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Link url</label>
                                <input onChange={() => linkTextChanged(widget.id, inputHolder3.value)}
                                       ref={node3 => inputHolder3 = node3}
                                       value={widget.text} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Link Text</label>
                                <input onChange={() => linkDispChanged(widget.id, nameDisplay.value)}
                                       ref={node3 => nameDisplay = node3}
                                       value={widget.linkName} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Link Name</label>
                                <input onChange={() => linkNameChanged(widget.id, nameHolder.value)}
                                       value={widget.name}
                                       ref={node => nameHolder = node} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Link Preview</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href={widget.text}>{widget.linkName}</a>
                            {this.urlId}
                            <iframe width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${widget.text.split('=')[1].split('&')[0]}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

const stateToPropsMapperLink = state => ({
    preview: state.preview
});

const dispatchToPropsMapperLink = dispatch =>
    ({
        linkTextChanged: (widgetId, linkText) =>
            actions.linkTextChanged(dispatch,widgetId, linkText),
        linkDispChanged: (widgetId, linkDispText) =>
            actions.linkDispChanged(dispatch,widgetId, linkDispText),
        linkNameChanged: (widgetId, linkName) =>
            actions.linkNameChanged(dispatch,widgetId, linkName)
    });

const LinkContainer = connect(stateToPropsMapperLink,dispatchToPropsMapperLink)(Link);

const Widget = ({widget, preview, dispatch,widgetLength}) => {
    let element;
    return(
        <div>
        <div hidden={preview}>
            <div className="container widget-container"
                 style={widgetContainerStyle}>
                <div className="row">
                    <div className="col-md-12 text-dark pt-2">
                        <div className="row flex-row pb-1">
                            <div className="col-md-3 d-inline-flex">
                                <h4>{widget.widgetType}</h4>
                            </div>
                            <div className="col-md-9">

                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: DELETE_WIDGET, id: widget.id})
                                    )} className="btn btn-danger"><i className="fa fa-times"/></button>
                                </div>

                                <div className="d-inline-flex pr-1 float-right my-auto" style={widgetListStyle}>
                                    <select value={widget.widgetType}
                                            onChange={e =>
                                                dispatch({
                                                    type: 'SELECT_WIDGET_TYPE',
                                                    id: widget.id,
                                                    widgetType: element.value
                                                })} ref={node => element = node}>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>

                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: constants.INCREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
                                    )} disabled={(widget.widgetOrder === widgetLength)} className="btn btn-warning">
                                        <i className="fa fa-arrow-down"/></button>
                                </div>


                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: constants.DECREASE_ORDER_WIDGET, widgetOrder: widget.widgetOrder})
                                    )} disabled={(widget.widgetOrder === 1)} className="btn btn-warning">
                                        <i className="fa fa-arrow-up"/></button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
            {widget.widgetType === 'Paragraph' && <ParaContainer widget={widget}/>}
            {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
            {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
            {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
        </div>
        </div>
    )
};
const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);
export default WidgetContainer

let widgetListStyle =
    {
        height: "37px" , borderRadius : "3px"
    };

let widgetContainerStyle =
    {
        border: "solid" , borderWidth: "thin" , width:"800px", borderColor: "gray" , borderRadius: "3px"
    };
