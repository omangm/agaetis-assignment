import { useEffect } from "react";
import { useState } from "react";
import { databases } from "../utils/appwrite";
import { Query } from "appwrite";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constants";

const Navbar = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const { documents } = await databases.listDocuments(
        import.meta.env.VITE_BLOG_DB_ID,
        import.meta.env.VITE_BLOG_COLLECTION_ID,
        [Query.select("tags")]
      );

      setTags((prevTags) =>
        Array.from(
          new Set([
            ...prevTags,
            ...documents.flatMap((t) => t.tags).filter((tag) => !prevTags.includes(tag)),
          ]),
        ),
      );
    };

    fetchTags();
  }, []);

  return (
    <header className="bg-white w-[calc(100vh - 20px)] flex flex-col items-center justify-center overflow-x-hidden">
      <div className="container w-full flex items-center justify-between py-3 border-b border-slate-400 max-w-screen-xl">
        <a
          href="#"
          className=" md:mt-0 text-gray-600 text-l hover:text-black px-4 lg:px-0"
        >
          Subscribe
        </a>

        <Link to="/" className="text-4xl font-bold font-serif">Large</Link>
        <a
          href="#"
          className="mt-2 md:mt-0 border-gray-600 border px-2 py-1 rounded text-gray-600 hover:text-black"
        >
          Sign up
        </a>
      </div>

      <nav className="w-full text-gray-600 max-w-screen-xl py-4 shadow-inner ">
        <marquee behavior="" direction="">
          <ul className="flex w-full overflow-x-auto items-center tag-scrollbar justify-between gap-4 md:gap-0 px-4 lg:px-0">
            {tags.map((tag, i) => (
              <li className="mx-4 text-nowrap capitalize" key={i}>
                <Link to={PAGE_ROUTES.TAG.replace(":tag", tag)} href="">{tag}</Link>
              </li>
            ))}
          </ul>
        </marquee>
      </nav>

    </header >
  );
};

export default Navbar;
