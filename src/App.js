import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Book from './component/Book/Book';
import Home from './component/Home/Home';
import Video from './component/Video/Video';
import Ebook from './component/Book/Ebook/Ebook';
import { Route } from 'react-router-dom';
import BookComp from './component/BookComp/BookComp';
import { Link } from 'react-router-dom';

 const Menu = (props) => (
  <div>
    <h1>Menu</h1>
    <ul>
      <li>
        <Link to = "/book-comp">Go to BookComp</Link>
      </li>
      <li>
        <Link to = "/book">Go to Book</Link>
        </li>
      <li>
        <Link to = "/">Go to Home</Link>
        </li>
    </ul>
    
    
    
    {renderRoutes(props.route.routes)}
  </div>
); 


const routeConfig = [{
  component: Menu,
  routes: [
    {
      path: "/",
      exact: true,
      component: Home,
    },
    {
      path: "/book",      
      component: Book,
      routes: [{
        path: "/book/ebook",       
        component: Ebook,
      }]
    },
    {
      path: "/video",      
      component: Video,
    },
    
  ]
}
]

function App() {
  return (
    <div className="App">        
        <Router>        
          {renderRoutes(routeConfig)}
          <Route path="/book-comp" component={BookComp}/>
        </Router>
    </div>
  );
}

export default App;
