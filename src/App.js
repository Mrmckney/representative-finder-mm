import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/RepresentativeSearch'


function App() {
  return (
    <div className="main-page">
      <Header />
      <div style={{minHeight: "100vh"}}>
      <RepresentativeSearch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
