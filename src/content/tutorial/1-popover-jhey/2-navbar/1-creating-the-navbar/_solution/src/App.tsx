import "./App.css"

function App() {
  return (
      <nav className="nav">
        <ul>
          <li>
            <a href="#">
              <img src={chatSrc} className="size-6" alt=""/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={boxSrc} className="size-6" alt=""/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={settingsSrc} className="size-6" alt=""/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={documentsSrc} className="size-6" alt=""/>
            </a>
          </li>
          <li>
            <button className="theme-toggler">
              <span className="sr-only">Toggle Theme</span>
              <img src={themeSrc} className="theme-icon" alt=""/>
            </button>
          </li>
          <li>
            <button popoverTarget="menu" popoverTargetAction="toggle">
              <img src={hamburgerSrc} className="size-6" alt=""/>
              <span className="sr-only">Open menu</span>
            </button>
          </li>
        </ul>
      </nav>
  );
}

export default App;
