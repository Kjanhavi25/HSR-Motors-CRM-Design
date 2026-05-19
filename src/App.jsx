import React, { useState } from 'react';
import Layout from './components/Layout';
import HomeScreen from './components/HomeScreen';
import LeadListing from './components/LeadListing';
import LeadDetails from './components/LeadDetails';
import LeadManagement from './components/LeadManagement';
import BusinessDashboard from './components/BusinessDashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen setCurrentScreen={setCurrentScreen} />;
      case 'listing': return <LeadListing />;
      case 'details': return <LeadDetails />;
      case 'management': return <LeadManagement />;
      case 'dashboard': return <BusinessDashboard />;
      default: return <HomeScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <Layout currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}>
      {renderScreen()}
    </Layout>
  );
}

export default App;
