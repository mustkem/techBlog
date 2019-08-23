import React from 'react';
import Container from '@material-ui/core/Container';
import MyEditor from './MyEditor';

class AddPost extends React.Component{
    
    render(){
        return (
            <div className="home">
               <Container maxWidth="lg">
                   <MyEditor addPost={this.props.addPost} />
                </Container>
            </div>
        )
    }
}
export default AddPost;
