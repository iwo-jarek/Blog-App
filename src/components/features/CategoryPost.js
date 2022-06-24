import { Card, Button, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsByCategory } from "../../redux/postsRedux";
import dateToStr from "../../utils/dateToStr";

const CategoryPost = () => {
  const { categoryName } = useParams();
  const posts = useSelector(state => getPostsByCategory(state, categoryName));

  return (
    <div>
      {posts.map(post => <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="my-2"><span>Author: </span>{post.author}</Card.Subtitle>
              <Card.Subtitle className="my-2"><span>Published: </span>{dateToStr(post.publishedDate)}</Card.Subtitle>
              <Card.Subtitle className="my-2"><span>Category: </span>{post.category}</Card.Subtitle>
              <Card.Text className="my-3">{post.shortDescription}</Card.Text>
              <Link key={post.id} to={"/post/" + post.id}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
       )} 
    </div>
  );
};

export default CategoryPost;