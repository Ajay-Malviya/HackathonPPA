import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ClinicsPage from './components/Clinicspage';
import FindServicePage from './components/FindServicePage';
import DiasbilityInfoPage from './components/DiasbilityInfoPage';
import EssentialDocsPage from './components/EssentialDocsPage';
import ResourcesPage from './components/ResourcesPage';
import SearchResultsPage from './components/SearchResultsPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/find-clinics' element={<ClinicsPage />} />
        <Route path='/find-service' element={<FindServicePage />} />
        <Route path='/search-results' element={<SearchResultsPage />} />
        <Route path='/disability-info' element={<DiasbilityInfoPage />} />
        <Route path='/essential-docs' element={<EssentialDocsPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
      </Routes>
    </div>
  );
};

export default App;
