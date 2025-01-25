import Sidebar from "./Components/Sidebar";
import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* {Main content} */}
        <div className="flex-1 p-4 overflow-auto">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
