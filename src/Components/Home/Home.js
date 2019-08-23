import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        this.props.getPosts();
        setTimeout(() => {
            this.setState({
                posts:window.posts
            })
        }, 2000);
        setTimeout(() => {
            this.setState({
                posts:window.posts
            })
        }, 5000);
        setTimeout(() => {
            this.setState({
                posts:window.posts
            })
        }, 10000);
    }
    render(){
        console.log(window.posts)
    return (
        <div className="home">
           <Container>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <h2>Articles</h2>
                    <div className="posts">
                    {
                        this.state.posts.map((item, index) => {
                            return (
                                <div className="post" key={index}>
                                    <strong>{item.title}</strong>
                                    <div dangerouslySetInnerHTML={{__html: item.content}}>
                                       
                                    </div>
                                    <a href="">
                                        Open Post
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                </Grid>
                {/* <Grid item xs={4}>
                    <div className="advertisement">
                        <span>gop</span>
                    </div>
                    <div className="advertisement">
                        <span>npv</span>
                    </div>
                    <div className="advertisement">
                        <span>lpo</span>
                    </div>
                </Grid> */}
            </Grid>
            </Container>
        </div>
    )
}
}
export default Home;