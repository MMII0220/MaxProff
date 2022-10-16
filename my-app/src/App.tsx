import React from 'react';
import Header from './pages/Header';
import UnderMenu from './pages/UnderMenu';
import MainPage from './pages/MainPage';
import './styles/App.scss';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <UnderMenu />
        <main className='main'>
          <MainPage />
        </main>
      </div>
    </>
  );
}

export default App;
