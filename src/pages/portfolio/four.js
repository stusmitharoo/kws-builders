import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../../assets/images/bifold/acros.jpg'
import full02 from '../../assets/images/bifold/progress.jpg'
import full03 from '../../assets/images/bifold/finish.jpg'
import Gallery from '../../components/Gallery'
import Layout from '../../components/layout'

const FOUR_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: full01,
    caption: 'Support',
    description: 'Health, safety and building regulations.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: full02,
    caption: 'Boss working',
    description: 'Sometimes even Kev works.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: full03,
    caption: 'finish',
    description: 'New doors ready for use when summer arrives.',
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
              Bifold doors.
            </h2>
          </header>
        </section>

        <section id="two">
          <Gallery
            images={FOUR_IMAGES.map(
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
