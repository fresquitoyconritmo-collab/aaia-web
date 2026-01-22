
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import TrainingCatalog from './components/TrainingCatalog';
import EthicsSection from './components/EthicsSection';
import Transparency from './components/Transparency';
import Membership from './components/Membership';
import NewsAndAgenda from './components/NewsAndAgenda';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import StatutesView from './components/StatutesView';
import AboutView from './components/AboutView';
import TrainingDetailView from './components/TrainingDetailView';
import BusinessTrainingDetailView from './components/BusinessTrainingDetailView';
import EducationTrainingDetailView from './components/EducationTrainingDetailView';
import TrainingOverview from './components/TrainingOverview';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'statutes' | 'about' | 'training_detail' | 'business_training_detail' | 'education_training_detail' | 'training_overview'>('home');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    if (currentPage === 'home') {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, [currentPage]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const navigateToStatutes = () => {
    setCurrentPage('statutes');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const navigateToTrainingOverview = () => {
    setCurrentPage('training_overview');
    window.scrollTo(0, 0);
  };

  const navigateToTrainingDetail = () => {
    setCurrentPage('training_detail');
    window.scrollTo(0, 0);
  };

  const navigateToBusinessTrainingDetail = () => {
    setCurrentPage('business_training_detail');
    window.scrollTo(0, 0);
  };

  const navigateToEducationTrainingDetail = () => {
    setCurrentPage('education_training_detail');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactSection = document.getElementById('contacto');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToEthics = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const ethicsSection = document.getElementById('etica');
        if (ethicsSection) ethicsSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const ethicsSection = document.getElementById('etica');
      if (ethicsSection) ethicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToMission = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const missionSection = document.getElementById('mision');
        if (missionSection) missionSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const missionSection = document.getElementById('mision');
      if (missionSection) missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToNews = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const newsSection = document.getElementById('actualidad');
        if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const newsSection = document.getElementById('actualidad');
      if (newsSection) newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToTrainingSection = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const trainingSection = document.getElementById('formacion');
        if (trainingSection) trainingSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const trainingSection = document.getElementById('formacion');
      if (trainingSection) trainingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToMembership = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const membershipSection = document.getElementById('unete');
        if (membershipSection) membershipSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const membershipSection = document.getElementById('unete');
      if (membershipSection) membershipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-primary selection:text-white">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onNavigateHome={navigateToHome} 
        onNavigateTraining={navigateToTrainingOverview}
        onNavigateContact={navigateToContact}
        onNavigateEthics={navigateToEthics}
        onNavigateMission={navigateToMission}
        onNavigateNews={navigateToNews}
        onNavigateMembership={navigateToMembership}
      />
      
      {currentPage === 'home' && (
        <main className="animate-in fade-in duration-700">
          <Hero 
            onNavigateAbout={navigateToAbout} 
            onNavigateNews={navigateToNews}
          />
          <section id="mision" className="reveal">
            <Mission 
              onNavigateTraining={navigateToTrainingSection}
              onNavigateNews={navigateToNews}
              onNavigateContact={navigateToContact}
              onNavigateEthics={navigateToEthics}
            />
          </section>
          <section id="formacion" className="reveal">
            <TrainingCatalog 
              onOpenDetail={navigateToTrainingDetail} 
              onOpenBusinessDetail={navigateToBusinessTrainingDetail}
              onOpenEducationDetail={navigateToEducationTrainingDetail}
            />
          </section>
          <section id="etica" className="reveal"><EthicsSection /></section>
          <section className="reveal">
            <Transparency onOpenStatutes={navigateToStatutes} />
          </section>
          <section id="unete" className="reveal">
            <Membership onNavigateContact={navigateToContact} />
          </section>
          <section id="actualidad" className="reveal"><NewsAndAgenda /></section>
          <section id="contacto" className="reveal"><ContactForm /></section>
        </main>
      )}

      {currentPage === 'statutes' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <StatutesView onBack={navigateToHome} />
        </main>
      )}

      {currentPage === 'about' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <AboutView onBack={navigateToHome} onContact={navigateToContact} />
        </main>
      )}

      {currentPage === 'training_overview' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <TrainingOverview onBack={navigateToHome} onContact={navigateToContact} />
        </main>
      )}

      {currentPage === 'training_detail' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <TrainingDetailView onBack={navigateToHome} onContact={navigateToContact} />
        </main>
      )}

      {currentPage === 'business_training_detail' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <BusinessTrainingDetailView onBack={navigateToHome} onContact={navigateToContact} />
        </main>
      )}

      {currentPage === 'education_training_detail' && (
        <main className="animate-in slide-in-from-right-10 duration-500">
          <EducationTrainingDetailView onBack={navigateToHome} onContact={navigateToContact} />
        </main>
      )}

      <Footer 
        onNavigateHome={navigateToHome}
        onNavigateMission={navigateToMission}
        onNavigateTraining={navigateToTrainingSection}
        onNavigateNews={navigateToNews}
        onNavigateMembership={navigateToMembership}
        onNavigateStatutes={navigateToStatutes}
      />
      <AIAssistant />
    </div>
  );
};

export default App;
