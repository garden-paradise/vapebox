import './Contacts.scss';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import Title from '../../../reuse_Components/Title/Title';
import { Field, Form } from 'react-final-form';
import { emailValidator, requiredValidator } from '../../../utils/validators';
import ArrowTitle from '../../../reuse_Components/ArrowTitle/ArrowTitle';

const onSubmit = (values) => {
  console.log(values);
};

const Contacts = () => {
  return (
    <section className='Container PageBottom200 сontacts'>
      {window.innerWidth < 480 && <ArrowTitle title='Главная' />}

      {window.innerWidth > 480 && (
        <NavLinks
          data={[
            { url: 'home', name: 'Главная', active: false },
            { url: 'reviews', name: 'Контакты', active: true },
          ]}
        />
      )}

      <Title title='Контакты' />

      <section className='сontacts-section'>
        <div>
          <div className='сontacts-title'>Напишите нам сообщение</div>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form className='сontacts-payForm' onSubmit={handleSubmit}>
                <div className='сontacts-forms'>
                  <Field name='name' validate={requiredValidator}>
                    {({ input, meta }) => (
                      <input
                        className={`сontacts-form ${
                          meta.error && meta.touched && 'сontacts-formError'
                        }`}
                        {...input}
                        type='text'
                        placeholder='Имя'
                      />
                    )}
                  </Field>
                  <Field name='email' validate={emailValidator}>
                    {({ input, meta }) => (
                      <input
                        className={`сontacts-form ${
                          meta.error && meta.touched && 'сontacts-formError'
                        }`}
                        {...input}
                        type='email'
                        placeholder='E-mail'
                      />
                    )}
                  </Field>
                </div>
                <Field name='message'>
                  {({ input }) => (
                    <textarea
                      className='сontacts-formMessage'
                      {...input}
                      type='textarea'
                      placeholder='Сообщение'
                    />
                  )}
                </Field>
                <button className='BtnGeneral сontacts-formBtn' type='submit'>
                  Отправить
                </button>
              </form>
            )}
          />
        </div>
        <div className='сontacts-address'>
          <div className='сontacts-title'>Мы тут</div>
          <div className='сontacts-addressInfo'>
            <div> Адрес: ул. Новая Дмитровская, д. 2, к. 2</div>
            <div>Время работы: 09:00 - 19:00</div>
            <div>
              Телефон компании:
              <a className='сontacts-addressInfoTel' href='tel:+74955329521'>
                {' '}
                +7 (495) 532-95-21
              </a>
            </div>
            <div>E-mail: info@vexelgroup.com</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contacts;
