import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/contextHooks";
import { useEffect } from "react";
import BlogCard from "../../components/BlogCard";

const User = () => {
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const { blogs } = useBlogContext();

    const { user_name } = useParams();

    useEffect(() => {
        const result = blogs.filter(blog => blog.publishedBy === user_name);

        setFilteredBlogs(result);
    }, [blogs, user_name]);

    return (
        <div>
            <h3 className="capitalize text-blue-700 text-4xl italic font-bold font-serif">{user_name}</h3>
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

export default User;