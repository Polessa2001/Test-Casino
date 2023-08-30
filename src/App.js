import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Banner />
      <main>
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
