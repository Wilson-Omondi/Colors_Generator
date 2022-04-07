import './App.css';


function App() {
  return (
    <div className='app'>

      {/* The NavBar */}
      <nav>
        <div className='nav-center'>
          <h4>Colors Generator</h4>
          <ul className='nav-links'>
            <li>
              <a href='index.html' onClick=''>simple</a>
            </li>
            <li>
              <a href='hex.html'>hex</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* THE BODY */}
      <main>
        <div className='container'>
          <h2>
            background color : 
            <span className='color'>#f1f5f8</span>
          </h2>
          <button className='btn btn-hero' id='btn' onClick=''>Click Me</button>
        </div>
      </main>
    </div>
  );
}

export default App;
