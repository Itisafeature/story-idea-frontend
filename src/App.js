import Header from './components/Header';
import Welcome from './components/Welcome';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import NewIdea from './components/NewIdea';

function App() {
  return (
    <div className={styles['main-content']}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/new-idea" element={<NewIdea />} />
      </Routes>
    </div>
  );
}

export default App;
