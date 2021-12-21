import Sidebar from "./Sidebar";
import { Routes, Route } from 'react-router-dom';
import Error404 from "./Error404";

function App() {
    return (
        <div id="wrapper">
            <Sidebar />
            <Routes>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default App;
