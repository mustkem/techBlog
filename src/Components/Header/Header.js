import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <div className="header top">
            <Container maxWidth="lg">
                <ul className="navbar">
                <li>
                <   Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-post">Add</Link>
                </li>
                {/* <li>
                    <a href="/">Css</a>
                </li>
                <li>
                    <a href="/">ReactJs</a>
                </li> */}
                </ul>
            </Container>
        </div>
    )
}