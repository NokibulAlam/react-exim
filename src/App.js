import './App.css';
import Hero from "./components/Core/Hero";
import Header from "./components/layouts/Header";
import About from './components/Core/About';
import Processing from './components/Core/Processing';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Processing />
    </div>
  );
}

export default App;
