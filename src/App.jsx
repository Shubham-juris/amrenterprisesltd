import "./App.css";
import Footer from "./components/common/Footer.jsx";
import Navbar from "./components/common/Navbar.jsx";
import RouterApp from "./router/RouterApp.jsx";

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <RouterApp />
      <Footer />
    </div>
  );
}

export default App;
