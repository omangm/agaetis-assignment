import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/contextHooks";
import { useEffect } from "react";
import BlogCard from "../../components/BlogCard";

const Tag = () => {
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const { blogs } = useBlogContext();

    const { tag } = useParams();

    useEffect(() => {
        const result = blogs.filter(blog => blog.tags.includes(tag));

        setFilteredBlogs(result);
    }, [blogs, tag])

    return (
        <div className="">
            <h3 className="capitalize text-blue-700 text-4xl italic font-bold font-serif">{tag}</h3>
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

export default Tag;