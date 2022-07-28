import React from "react";
import { Button } from "@mui/material";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default function PostItem({ image, imageData, title, description }) {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full p-4 mt-4 bg-white shadow lg:items-stretch lg:flex-row">
      <div className="flex flex-col justify-between w-full pr-2 mt-2 text-center lg:text-left xl:10/12 2xl:w-7/12 xl:mt-0">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p
            className="mt-2 overflow-hidden text-base max-h-36"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Link to={`/posts/${title.replaceAll(' ', '-').toLowerCase()}`}>
          <Button className="mt-1" variant="outlined" color="primary">
            Read more
          </Button>
        </Link>
      </div>

      <div>
        { image ? 
          <GatsbyImage image={imageData} />
        :
          <StaticImage src="http://localhost:1337/uploads/no_image_found_360x250_34a6c3cb14.png" />
        }
      </div>
    </div>
  );
}

PostItem.propTypes = {
  image: PropTypes.object,
  imageData: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
