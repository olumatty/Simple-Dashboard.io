import Content from './Components/Content/Content';
import Dashboard from './Components/dashboard/dashboard';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Content/>
      <Dashboard/>
      
    </div>
  );
}

export default App;
