import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllFacebookPages,
    updatePageDetails,
} from "../redux/actions/facebookManager";

import { Col, Row, Table, Button, Modal, Form, Nav } from "react-bootstrap";

const Home = () => {
    const dispatch = useDispatch();
    const authReducer = useSelector((state) => state.facebookManager);
    const { pages } = authReducer;

    useEffect(() => {
        const token = localStorage.getItem("facebook_token") || null;
        if (token) {
            dispatch(getAllFacebookPages(token));
        }
    }, []);

    const [showEdit, setShowEdit] = useState(false);
    const [editFormData, setEditFormData] = useState({
        about: "",
        name: "",
        id: "",
    });

    const { about, name, id } = editFormData;

    const handleEdit = (page) => {
        setEditFormData(page);
        setShowEdit(true);
    };
    const handleHide = () => setShowEdit(false);

    const handleSave = () => {
        dispatch(updatePageDetails(editFormData));
        setShowEdit(false);
    };

    const onChange = (e) =>
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });

    return (
        <>
            <Row>
                <Col md={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link>Facebook</Nav.Link>
                    </Nav>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col>&nbsp;</Col>
                    </Row>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Page Name</th>
                                <th>About</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pages &&
                                pages.map((page) => (
                                    <tr key={page.id}>
                                        <td>{page.name}</td>
                                        <td>{page.about}</td>
                                        <td>
                                            <Button
                                                onClick={() => handleEdit(page)}
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal show={showEdit} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                disabled={true}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={id}
                                disabled={true}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>About Page</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="about"
                                value={about}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;
