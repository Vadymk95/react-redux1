/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { paths } from '../../constants';
import './style.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { animateActions } from '../../store/animate';

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickLink = path => event => {
    event.preventDefault();
    dispatch(animateActions.setStartAnimate(true));

    const animateTimeout = setTimeout(() => {
      dispatch(animateActions.setStartAnimate(false));
      history.push(path);
      clearInterval(animateTimeout);
    }, 700);
  };

  return (
    <div className="navbar">
      <a className="navbar-link" href="#" onClick={handleClickLink(paths.main)}>
        Main
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.about)}
      >
        About
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.settings)}
      >
        Settings
      </a>
      <a
        className="navbar-link"
        href="#"
        onClick={handleClickLink(paths.dataList)}
      >
        List
      </a>
    </div>
  );
};
