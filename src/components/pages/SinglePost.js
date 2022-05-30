import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPostById, removePost } from "../../redux/postsRedux";
import { Button, Col, Modal, Row } from "react-bootstrap";


const SinglePost = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const remove = e => {
    e.preventDefault();
    dispatch(removePost(postData.id));
  }
  const dispatch = useDispatch();

  if(!postData) return <Navigate to="/" />
  
  return (
    <section>
      <Row className="d-flex justify-content-between">
        <Col>
        <h3>{postData.title}</h3>
        </Col>
        <Col>
        <Link to={"/post/edit/" + id}>
          <Button className="m-2" variant="outline-primary">Edit</Button>
        </Link>
        <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
        </Col>
      </Row>
      <div>
      <h5 className="my-2"><span>Author: </span>{postData.author}</h5>
      <h5 className="my-2"><span>Published: </span>{postData.publishedDate}</h5>
      <p className="mt-3">{postData.content}</p>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app. Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={remove} variant="danger">Remove</Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}
export default SinglePost;


