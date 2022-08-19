import React, { useState, useEffect } from 'react';
import ContentBlock from './ContentBlock';
import './Timeline.css';
import { events } from './events';
import Spinner from '../spinner/Spinner';

const Timeline = (props) => {
  const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [fetchMorePosts, setFetchMorePosts] = useState(false);

  const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_start=';

  const fetchPosts = async () => {
    console.log('fetching from: ', lastId);
    const res = await fetch(URL + lastId);
    const fetchedPosts = await res.json();
    setTimeout(() => {
      setPosts((previousPosts) => [...previousPosts, ...fetchedPosts]);
      setLastId(fetchedPosts[fetchedPosts.length - 1].id);
      setFetchMorePosts(false);
    }, 1000);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (fetchMorePosts) {
      fetchPosts();
    }
  }, [fetchMorePosts]);

  useEffect(() => {
    const handleScroll = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (clientHeight + scrollTop >= scrollHeight - 10) {
        console.log('fetch more!');
        setFetchMorePosts(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='timeline-container'>
      {posts.map((post, idx) => {
        return <ContentBlock content={post} idx={idx} key={Math.random()} />;
      })}
      {fetchMorePosts ? <Spinner /> : null}
    </div>
  );
};

export default Timeline;
