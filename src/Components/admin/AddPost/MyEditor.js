import React from "react";
import { Editor, EditorState, RichUtils, ContentState } from "draft-js";

// import htmlToDraft from 'html-to-draftjs';
import { stateFromHTML } from "draft-js-import-html";

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      editorState: EditorState.createEmpty(),
      authorId: null,
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.editorRef = React.createRef();
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  componentDidMount() {
    let contentState = stateFromHTML(this.props.content);

    // const blocksFromHtml = htmlToDraft(this.props.content);
    // const { contentBlocks, entityMap } = blocksFromHtml;
    // const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({
      editorState: editorState,
    });
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  addPost = (e) => {
    e.preventDefault();
    let slug = this.state.title.replace(/\s/g, "-");
    if (this.props.slug) {
      slug = this.props.slug;
    }

    let payload = {
        title: this.state.title,
        desc: this.state.desc,
        content: this.refs.editor.editor.innerHTML,
        creater: "6035c940ab2e02358fac6e6b",
        slug: slug,
    };
    if (this.state.authorId === "8958") {
      this.props.addPost(payload);
      alert("So far so good");
    }
  };

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div className="my-editor">
        <div>
          <p>Write Post</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Title</p>
          <input
            style={{ width: "50%" }}
            value={this.state.title}
            onChange={(e) => {
              this.handleChange(e, "title");
            }}
            placeholder="title..."
          ></input>
        </div>
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p>Description</p>
          <textarea
           style={{ width: "50%" }}
            value={this.state.desc}
            onChange={(e) => {
              this.handleChange(e, "desc");
            }}
          />
        </div>
        <div className="edittor-wrp RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              onTab={this.onTab}
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
        <div className="bttn-wrap">
          <form className="author-id-form" onSubmit={this.addPost}>
            <div class="grp">
              <label>Author Id </label>
              <input
                type="password"
                value={this.state.authorId}
                onChange={(e) => {
                  this.setState({ authorId: e.target.value });
                }}
              />
            </div>
            {!this.props.editPost && <button>Publish</button>}
            {this.props.editPost && <button> Update </button>}
          </form>
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default MyEditor;
