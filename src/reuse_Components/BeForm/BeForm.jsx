import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import {
  Input,
  InputEmail,
  Textarea,
} from '../../utils/validators/Forms/ValidationForms';
import style from '../BeForm/BeForm.module.css';
import {
  email,
  emailNoReq,
  phone,
  required,
} from '../../utils/validators/validators';
import axios from 'axios';

const afterSubmit = (result, dispatch) => dispatch(reset('beFormZ'));

const BeForm = ({ block, handleSubmit, myTitle }) => {
  const [state, setstate] = useState(null);
  const handleSend = async ({ myName, myEmail, myNumber, myMessage }) => {
    try {
      await axios.post(
        'https://h5backend-338216.ew.r.appspot.com/mails/send_mail',
        {
          myTitle,
          myName,
          myEmail,
          myNumber,
          myMessage,
        }
      );
      setstate('Отправленно !');
    } catch (error) {
      setstate('Ошибка !');

      console.error(error);
    }
  };
  return (
    <section className={style.application_form_section}>
      <form className={style.application_form}>
        {state}
        <section>
          <div className={style.application_form_lbl}>Имя: *</div>
          <div className={style.application_form_input}>
            <Field
              name='myName'
              component={Input}
              validate={[required]}
              type='text'
            />
          </div>
        </section>
        <section>
          <div className={style.application_form_lbl}>Электронный адрес:</div>
          <div className={style.application_form_input}>
            <Field
              name='myEmail'
              component={InputEmail}
              validate={[emailNoReq]}
              type='email'
            />
          </div>
        </section>
        <section>
          <div className={style.application_form_lbl}>Телефон: *</div>
          <div className={style.application_form_input}>
            <Field
              name='myNumber'
              component={Input}
              validate={[required, phone]}
              type='number'
            />
          </div>
        </section>
        {block && (
          <div>
            <section>
              <div className={style.application_form_lbl}>Сообщение:</div>
              <div className={style.application_form_input}>
                <Field name='myMessage' component={Textarea} type='textarea' />
              </div>
            </section>
          </div>
        )}

        <button
          className={style.application_form_btn}
          type='submit'
          onClick={handleSubmit((data) => handleSend(data))}
        >
          <b>Отправить</b>
        </button>
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'beFormZ',
  onSubmitSuccess: afterSubmit,
})(BeForm);
