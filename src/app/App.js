import React from "react";

import { Button, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Routes from "./components/Routes";
import { logout } from "./redux/actions/auth";

const App = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Social Media Manager</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button onClick={() => dispatch(logout)}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Routes />
        </>
    );
};

export default App;
