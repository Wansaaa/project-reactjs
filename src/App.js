import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import AdminstrasiBisnis from './components/AdministrasiBisnis';
import Komunikasi from './components/Komunikasi';
import TeknologiInformasi from './components/TeknologiInformasi';
import Contact from './components/Contact';
import Games from './components/Games';
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

      {/* Administrasi Bisnis */}
      <div className="AdminstrasiBisnis">
        <AdminstrasiBisnis />
      </div>
      {/* End Administrasi Bisnis */}

      {/* Komunikasi */}
      <div className="Komunikasi">
        <Komunikasi />
      </div>
      {/* End Komunikasi */}

      {/* TeknologiInformasi */}
      <div className="TeknologiInformasi">
        <TeknologiInformasi />
      </div>
      {/* End TeknologiInformasi */}

      {/* Contact */}
      <div className="Contact">
        <Contact />
      </div>
      {/* End Contact */}

      {/* Games */}
      <div className="Games">
        <Games />
      </div>
      {/* End Games */}

      {/* Footer */}
      <div className="Footer">
        <Footer />
      </div>
      {/* End Footer */}
    </div>
  );
}

export default App;
