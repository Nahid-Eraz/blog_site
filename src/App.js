import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className='max-w-screen-md mx-auto pt-20'>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/articles-list">
            <ArticlesList></ArticlesList>
          </Route>
          <Route path="/article">
            <Article></Article>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
