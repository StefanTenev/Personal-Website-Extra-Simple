import './App.css';
import Nav
 from './components/Nav';
function App() {
  return (
    <div className="App">
      
      <div className="nav-and-title">
      
        <h1>Title Here</h1>
        <div className="gap-for-title-and-nav" />
        <div className="fixed-gap-for-title-and-nav" />
        <Nav />
        
        
      </div>
      
    </div>
  );
}

export default App;
