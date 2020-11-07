import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { Row, Col } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login'
import { facebookLogin } from "../redux/actions/auth";

const FacebookLoginPage = () => {

    const authReducer = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const { isAuthenticated } = authReducer

    const handleFacebookAuth = (response) => {
        console.log(response)
        dispatch(facebookLogin(response.accessToken))
    };

    if (isAuthenticated)
        return <Redirect to="/" />


    return (
        <Col>
            
            <Row className="justify-content-md-center">
                <FacebookLogin
                    textButton="LOGIN WITH FACEBOOK"
                    appId="4655843694457351"
                    fields="name,email,accounts"
                    scope="pages_manage_metadata"
                    callback={handleFacebookAuth}
                />
            </Row>
        </Col>
    );
};

export default FacebookLoginPage