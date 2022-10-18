import React from 'react';
import Input from '../../Components/InputRadio/Input';
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
                  <label htmlFor='cosmetic' className='page-form__text'>
                    <Input
                      type='radio'
                      name='TypeOfRepair'
                      className='form-input__checkbox'
                      id='cosmetic'
                      value='Косметический'
                    />
                    Косметический
                  </label>

                  <label htmlFor='capital' className='page-form__text'>
                    <input
                      type='radio'
                      name='TypeOfRepair'
                      className='form-input__checkbox'
                      id='capital'
                      value='Капитальный'
                    />
                    Капитальный
                  </label>
                </div>
                <div className='page-form__content'>
                  <label htmlFor='fullConstruction' className='page-form__text'>
                    <input
                      type='radio'
                      name='TypeOfRepair'
                      className='form-input__checkbox'
                      id='fullConstruction'
                      value='Под ключ'
                    />
                    Под ключ
                  </label>

                  <label htmlFor='designer' className='page-form__text'>
                    <input
                      type='radio'
                      name='TypeOfRepair'
                      className='form-input__checkbox'
                      id='designer'
                      value='Дизайнерский'
                    />
                    Дизайнерский
                  </label>
                </div>
              </form>
            </div>
          </div>
          {/* main-page__inner */}
        </div>
        {/* container */}

        {/* Background Image Main Page */}
        <article className='main-page__bg'></article>
        {/* container */}
      </div>
      {/* main-page */}
    </section>
  );
};

export default index;
