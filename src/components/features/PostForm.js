import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCategories } from "../../redux/categoriesRedux";


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const selectCategory = useSelector(state => getCategories(state));

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" placeholder="Enter title"
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          value={author}
          onChange={e => setAuthor(e.target.value)}
          type="text" placeholder="Enter title"
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="formPublished">
        <Form.Label>Published</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
        />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-4" controlId="formCategories">
        <Form.Label>Categories</Form.Label>
        <Form.Select value={category}
          onChange={e => setCategory(e.target.value)}>
          <option>Select category...</option>
          {selectCategory.map(category =>
            (<option key={category.id} value={category.name} >{category.name}</option>))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 3 })}
          as='textarea'
          rows={4}
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          type="textarea" placeholder="Leave a comment here"
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short Description is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
        />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );

};

export default PostForm;