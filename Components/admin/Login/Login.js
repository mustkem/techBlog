import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../../Store/Actions/actions";

function Login(props) {
  const [formDataLogin, setFormData] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChangeLogin = (key, e) => {
    const updatedFormData = { ...formDataLogin };

    updatedFormData[key] = e.target.value;

    setFormData(updatedFormData);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    props
      .login(formDataLogin, history)
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div class="log-form medium-size">
          <div className="inner-wrp">
            <h2>Admin</h2>
            <Form onSubmit={handleSubmitLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={(e) => {
                    handleChangeLogin("email", e);
                  }}
                  value={formDataLogin.email}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  onChange={(e) => {
                    handleChangeLogin("password", e);
                  }}
                  value={formDataLogin.password}
                />
              </Form.Group>
              <div className="button-grp">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload, history) => dispatch(login(payload, history)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
