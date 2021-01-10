import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../../assets/images/double/dayOne.jpg'
import full02 from '../../assets/images/double/clearing.jpg'
import full03 from '../../assets/images/double/demolition.jpg'
import full04 from '../../assets/images/double/scaffolding.jpg'
import full05 from '../../assets/images/double/porch.jpg'
import full06 from '../../assets/images/double/floor.jpg'
import full07 from '../../assets/images/double/finish.jpg'
import Gallery from '../../components/Gallery'
import Layout from '../../components/layout'

const ONE_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: full01,
    caption: 'Day one',
    description: 'This is what we had to work with.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: full02,
    caption: 'Clearence',
    description: 'Clearing the site with the correct tools.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: full03,
    caption: 'Demolition',
    description: 'Removing part of the building ready for new foundations.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: full04,
    caption: 'Building up',
    description: 'Scaffolding chasing each floor as we build and the roof going on.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: full05,
    caption: 'finishing the porch',
    description: 'A new porch being finished.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: full06,
    caption: 'Under floor heating',
    description: 'The kitchen having under floor heating being fitted.',
  },
  {
    id: '7',
    source: full07,
    thumbnail: full07,
    caption: 'finish',
    description: 'The last 10% finishing up the job.',
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
              Double storey extension.
            </h2>
          </header>
        </section>

        <section id="two">
          <Gallery
            images={ONE_IMAGES.map(
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
