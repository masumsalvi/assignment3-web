import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Checklist from './Checklist';
import NoteTakingTool from './NoteTakingTool';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login component */}
        <Route path="/" element={<Login />} />
        
        {/* Route for the Register component */}
        <Route path='/register' element={<Register />} />
        
        {/* Route for the Dashboard component and its sub-pages */}
        <Route path='/dashboard/*' element={<Dashboard />} />
        
        {/* Route for the "/tools" page which includes the Checklist and NoteTakingTool components */}
        <Route path="/tools" element={
          <div>
            <Checklist />
            <br />
            <NoteTakingTool />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;