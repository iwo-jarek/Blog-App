import { Card, Button, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostByCategory } from "../../redux/postsRedux";

const CategoryPost = () => {
  const { categoryName } = useParams();
  const post = useSelector(state => getPostByCategory(state, categoryName));

  return (
    <div>
      
    </div>

  );
};

export default CategoryPost;