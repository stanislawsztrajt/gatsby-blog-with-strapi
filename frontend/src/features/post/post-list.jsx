import React from "react";
import { getImage } from "gatsby-plugin-image";
import PostItem from "./post-item";
import PropTypes from "prop-types";

export default function PostList({ posts }) {
  const postsMap = posts.map(({ image, title, description }, index) => {
    const imageData = image ? getImage(image.localFile) : null;
    const descriptionHTML = description.data.childMarkdownRemark.html;

    return (
      <PostItem
        key={index}
        imageData={imageData}
        image={image}
        title={title}
        description={descriptionHTML}
      />
    );
  });

  return <>{postsMap}</>;
}

PostList.propTypes = {
  posts: PropTypes.array,
};
