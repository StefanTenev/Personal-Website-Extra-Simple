import { Routes, Route, Link } from "react-router-dom";
import Home from './homePage/Home'
import About from './aboutPage/About'
import Projects from './projectsPage/Projects'
import './Nav.css'

function Nav() {
    //add a desired nav title to to array below to create a new nav link

    const navObjectsArray = [
        {title: 'Home', component: <Home />},
        {title: 'About', component: <About />},
        {title: 'Projects', component: <Projects />}
    ]

    // const navTitlesArray = ["Home", "Projects", "About"]
    // const navComponentsArray = [<Home />, <About />, <Projects />]
    // let navRoutes = []
    // let navLinks = []

    // for(let i = 0; i < navTitlesArray.length; i++){
    //     let route = <Route key={`${navTitlesArray[i]}`} path={`/${navTitlesArray[i]}`} element={navComponentsArray[i]}></Route>
    //     navRoutes.push(route)
    //     let link = <Link to={`/${navTitlesArray[i]}`} className="nav-link">{navTitlesArray[i]}</Link>
    //     navLinks.push(link)
    // }

    
    const navRoutes = navObjectsArray.map( element => <Route key={`${element.title}`} path={`/${element.title}`} element={element.component}></Route>)
    const navLinks = navObjectsArray.map( element => <Link key={`${element.title}Link`}to={`/${element.title}`} className="nav-link">{element.title}</Link>)

   

  return (
    <div className="Nav">
        <nav className="nav-container">
            {navLinks}
        </nav>
        <Routes>
            {navRoutes}
        </Routes>
    </div>
  );
}

export default Nav;