import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Contact from './Contact.js';
import About from './About';
import Home from './Home';
import Main from './Main.js';
import Signup from './Signup.js';
import React from 'react';





function App() {
  // Define array of books
  const books = [
    {id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030"
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "أبو بكر الرازي",
      isbn: "893847239479"
    },
    {
      id: 3,
      title: "الشفاء",
      author: "ابن سينا",
      isbn: "9780140449358"
    },
    {
      id: 4,
      title: "ألف ليلة وليلة",
      author: "مجهول",
      isbn: "9780345337665"
    },
    {
      id: 5,
      title: "رواية موسم الهجرة إلى الشمال",
      author: "الطيب صالح",
      isbn: "9781859642352"
    },
    {
      id: 6,
      title: "كتاب الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "9789774275623"
    },
    {
      id: 7,
      title: "كليلة ودمنة",
      author: "ابن المقفع",
      isbn: "9780140455205"
    },
    {
      id: 8,
      title: "في ظلال القرآن",
      author: "سيد قطب",
      isbn: "9789953850864"
    },
    {
      id: 9,
      title: "أيام",
      author: "طه حسين",
      isbn: "9789953890754"
    },
    {
      id: 10,
      title: "رواية رجال في الشمس",
      author: "غسان كنفاني",
      isbn: "9789953890716"
    }
  ];

  return (
    <div className="App">
     

<Router>
      <div>
      <nav  className="topnav">
        <ul>
          <li>
            <Link to="/Main">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
         <li>
          <Link to="/Signup"> <button onClick="handleChange()">Sign up</button></Link>
         
         </li>
          
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
         <Route path="/contact">
          <Contact />
          
        </Route>
        <Route path="/signup">
          <Signup />
          
        </Route>
        <Route path="/Main">
        
        <Main books={books} />
        </Route>
  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  
    </div>
  );
}

export default App;


