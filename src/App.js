import "./App.css";
import Heading from "./Components/Header/Heading";
import RouteComp from "./Utility/Routes";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import LoginProvider from "./Utility/LoginProvider";
function App() {
  
  return (
    <div className="Bodywrap">
        <LoginProvider>
        <Heading />
        <Nav />
        {/* <hr /> */}
        <RouteComp />
      <Footer />
      </LoginProvider>
    </div>
  );
}

export default App;
