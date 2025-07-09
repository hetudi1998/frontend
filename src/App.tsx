import { useState } from 'react';
import './App.css'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import WhyHireMeSection from './components/Why'
import Footer from './components/Footer'
import ProjectCarousel from './components/Projects'
import TestimonialCarousel from './components/Testimonial'
import ContactFormWithTicker from './components/Contact'
import ResumeTimeline from './components/Timeline'
import BlogPostSection from './components/Blog'
import RoundedImageDisplay from './components/example'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-background">
      <main className="transition-all duration-300">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        
        {!isLoading && (
          <>
            <div id="home"><HeroSection/></div>
            <div id="services"><ServicesSection/></div>
            <div id="about"><ResumeTimeline/></div>
            <div id="portfolio">
              <WhyHireMeSection/>
              <ProjectCarousel/>
            </div>
            <div id="testimonials"><TestimonialCarousel/></div>
            <div id="contact"><ContactFormWithTicker/></div>
            <div id="blog"><BlogPostSection/></div>
            <Footer/>
            <RoundedImageDisplay/>
          </>
        )}
      </main>
    </div>
  )
}

export default App
