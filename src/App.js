import About from './pages/About';
import Info from './pages/Info';
import Navbar from './pages/Navbar';
import Proficiency from './pages/Proficiency';
import Project from './pages/Project';
import ProjectContent from './ProjectContent';

function App() {
  return (
    <div className="">
      <Navbar />
      <Info />
      <About />
      <Proficiency />
      <Project
        ProjectContent={ProjectContent}
      />
    </div>
  );
}

export default App;
