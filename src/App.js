import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import NewIdea from './components/ideas/NewIdea';
import IdeasList from './components/ideas/IdeasList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['main-content']}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/new-idea" element={<NewIdea />} />
        <Route path="/ideas" element={<IdeasList />} />
      </Routes>
    </div>
  );
}

export default App;
