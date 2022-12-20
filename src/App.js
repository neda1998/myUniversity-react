import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NewsBox from './components/NewsBox/NewsBox';
import NewText from './components/NewText/NewText';
import ServicesBox from './components/ServicesBox/ServicesBox';
import Slider from './components/Slider/Slider';
import StickyMenu from './components/StickyMenu/StickyMenu';

function App() {
  return (
  <>
    <Header />
    <Sidebar />
    <StickyMenu />
    <NewText />
    <ServicesBox />
    <Slider />
    <NewsBox />
  </>
  );
}

export default App;
