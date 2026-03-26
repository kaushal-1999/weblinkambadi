// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
// // import Home from "./pages/Home";
// // import Services from "./pages/Services";
// // import About from "./pages/About";
// // import Areas from "./pages/Areas";
// // import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/areas" element={<Areas />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes> */}
//       <Home/>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;