import { Field, Form } from 'react-final-form';
import { NavLink } from 'react-router-dom';
import { emailValidator } from '../../../../utils/validators';
import './MenuDown.scss';

const onSubmit = (values) => {
  console.log(values);
};

const MenuDown = ({ data }) => {
  return data.map((item, i) => (
    <section key={i} className='menuDown'>
      <div className='menuDown-title'>{item.title}</div>
      {item.subtitle &&
        item.subtitle.map((item, i) => (
          <NavLink key={i} to={item.subtitleLink} className='menuDown-subtitle'>
            {item.subtitle}
          </NavLink>
        ))}
      <section className='menuDown-blockImg'>
        {item.images &&
          item.images.map((item, i) => (
            <a
              key={i}
              className='menuDown-img'
              href={item.imgLink}
              target='_blank'
            >
              <img src={item.img} alt='socialIMG' />
            </a>
          ))}
      </section>
      {item.tel && (
        <a className='menuDown-tel' href={`tel: ${item.tel}`}>
          {item.tel}
        </a>
      )}
      {item.form && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <form className='menuDown-form' onSubmit={handleSubmit}>
              <Field name='email' validate={emailValidator}>
                {({ input, meta }) => (
                  <div>
                    <input
                      className={`menuDown-inputEmail ${
                        meta.error &&
                        meta.touched &&
                        'menuDown-inputEmailEerror'
                      }`}
                      {...input}
                      type='email'
                      placeholder='E-mail'
                    />
                    <button
                      className='menuDown-btn'
                      type='submit'
                      disabled={submitting}
                    >
                      Подписаться
                    </button>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </form>
          )}
        />
      )}
    </section>
  ));
};

export default MenuDown;
