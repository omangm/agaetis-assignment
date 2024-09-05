import { useBlogContext } from "../context/contextHooks";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constants";

const FeaturedBlog = () => {
  const { blogs } = useBlogContext();

  const featuredBlog = blogs.filter((blog) => blog.featured)[0];
  const blogData = featuredBlog ?? null;

  return (
    <>
      {blogData && (
        <div className="w-full bg-gray-700 text-white rounded border p-4 sm:p-16 transition-all">
          <h1 className="w-full lg:w-1/3 text-5xl py-2 font-serif italic">
            {blogData.title ?? ""}
          </h1>

          <p className="text-2xl w-full lg:w-5/12 py-5">
            {typeof blogData.content === "string" &&
            blogData.content.length >= 100
              ? blogData.content.substring(0, 100)
              : blogData.content}
          </p>

          {blogData.$id && (
            <Link to={PAGE_ROUTES.BLOG.replace(":id", blogData.$id)} className="text-2xl font-bold">
              Continue Reading ...
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default FeaturedBlog;
