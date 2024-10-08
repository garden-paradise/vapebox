import React, { useState } from 'react';
import style from '../ChatDots/ChatDots.module.css';
import chatDots from '../../images/main//home/ChatDots.svg';
import tic_toc from '../../images/main/About/Social.svg';
import insta from '../../images/main/About/Inst.svg';
import facebook from '../../images/main/About/Facebook.svg';
import vk from '../../images/main/About/vk.svg';
import Telegram from '../../images/main/About/TelegramY.svg';
import youtube from '../../images/main/About/youtube.svg';
import telephone from '../../images/main/About/Headset.svg';
import { Field, reduxForm, reset } from 'redux-form';
import {
  InputChat,
  InputEmailChat,
  TextareaChat,
} from '../../utils/validators/Forms/ValidationForms';
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';
import axios from 'axios';
import {
  email,
  emailNoReq,
  phone,
  required,
} from '../../utils/validators/validators';

const styles = {
  fadeIn: {
    animation: 'x 1.2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const afterSubmit = (result, dispatch) => dispatch(reset('beForm'));

const ChatDots = ({ handleSubmit }) => {
  const [form, setForm] = useState(false);
  const [dots, setDots] = useState(false);
  const [state, setstate] = useState(null);

  const handleSend = async ({ myName, myEmail, myNumber, myMessage }) => {
    let myTitle = 'Хочу задать вопрос';
    try {
      await axios.post('https://h5backend-338216.ew.r.appspot.com/mails/send_mail', {
        myTitle,
        myName,
        myEmail,
        myNumber,
        myMessage,
      });
      setstate('Отправленно !');
    } catch (error) {
      setstate('Ошибка !');
      console.error(error);
    }
  };

  return (
    <StyleRoot class={style.chatDots}>
      <div class={form ? style.fab_form : style.fab_form_none}>
        <form style={styles.fadeIn} className={style.application_form}>
          <span class={style.chatDots_comlete}>{state}</span>
          <section>
            <label className={style.application_form_label}>Имя: *</label>
            <div className={style.application_form_input}>
              <Field
                name='myName'
                component={InputChat}
                validate={[required]}
                type='text'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>
              Электронный адрес:
            </label>
            <div className={style.application_form_input}>
              <Field
                name='myEmail'
                component={InputEmailChat}
                validate={[emailNoReq]}
                type='email'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>Телефон: *</label>
            <div className={style.application_form_input}>
              <Field
                name='myNumber'
                component={InputChat}
                validate={[required, phone]}
                type='number'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>Сообщение:</label>
            <div
              className={`${style.application_form_input} ${style.application_form_input_textarea}`}
            >
              <Field
                name='myMessage'
                component={TextareaChat}
                type='textarea'
              />
            </div>
          </section>
          <button
            className={style.application_form_btn}
            type='submit'
            onClick={handleSubmit((data) => handleSend(data))}
          >
            <b>Отправить</b>
          </button>
        </form>
      </div>
      <div class={style.fab}>
        <span class={style.fab_action_button}>
          <img
            onClick={() => {
              setDots(!dots);
              setForm(false);
            }}
            class={style.chatDots_img}
            src={chatDots}
            alt='chatDotsImg'
          ></img>
        </span>
        <ul
          style={styles.fadeIn}
          class={dots ? style.fab_buttons : style.fab_buttons_none}
        >
          <li class={style.fab_buttons__item}>
            <a
              href={'https://vk.com/h5russia'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={vk} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.youtube.com/channel/UCjIo8UTH091bDevDamVPunw'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={youtube} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.tiktok.com/@h5russia'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={tic_toc} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.instagram.com/h5russia/'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={insta} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.facebook.com/hi5russia '}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={facebook}
                class={style.icon_material}
                alt='images'
              ></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://t.me/h5_Store_bot'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img
                className={style.icon_material}
                src={Telegram}
                alt='TelegramImg'
              />
            </a>
          </li>
          <li onClick={() => setForm(!form)} class={style.fab_buttons__item}>
            <a class={style.fab_buttons__link}>
              <img
                src={telephone}
                class={style.icon_material}
                alt='images'
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </StyleRoot>
  );
};

export default reduxForm({
  form: 'beForm',
  onSubmitSuccess: afterSubmit,
})(ChatDots);
