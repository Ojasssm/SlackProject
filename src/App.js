import Header from './components/1.Header/Header';
import './components/1.Header/Header.css';

import HeroSection from './components/2.Hero-Section/HeroSection';
import './components/2.Hero-Section/HeroSection.css';

import Societies from './components/3.Societies-Section/Societies';
import './components/3.Societies-Section/Societies.css';

import SiteFeatures from './components/4.Site-Features/SiteFeatures';
import './components/4.Site-Features/SiteFeatures.css';

import CardSection from './components/5.Cards-Section/CardSection';
import './components/5.Cards-Section/CardSection.css';

import ButtonsSection from './components/6.ButtonsSection/ButtonsSection';
import './components/6.ButtonsSection/ButtonsSection.css';



function App() {
  return(
    <body>
      <Header/>
      <HeroSection/>
      <Societies/>
      <SiteFeatures/>
      <CardSection/>
      <ButtonsSection/>
    </body>          
  );
  
}

export default App;
