import React, { useEffect } from 'react';
import { PageAnimated } from '../../components/PageAnimated';
import './style.css';

export const DataList = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return (
    <PageAnimated>
      <div className="data-list">
        <div className="block block-right"></div>
        <div className="block block-left"></div>
        <div className="block block-right"></div>
        <div className="block block-left"></div>
      </div>
    </PageAnimated>
  );
};
