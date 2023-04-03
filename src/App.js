import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import SistemInformasi from './components/SistemInformasi';
import Akuntansi from './components/Akuntansi';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>
      {/* End Intro */}

      {/* Sistem Informasi */}
      <div className="SistemInformasi">
        <SistemInformasi />
      </div>
      {/* End Sistem Informasi */}

      {/* Akuntansi */}
      <div className="Akuntansi">
        <Akuntansi />
      </div>
      {/* End Akuntansi */}

      {/* Contact */}
      <div className="Contact">
        <Contact />
      </div>
      {/* End Contact */}

      {/* Footer */}
      <div className="Footer">
        <Footer />
      </div>
      {/* End Footer */}
    </div>
  );
}

export default App;
