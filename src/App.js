
import './App.css';
import Head from './components/common/header.jsx'
import Home from './components/pages/landing-pages/home';
import Flexpage from './components/pages/landing-pages/flexpage.jsx'
import About from './components/pages/landing-pages/about.jsx';
import Promo from './components/pages/landing-pages/promo.jsx';
import Category from './components/pages/landing-pages/category.jsx';
import Adver from './components/pages/landing-pages/adver';
import Footer from './components/common/footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Head />}>
    <Route index element={<Flexpage />} />
    <Route path="blogs" element={<About />} />
    <Route path="contact" element={<Promo />} />
    <Route path="*" element={<Category />} />
    <Route path="*" element={<Adver />} />
    <Route path="*" element={<Footer />} />
  </Route>
</Routes>
</BrowserRouter> */}



function App() {
  return <>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/flexpage' element={<Flexpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/adver' element={<Adver />} />
        <Route path='/cate' element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}



export default App;