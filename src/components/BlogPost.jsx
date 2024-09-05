import PropTypes from "prop-types";
import { blogCardPropTypes } from "./BlogCard";
import { longDateFormatter } from "../utils/date";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constants";

const BlogPost = (props) => {
    return (
        <div className="max-w-3xl">
            <h1 className="text-4xl font-serif font-bold mb-4">
                {props.title}
            </h1>
            <div className="text-base text-gray-600 mb-6">
                {longDateFormatter(props.date)} by <Link to={PAGE_ROUTES.USER.replace(":user_name", props.author)} className="text-blue-700 font-bold">
                    {props.author}
                </Link>
            </div>
            <div className="prose prose-lg ">
                {props.content}
            </div>
        </div>
    )
}

BlogPost.propTypes = {
    ...blogCardPropTypes,
    author: PropTypes.string.isRequired,
    id: PropTypes.string
};

export default BlogPost;
