import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer';
import Home from './Component/Home';
import ContactForm from './Component/ContactForm';
import HairGrowth from './Component/HairGrowth';
import Skin from './Component/Skin';
import HairLoss from './Component/HairLoss';
import Male from './Component/Male';
import Femal from './Component/Femal';
import Dandruff from './Component/Dandruff';
import Alopecia from './Component/Alopecia';
import About from './Component/About';
import Homeopathy from './Component/Homeopathy';
import SkinDieses from './Component/SkinDieses';
import Gynecological from './Component/Gynecological';
import OtherDiseases from './Component/OtherDiseases';
// import OtherDiseases from './Component/OtherDiseases';





function App() {

  return (
    <>


      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/ContactForm' element={<ContactForm />}></Route>
          <Route path='/HairGrowth' element={<HairGrowth />}></Route>
          <Route path='/Skin' element={<Skin />}></Route>
          <Route path='/HairLoss' element={<HairLoss />}></Route>
          <Route path='/Male' element={<Male />}></Route>
          <Route path='/Femal' element={<Femal />}></Route>
          <Route path='/Alopecia' element={<Alopecia />}></Route>
          <Route path='/Dandruff' element={<Dandruff />}></Route>
          <Route path='/Homeopathy' element={<Homeopathy />}></Route>
          <Route path='/SkinDieses' element={<SkinDieses />}></Route>
          <Route path='/Gynecological' element={<Gynecological />}></Route>
          <Route path='/OtherDiseases' element={<OtherDiseases/>}></Route>
        </Routes>
        <Footer />
        
      </Router>

    </>
  )
}

export default App;
