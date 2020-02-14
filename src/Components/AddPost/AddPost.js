import React from 'react';
import Container from '@material-ui/core/Container';
import MyEditor from './MyEditor';
import EditorConvertToHTML from './EditorConvertToHTML'

class AddPost extends React.Component {

    render() {
        return (
            <div className="home">
                <Container maxWidth="lg">
                    <MyEditor
                        updatePost={this.props.addPost}
                        content={''}
                        title={''}
                        desc={''}
                        query={false}
                        slug={false}
                    />
                    {/* <EditorConvertToHTML addPost={this.props.addPost} />> */}
                </Container>
            </div>
        )
    }
}
export default AddPost;
