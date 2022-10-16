import React from 'react';

const index = () => {
  return (
    <section className='section'>
      <div className='main-page'>
        <div className='container'>
          <div className='main-page__inner'>
            <h1 className='main-page__text'>РЕМОНТ КВАРТИР В МОСКВЕ И МО</h1>
            <h2 className='maon-page__subText'>
              от <span style={{}}>2450</span> руб/м2
            </h2>
            <div className='main-page__description'>
              <div className='main-page__payment'></div>
              <div className='main-page__guarantee'></div>
            </div>
          </div>
          <div className='main-page__calculator'>
            <h3 className='main-page__calculator-supText'>
              РАССЧИТАЙТЕ стоимость ремонта
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
