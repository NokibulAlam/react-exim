import './App.css';
import Hero from "./components/Core/Hero";
import Header from "./components/layouts/Header";
import About from './components/Core/About';
import Processing from './components/Core/Processing';
import Product from './components/Core/Product';
import Footer from './components/layouts/Footer';
import ContactPage from './components/Core/ContactPage';
import Objective from './components/Core/Objective';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Processing />
      <Product />
      <Objective />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
