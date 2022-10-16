import React from 'react';
import Header from './pages/Header/Header';
import UnderMenu from './pages/UnderMenu/UnderMenu';
import MainPage from './pages/MainPage/MainPage';
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
