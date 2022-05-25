import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {

  const posts = useSelector(state => getAllPosts(state));

  return (
    <section>
      <div class="d-flex justify-content-between">
        <h4>All posts</h4>
        <Link to="/post/add">
          <Button className="mb-3" variant="outline-primary">Add post</Button>
        </Link>
      </div>
      <Row xs={1} md={3} className="g-4">
        {posts.map(post => <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="my-2"><span>Author: </span>{post.author}</Card.Subtitle>
              <Card.Subtitle className="my-2"><span>Published: </span>{post.publishedDate}</Card.Subtitle>
              <Card.Text className="my-3">{post.shortDescription}</Card.Text>
              <Link to="/post/:id">
                <Button variant="primary">Add post</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        )}
      </Row>
    </section>
  );
};

export default Posts;