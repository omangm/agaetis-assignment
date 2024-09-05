import { useState, useEffect } from 'react';
import { databases } from "../../utils/appwrite"
import BlogCard from '../../components/BlogCard';
import { useBlogContext } from '../../context/contextHooks';

function Home() {
  const { blogs } = useBlogContext();

  return (
    <div className='w-full pt-4'>

      <div className="flex items-center justify-between pt-4 w-full flex-wrap">
        {
          blogs.map(blog => (
            <div key={blog.$id} className="basis-full lg:basis-[48%] gap-1">
              <BlogCard title={blog.title} id={blog.$id} content={blog.content} date={blog.publishedDate} tags={blog.tags} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home
