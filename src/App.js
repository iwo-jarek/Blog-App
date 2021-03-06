import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SinglePost from './components/pages/SinglePost';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Categories from './components/features/Categories';
import CategoryPost from './components/features/CategoryPost';


const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryName" element={<CategoryPost />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;