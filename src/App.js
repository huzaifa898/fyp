import Header from "./components/Header";
import Hero from "./components/Hero";
import What from "./components/What";
import Qoutes from "./components/Qoutes"
import Work from "./components/Work";
import Motivation from "./components/Motivation";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <What/>
       <Qoutes/>
       <Work/>
       <Motivation/>
       <Footer/>
    </div>
  );
}

export default App;
