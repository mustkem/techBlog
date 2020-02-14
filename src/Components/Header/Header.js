import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import PromiseBasedActionComponent from "../../Containers/promiseBasedActionContianer";


export default (props) => {
    return (
        <div className="header top">
            <Container className="header-container" maxWidth="lg">
                <div className="logo-wrp">
                    <Link to="/">
                        <img className="logo" src="/images/logo.png" />
                    </Link>
                </div>
                <ul className="navbar">
                    <li>
                        <a href="/">Javascript</a>
                    </li>
                    <li>
                        <a href="/">ReactJs</a>
                    </li>
                    <li>
                        <a href="/">jQuery</a>
                    </li>
                    <li>
                        <a href="/">Demos</a>
                    </li>
                    <li>
                        <a href="/extra">Extra</a>
                    </li>
                    <li>
                        <Link to="/add-post">Add</Link>
                    </li>
                </ul>
            </Container>
            <PromiseBasedActionComponent />
        </div>
    )
}