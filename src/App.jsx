import React, {  useState } from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import AppFeatures from './Components/AppFeatures';
import Testimonials from './Components/Testimonials';
import Questions from './Components/Questions';
import Footer from './Components/Footer';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import { IconButton } from '@chakra-ui/react';
function App() {
 
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <div className={theme ? 'light-theme' : 'dark-theme' }>
    <IconButton
      aria-label="Toggle theme"
      icon={theme ? <SunIcon /> : <MoonIcon />}
      onClick={toggleTheme}
      variant="ghost"
      className='m-3'
      fontSize="34px"
    />
      <div className='header-animation'>
        <Header theme={theme} />
      </div>
      <div className='hero-animation'>
        <HeroSection  theme={theme} />
      </div>
      <div className='feature-animation'>
        <FeatureSection />
      </div>
      <div className='app-features-animation'>
        <AppFeatures />
      </div>
      <div className='testimonials-animation'>
        <Testimonials />
      </div>
      <div className='questions-animation'>
        <Questions theme={theme}/>
      </div>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
