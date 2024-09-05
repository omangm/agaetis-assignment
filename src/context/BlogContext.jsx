import { createContext, useState, useEffect } from 'react';
import { databases } from '../utils/appwrite';

export const BlogContext = createContext();


// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await databases.listDocuments(import.meta.env.VITE_BLOG_DB_ID, import.meta.env.VITE_BLOG_COLLECTION_ID);
      setBlogs(response.documents);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, fetchBlogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
