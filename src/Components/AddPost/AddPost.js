import React from 'react';
import Container from '@material-ui/core/Container';
import MyEditor from './MyEditor';
import EditorConvertToHTML from './EditorConvertToHTML'

import Layout from '../Layout/Layout'

class AddPost extends React.Component {

    render() {
        return (
            <Layout >
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
            </Layout>
        )
    }
}
export default AddPost;
