import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from './components/MainLayout';
import { fetchPosts } from '../store/actions/postAction';

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <MainLayout></MainLayout>
      <div>
        {posts &&
          posts.map((item) => (
            <h1 key={item}>
              Post title: {item.title}
              Post text: {item.body}
            </h1>
          ))}
      </div>
    </div>
  );
}
