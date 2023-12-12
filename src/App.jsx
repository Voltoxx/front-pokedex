import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/*Contenu principal ici */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
