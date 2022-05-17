import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Testimonial from "./pages/Testimonial";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
    return (
        <>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Authenticated Routes */}
                <Route path="/testimony" element={<Testimonial />} />
            </Routes>
        </>
    );
}

export default App;
