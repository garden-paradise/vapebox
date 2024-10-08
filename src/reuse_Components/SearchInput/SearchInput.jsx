import React from 'react';
import './SearchInput.scss';
import search from '../../images/header/MagnifyingGlassGray.svg';
import { Field, Form } from 'react-final-form';

const onSubmit = (values) => {
  console.log(values);
};

const SearchInput = () => {
  return (
    <section className='searchInput'>
      <img className='searchInput-img' src={search} alt='searchIMG' />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name='name'>
              {({ input }) => (
                <input
                  className='searchInput-input'
                  {...input}
                  type='text'
                  placeholder='Искать'
                />
              )}
            </Field>
          </form>
        )}
      />
    </section>
  );
};

export default SearchInput;
