
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Container from "../src/Container";



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Container/>
    <Footer />
  </BrowserRouter>
     
  )
}

export default App;