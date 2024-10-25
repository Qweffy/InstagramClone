export interface Post {
  id: string;
  name: string;
  avatar: string;
  description: string;
  image: string;
  comments: number;
  likes: number;
  liked: boolean;
  saved: boolean;
  location: string;
  createdAt: string;
}
