import React, { useEffect } from 'react';
import { PageAnimated } from '../../components/PageAnimated';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { postsActions } from '../../store/posts/actions';
import { Loading } from '../../components/Loading';

export const DataList = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector(store => store.posts);

  useEffect(() => {
    dispatch(postsActions.fetchPosts());
  }, [dispatch]);
  return (
    <>
      <PageAnimated>
        <div className="data-list">
          {posts.map((post, i) => (
            <div
              key={i}
              className={`block ${i % 2 === 0 ? 'block-right' : 'block-left'}`}
            >
              <span>{post.title}</span>
            </div>
          ))}
        </div>
      </PageAnimated>
      {loading && <Loading />}
    </>
  );
};
