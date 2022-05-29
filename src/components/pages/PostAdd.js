import {  Row } from "react-bootstrap";
import AddPostForm from "../features/AddPostForm";

const PostAdd = () => {
  return (

    <Row className="d-flex justify-content-center">
      <h2>Add post</h2>
      <AddPostForm />
    </Row>

  )
}

export default PostAdd;