import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/contextHooks";
import { useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import { monthYearFormatter } from "../../utils/date";

const Archive = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { blogs } = useBlogContext();

  const { date } = useParams();

  useEffect(() => {
    const result = blogs.filter(blog => {
      const blogDate = new Date(blog.publishedDate);
      const archiveDate = new Date(date);
      return blogDate.getFullYear() === archiveDate.getFullYear() && blogDate.getMonth() === archiveDate.getMonth();
    });

    setFilteredBlogs(result);
  }, [blogs, date]);

  return (
    <div>

      <h3 className="capitalize text-blue-700 text-4xl italic font-bold font-serif">{monthYearFormatter(date)}</h3>
      <div className="flex items-center justify-between w-full flex-wrap">
        {
          filteredBlogs.map(blog => (
            <div key={blog.$id} className="basis-full lg:basis-[48%] gap-1">
              <BlogCard title={blog.title} id={blog.$id} content={blog.content} date={blog.publishedDate} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Archive;