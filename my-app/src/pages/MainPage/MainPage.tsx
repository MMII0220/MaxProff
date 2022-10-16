import React from 'react';
import './MainPage.scss';

const index = () => {
  return (
    <section className='section'>
      <div className='main-page'>
        <div className='container'>
          <div className='main-page__inner'>
            <div className='main-page__content'>
              <h1 className='main-page__text'>РЕМОНТ КВАРТИР В МОСКВЕ И МО</h1>
              <h2 className='main-page__subText'>
                от <span className='main-page__highlight'>2450</span> руб/м2
              </h2>
              <div className='main-page__description'>
                <div className='main-page__payment'>
                  <figure>
                    <picture>
                      <div className='main-page__payment-image main-page__payment--size'></div>
                    </picture>
                    <figcaption className='main-page__payment-text header-contat__tel--size'>
                      Оплата по факту приема работ
                    </figcaption>
                  </figure>
                  <figure>
                    <picture>
                      <div className='main-page__signature main-page__payment--size'></div>
                    </picture>
                    <figcaption className='main-page__signature-text header-contat__tel--size'>
                      Замер и составление сметы БЕСПЛАТНО
                    </figcaption>
                  </figure>
                </div>
                {/* main-page__payment */}

                <div className='main-page__payment'>
                  <figure>
                    <picture>
                      <div className='main-page__departure main-page__payment--size'></div>
                    </picture>
                    <figcaption className='main-page__payment-text header-contat__tel--size'>
                      Выезд сметчика
                    </figcaption>
                  </figure>
                  <figure>
                    <picture>
                      <div className='main-page__guarantee main-page__payment--size'></div>
                    </picture>
                    <figcaption className='main-page__payment-text header-contat__tel--size'>
                      Гарантия 3 года
                    </figcaption>
                  </figure>
                </div>
                {/* main-page__payment */}
              </div>
              {/* main-page__description */}
            </div>
            {/* main-page__content */}

            <div className='main-page__calculator'>
              <h3 className='main-page__calculator-supText'>
                РАССЧИТАЙТЕ стоимость ремонта
              </h3>

              <form className='main-page__form'>
                <p className='page-form__supText'>Вид ремонта:</p>
                <div className='page-form__content'>
                  <input
                    type='checkbox'
                    name='cosmetic'
                    className='form-input__checkbox'
                    value='Косметический'
                  />
                  <label htmlFor='' className='page-form__text'>
                    Косметический
                  </label>
                </div>
                <div className='page-form__content'>
                  <input
                    type='checkbox'
                    name='capital'
                    className='form-input__checkbox'
                    value='Капитальный'
                  />
                  <label htmlFor='' className='page-form__text'>
                    Капитальный
                  </label>
                </div>
                <div className='page-form__content'>
                  <input
                    type='checkbox'
                    name='fullConstruction'
                    className='form-input__checkbox'
                    value='Под ключ'
                  />
                  <label htmlFor='' className='page-form__text'>
                    Под ключ
                  </label>
                </div>
                <div className='page-form__content'>
                  <input
                    type='checkbox'
                    name='designer'
                    className='form-input__checkbox'
                    value='Дизайнерский'
                  />
                  <label htmlFor='' className='page-form__text'>
                    Дизайнерский
                  </label>
                </div>
              </form>
            </div>
          </div>
          {/* main-page__inner */}
        </div>
        {/* container */}

        <article className='main-page__bg'>
          <div className='main-page__image'></div>
        </article>
        {/* container */}
      </div>
      {/* main-page */}
    </section>
  );
};

export default index;
