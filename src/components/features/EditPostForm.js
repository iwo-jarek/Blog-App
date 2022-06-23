import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../redux/postsRedux";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "./PostForm";

const EditPostForm = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id))

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(editPost ({ ...post, id }));
    navigate("/")
  };
  
  if(!postData) return <Navigate to="/" />
  
  return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post"
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      category={postData.category}
      shortDescription={postData.shortDescription}
      content={postData.content}
      
    />
  );
};

export default EditPostForm;