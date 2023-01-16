import { Route, Outlet, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "./style.scss";
import { AuthContexProvider } from "./context/authContext";
import ProtectedRoute from "./context/protectedRoute";
const Layout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(document.getElementById("root").getBoundingClientRect().y);
    });
  }, [scrollY]);

  return (
    <>
      <Navbar scrollY={scrollY} />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthContexProvider>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute accessBy="authenticated">
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={<Write />} />
              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/register"
                element={
                  <ProtectedRoute accessBy="non-authenticated">
                    <Register />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </div>
        </AuthContexProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
