import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Comedy from './pages/Comedy';
import Drama from './pages/Drama';
import Romance from './pages/Romance';
import Action from './pages/Action';
import Horror from './pages/Horror';

import UpComming from './pages/UpComming';
import RecommendDetail from './pages/RecommendDetail';
import DramaDetail from './pages/DramaDetail';
import ComedyDetail from './pages/ComedyDetail';
import RomanceDetail from './pages/RomanceDetail.jsx';
import ActionDetail from './pages/ActionDetail';
import HorrorDetail from './pages/HorrorDetail';
import QuickBtn from './components/QuickBtn';

import './App.scss'

function App() {
  
  return (
    <>
      <Header />
      
        <Routes>      {/* 2. Routes : 라우트들을 감싸는 컴포넌트 */}
          <Route path="/" element={<Home />} /> {/* 3. Route : 각 경로에 대한 컴포넌트 매핑 */}
          <Route path="/drama" element={<Drama />} />
          <Route path="/Comedy" element={<Comedy />} />
          <Route path="/Romance" element={<Romance />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Horror" element={<Horror />} />

          <Route path="/UpComming/:id" element={<UpComming />} />
          <Route path="/recommendDetail/:id" element={<RecommendDetail />} />
          <Route path="/DramaDetail/:id" element={<DramaDetail />} />
          <Route path="/ComedyDetail/:id" element={<ComedyDetail />} />
          <Route path="/RomanceDetail/:id" element={<RomanceDetail />} />
          <Route path="/ActionDetail/:id" element={<ActionDetail />} />
          <Route path="/HorrorDetail/:id" element={<HorrorDetail />} />
        </Routes>

      <Footer />
      <QuickBtn />
    </>
  )
}

export default App;
