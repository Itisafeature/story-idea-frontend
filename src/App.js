import Header from './components/Header';
import Welcome from './components/Welcome';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles['main-content']}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
