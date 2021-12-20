import './App.css';
import Header from './components/Header'
import TopBar from './components/TopBar'
import Gallery from './components/Gallery'
import Information from './components/Information'
import Label from './components/Label'

import Support from './components/Support'
import Feedback from './components/Feedback'
import Care from './components/Care'

import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Gallery />
      <Information />
      <Label />
      <Support />
      <Feedback />
      <Care />
      <Footer />
    </div>
  );
}

export default App;
