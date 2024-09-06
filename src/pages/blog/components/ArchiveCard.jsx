import { useState } from "react";
import { useBlogContext } from "../../../context/contextHooks";
import { useEffect } from "react";
import { monthYearFormatter } from "../../../utils/date";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../../../utils/constants";

const ArchiveCard = () => {
    const [archives, setArchives] = useState([]);
    const { blogs } = useBlogContext();

    useEffect(() => {
        const result = [...new Set(blogs.map(blog => blog.publishedDate))];

        setArchives(result);
    }, [blogs])

    return (
        <div className="shadow-md p-4 bg-slate-50">
            <h3 className="font-serif font-bold italic text-3xl pb-2">Archives</h3>
            {
                archives.map(arc => (
                    <div className="py-1" key={arc}>
                        <Link to={PAGE_ROUTES.ARCHIVE.replace(":date", arc)} className="text-blue-700 hover:underline transition-all hover:text-blue-800">{monthYearFormatter(arc)}</Link>
                    </div>
                ))
            }
        </div>
    )
};

export default ArchiveCard;