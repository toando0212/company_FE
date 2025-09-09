

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';
import './css/header.css';
import './css/transitions.css';
import './css/footer.css';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
