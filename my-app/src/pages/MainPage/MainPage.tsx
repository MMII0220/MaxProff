import React, { useState } from 'react';
import Input from '../../Components/InputRadio/Input';
import './MainPage.scss';

const MainPage = () => {
  const [rangeValue, setRangeValue] = useState<number | undefined>(35);
  const [telNumber, setTelNumber] = useState<string | undefined>('+7');

  function rangeChange(event: string) {
    setRangeValue(parseInt(event, 10));
  }

  function typeNumber(num: string) {
    let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
    const ans = num.replace(pattern, '+7 ($2) $3-$4-$5');
    setTelNumber(ans);
  }

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
                      id='cosmetic'
                      value='Косметический'
                    />
                    Косметический
                  </label>

                  <label htmlFor='capital' className='page-form__text'>
                    <Input
                      type='radio'
                      name='TypeOfRepair'
                      id='capital'
                      value='Капитальный'
                    />
                    Капитальный
                  </label>
                </div>
                <div className='page-form__content'>
                  <label htmlFor='fullConstruction' className='page-form__text'>
                    <Input
                      type='radio'
                      name='TypeOfRepair'
                      id='fullConstruction'
                      value='Под ключ'
                    />
                    Под ключ
                  </label>

                  <label htmlFor='designer' className='page-form__text'>
                    <Input
                      type='radio'
                      name='TypeOfRepair'
                      id='designer'
                      value='Дизайнерский'
                    />
                    Дизайнерский
                  </label>
                </div>
              </form>

              <form className='main-page__form'>
                <p className='page-form__supText'>Тип вашей недвижимости:</p>

                <div className='page-form__content'>
                  <label htmlFor='newBuilding' className='page-form__text'>
                    <Input
                      type='radio'
                      name='typeProperty'
                      id='newBuilding'
                      value='Новостройка'
                    />
                    Новостройка
                  </label>

                  <label htmlFor='secondBuilding' className='page-form__text'>
                    <Input
                      type='radio'
                      name='typeProperty'
                      id='secondBuilding'
                      value='Вторичное жилье'
                    />
                    Вторичное жилье
                  </label>
                </div>
              </form>

              <form className='main-page__form'>
                <p className='page-form__supText'>Количество комнат</p>

                <div className='room-form__content'>
                  <label htmlFor='roomOne' className='page-form__text'>
                    <Input type='radio' name='roomType' id='roomOne' value='1' />1
                  </label>

                  <label htmlFor='roomTwo' className='page-form__text'>
                    <Input type='radio' name='roomType' id='roomTwo' value='2' />2
                  </label>

                  <label htmlFor='roomThree' className='page-form__text'>
                    <Input type='radio' name='roomType' id='roomThree' value='3' />3
                  </label>

                  <label htmlFor='roomFour' className='page-form__text'>
                    <Input type='radio' name='roomType' id='roomFour' value='4' />4
                  </label>
                </div>
              </form>

              <form className='area-form' method='post'>
                <p className='page-form__supText'>Площадь, м2:</p>

                <input
                  className='area-form__range'
                  id='area-size'
                  type='range'
                  value={rangeValue}
                  min='1'
                  max='100'
                  step='1'
                  onChange={(e) => rangeChange(e.target.value)}
                />
                <label htmlFor='area-size' className='area-form__number'>
                  {rangeValue}
                </label>
              </form>

              <div className='repair-price'>
                <div className='price-days__content'>
                  <p className='repair-price__text'>Срок ремонта:</p>
                  <p className='repair-price__days'>до 34 дней</p>
                </div>
                <div className='sale-price__content'>
                  <p className='repair-price__text'>Скидка составит:</p>
                  <p className='repair-price__days'>23 765 руб</p>
                </div>

                <article className='repair-price__bg'></article>
              </div>

              <div className='calculator-contact'>
                <p className='page-form__supText'>Введите номер телефона</p>
                <form method='get' className='calculator-contact__info'>
                  <input
                    className='calculator-contact__number'
                    type='tel'
                    name='tel'
                    value={telNumber}
                    onChange={(e) => typeNumber(e.target.value)}
                  />
                  <button className='calculator-contact__order'>Заказать</button>
                </form>
              </div>
            </div>
            {/* main-page__calculator */}
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

export default MainPage;
