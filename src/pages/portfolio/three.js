import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../../assets/images/single/scaffolding.jpg'
import full02 from '../../assets/images/single/roof.jpg'
import full03 from '../../assets/images/single/render.jpg'
import full04 from '../../assets/images/single/soffits.jpg'
import full05 from '../../assets/images/single/finish.jpg'
import Gallery from '../../components/Gallery'
import Layout from '../../components/layout'

const THREE_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: full01,
    caption: 'Scaffolding',
    description: 'Single storey block work with roof.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: full02,
    caption: 'Tiling',
    description: 'New slate roof with velux windows.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: full03,
    caption: 'Scratch coat',
    description: 'The priming coat ready for the rendered finish.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: full04,
    caption: 'Patio path',
    description: 'Fascia and soffits with a new pathway.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: full05,
    caption: 'finished',
    description: 'Render to match existing.',
  },
]


const one = () => {
  const siteTitle = 'KWS builder';
  const siteDescription = 'KWS builders portfolio static site';
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              single extension.
            </h2>
          </header>
        </section>

        <section id="two">
          <Gallery
            images={THREE_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <Link
              to='/portfolio'
              className='button'>
              Back
            </Link>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default one
