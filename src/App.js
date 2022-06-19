import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import NewIdea from './components/ideas/NewIdea';
import RecentlyCommented from './components/ideas/RecentlyCommented';
import IdeasList from './components/ideas/IdeasList';
import ShowIdea from './components/ideas/ShowIdea';
import styles from './App.module.css';
import React from 'react';

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
        <Route path="/ideas" element={<IdeasList />} />
      </Routes>
    </div>
  );
}

export default App;
