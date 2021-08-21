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
      lastName: form['lastname'].value,
    };

    dispatch(profileActions.setProfile(profile));
  };

  return (
    <form className="form form-login" onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" name="name" autocomplete="off"/>
      </div>
      <div className="field">
        <input type="text" name="lastname" autocomplete="off"/>
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};
