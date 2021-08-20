import React from 'react';
import { useDispatch } from 'react-redux';
import { profileActions } from '../../store/profile/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const profile = {
      name: form['name'].value,
      lastname: form['lastname'].value,
    };

    dispatch(profileActions.setProfile(profile));
  };

  return (
    <form className="form form-login" onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" name="name" />
      </div>
      <div className="field">
        <input type="text" name="lastname" />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};
