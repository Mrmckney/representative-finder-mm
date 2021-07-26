import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/RepresentativeSearch'


function App() {
  return (
    <div className="main-page">
      <Header />
      <RepresentativeSearch />
      <Footer />
    </div>
  );
}

export default App;
