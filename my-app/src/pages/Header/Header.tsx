import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header-inner'>
            <div className='logo'></div>
            <nav className='header-nav'>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Цены
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Услуги
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Портфолио
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Акции
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Преимущества
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Блог
              </a>
              <a className='header-nav__link header-nav__link-size' href='#'>
                Контакты
              </a>
            </nav>
            <div className='header-contact'>
              <div className='header-container__inner'>
                <a className='header-contat__tel' href='tel:+72332222222'>
                  +7 (233) 222-22-22
                </a>
                <p className='header-contact__schedule'>08:00 - 22:00, без выходных</p>
              </div>
              <button className='header-contact__btn header-nav__link-size'>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
