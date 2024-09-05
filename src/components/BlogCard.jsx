import PropTypes from "prop-types";
import { shortDateFormatter } from "../utils/date";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constants";



const BlogCard = (props) => {
  return (
    <div className="border h-fit my-8 border-gray-200 shadow-lg rounded flex flex-col-reverse md:flex-row">
      <div className="basis-full md:basis-8/12 p-3">
        {
          props.tags && props.tags.length > 0 &&
        <small className="text-blue-700 text-sm capitalize font-bold">
          <Link to={PAGE_ROUTES.TAG.replace(":tag", props.tags[0])}>
          {props.tags[0] ?? ""}
          </Link>
        </small>
        }
        <p className="font-serif text-3xl font-semiboldp pt-2">{props.title.slice(0, 20)}{props.title.length > 20 && "..."}</p>
        <small className="text-base">{shortDateFormatter(props.date)}</small>
        <p className="text-wrap md:text-balance text-base py-3">{props.content.slice(0, 150)}{props.content.length > 150 && "..."}</p>
        <Link to={PAGE_ROUTES.BLOG.replace(":id", props.id)} className="text-blue-700">Continue Reading...</Link>
      </div>

      <div className="basis-52 md:basis-4/12  bg-gray-500 flex rounded-r items-center justify-center">
        <p className="text-white">Thumbnail</p>
      </div>
    </div>
  )
};

export const blogCardPropTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

BlogCard.propTypes = blogCardPropTypes;

export default BlogCard