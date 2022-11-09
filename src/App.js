import './App.css';
import Hero from "./components/Core/Hero";
import Header from "./components/layouts/Header";
import About from './components/Core/About';
import Processing from './components/Core/Processing';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Processing />
      <Footer />
    </div>
  );
}

export default App;
