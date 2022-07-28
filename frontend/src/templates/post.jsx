import React from 'react'
import PropTypes from 'prop-types';
import Layout from '../features/ui/layout'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

export default function Post({ pageContext: { title, description, image } }){
  const imageData = image ? getImage(image.localFile) : null
  
  return(
    <Layout>
      <div className='p-4 text-center bg-white shadow'>
        { imageData ? 
          <GatsbyImage image={imageData} />
        :
          <StaticImage width={720} height={500} src="http://localhost:1337/uploads/no_image_found_360x250_34a6c3cb14.png" />
        }
        <div className='mt-4 text-3xl font-bold'>
          { title }
        </div>
        <p
          className="mt-6 overflow-hidden text-xl"
          dangerouslySetInnerHTML={{ __html: description.data.description }}
        />
        
      </div>
    </Layout>
  )
}

Post.propTypes = {
  pageContext: PropTypes.object
}