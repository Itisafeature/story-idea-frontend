import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import NewIdea from './components/ideas/NewIdea';
import RecentlyCommented from './components/ideas/RecentlyCommented';
import ShowIdea from './components/ideas/ShowIdea';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles['main-content']}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/new-idea" element={<NewIdea />} />
        <Route
          path="/most-recently-commented"
          element={<RecentlyCommented />}
        />
        <Route path="/ideas/:id" element={<ShowIdea />} />
      </Routes>
    </div>
  );
}

export default App;
