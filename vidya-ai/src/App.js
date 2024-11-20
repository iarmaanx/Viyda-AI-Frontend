import logo from './logo.svg';
import './App.css';

import Content from './Content';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <div className='Sidebar'>
      <Sidebar />
      </div>
      <div className='Content'>
      <Content />
      </div>
    </div>
  );
}

export default App;
