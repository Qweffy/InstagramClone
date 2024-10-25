import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchPosts } from '@/api/posts';
import { Post } from '@/interfaces/Post.types';

interface HomeContextProps {
  posts: Post[];
  loading: boolean;
  loadMorePosts: () => void;
}

const HomeContext = createContext<HomeContextProps>({
  posts: [],
  loading: true,
  loadMorePosts: () => {},
});

export const HomeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getInitialPosts = async () => {
      try {
        const data = await fetchPosts(page);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching Home:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    try {
      setLoading(true);
      const data = await fetchPosts(page + 1);
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContext.Provider value={{ posts, loading, loadMorePosts }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
