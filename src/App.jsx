import Sidebar from "./Components/Sidebar";
import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-4">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
