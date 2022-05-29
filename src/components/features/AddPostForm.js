import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsRedux";


const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate("/", { replace: true }); //
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-4" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text"
          placeholder="Enter author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="formPublished">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date"
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as='textarea'
          rows={4}
          type="textarea"
          placeholder="Leave a comment here"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as='textarea'
          rows={8}
          type="textarea"
          placeholder="Leave a comment here"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>

  )
}

export default AddPostForm;