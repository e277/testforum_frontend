import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Testimonial from "./pages/Testimonial";
import Login from "./pages/Login";
import Register from "./pages/Register";

import axios from "axios"

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

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
