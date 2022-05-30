import { useState } from "react";
import { Form, Button } from "react-bootstrap";


  const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
      e.preventDefault();
      action({ title, author, publishedDate, shortDescription, content });
    };

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
  );

};

export default PostForm;