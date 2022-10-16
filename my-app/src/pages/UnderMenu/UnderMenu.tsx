import React from 'react';
import './UnderMenu.scss';

const UnderMenu = () => {
  return (
    <section className='section'>
      <div className='header-menu'>
        <div className='container'>
          <div className='header-menu__inner'>
            <ul className='header-menu__links'>
              <li className='header-menu__link'>
                Ремонт квартир<i className='fa-solid fa-circle-chevron-down'></i>
              </li>
              <li className='header-menu__link'>
                Дизайн интерьера<i className='fa-solid fa-circle-chevron-down'></i>
              </li>
              <li className='header-menu__link'>
                Ремонт комнат<i className='fa-solid fa-circle-chevron-down'></i>
              </li>
              <li className='header-menu__link'>Дома и коттеджи</li>
              <li className='header-menu__link'>Прочие услуги</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderMenu;
