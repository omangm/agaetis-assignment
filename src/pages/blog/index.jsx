import { useParams } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { useBlogContext } from "../../context/contextHooks";
import BlogPost from "../../components/BlogPost";
import { useState } from "react";
import { useEffect } from "react";
import About from "./components/About";
import Archive from "./components/Archive";
import Socials from "./components/Socials";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();
  const { blogs, loading } = useBlogContext();

  useEffect(() => {
    const result = blogs.filter((b) => b.$id === id);

    if (result.length === 1) {
      setBlogData(result[0]);
    } else {
      setBlogData(null);
    }
  }, [blogs, id]);

  if (loading) {
    <p>LOADING...</p>;
  }

  return (
    <div className="py-4">
      {!loading && blogData ? (
        <>
          <div className="flex items-center justify-between pt-4 w-full flex-wrap">
            {blogs.slice(0, 2).map((blog) => (
              <div key={blog.$id} className="basis-full lg:basis-[48%] gap-1">
                <BlogCard
                  title={blog.title}
                  id={blog.$id}
                  content={blog.content}
                  date={blog.publishedDate}
                  tags={blog.tags}
                  key={blog.$id}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row px-2">
            <div className="basis-3/4">
              <BlogPost
                author={blogData.publishedBy}
                content={blogData.content}
                date={blogData.publishedDate}
                title={blogData.title}

              />
            </div>
            <div className="basis-1/4 flex flex-col gap-10 mt-10 md:mt-0">
              <About />
              <Archive />
              <Socials />
            </div>
          </div>
        </>
      ) : (
        <p>NOT FOUND</p>
      )}
    </div>
  );
};

export default Blog;
