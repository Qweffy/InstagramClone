import axios from 'axios';
import { Post } from '@/interfaces/Post.types';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('API_URL is not defined');
}

export const fetchPosts = async (
  page: number = 1,
  limit: number = 10,
): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(
      `${API_URL}?page=${page}&limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
