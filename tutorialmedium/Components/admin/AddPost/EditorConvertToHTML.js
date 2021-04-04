import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';


class EditorConvertToHTML extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title:'',
          editorState: EditorState.createEmpty(),
          authorKey:""
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    handleChange=(e,key)=>{
        this.setState({
          [key]:e.target.value
        })
      }

    addPost = () => {
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
        console.log(this.state.editorState.getCurrentContent().toJS())
        let dataToPost = {
            title: this.state.title,
            content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
            authorFiesrName: 'Mi',
            authorlastName: "Nin",
            authorId: 12345,
            createdAt: new Date()
        }
        this.props.addPost(dataToPost);
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className="my-editor">
                <div>
                    <p>
                        Write Post
                    </p>
                </div>
                <div>
                    <p>Title</p>
                    <input value={this.state.title} onChange={(e) => { this.handleChange(e, "title") }} placeholder="title..."></input>
                </div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    ref="editor"
                    spellCheck={true}
                />
                <div>
                    <span>Author Key</span>
                    <input value={this.state.authorKey} onChange={(e) => { this.handleChange(e, "authorKey") }}></input>
                </div>
                <button onClick={this.addPost}>Add</button>
            </div>
        );
    }
}

export default EditorConvertToHTML;