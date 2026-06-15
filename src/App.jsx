import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import ScheduleDemo from "./pages/ScheduleDemo";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import ViewBooking from "./pages/ViewBooking";
import MyBooking from "./pages/MyBooking";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
                <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />

                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/view-booking" element={<ViewBooking />} />
                <Route path="/my-booking" element={<MyBooking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Boking" element={<Booking />} />
                 <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;