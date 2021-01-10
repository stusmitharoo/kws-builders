import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../assets/images/double/finish.jpg'
import full02 from '../assets/images/barn/finish.jpg'
import full03 from '../assets/images/single/finish.jpg'
import full04 from '../assets/images/bifold/finish.jpg'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const RECENT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: full01,
    caption: 'Double storey extension',
    description: 'A complex build with various levels and angles to contend with.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: full02,
    caption: 'Barn conversion',
    description: 'New roof new shingles and refurbish interior.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: full03,
    caption: 'Single storey extension',
    description: 'The blending of this difficult exterior finish to match existing.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: full04,
    caption: 'Bifold Doors',
    description: 'Fitting new Bifold doors.',
  },
  // {
  //   id: '5',
  //   source: full05,
  //   thumbnail: thumb05,
  //   caption: 'Bi-fold doors',
  //   description: 'Bespoke fitted Bi-fold doors to the back garden.',
  // },
  // {
  //   id: '6',
  //   source: full06,
  //   thumbnail: thumb06,
  //   caption: 'Patio area',
  //   description: 'Straight out from the kitchen to the patio built with indian sandstone',
  // },
]

const HomeIndex = () => {
  const siteTitle = 'KWS builder'
  const siteDescription = 'KWS builders portfolio static site'

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
              A family run business with 40 years experience,
              <br />
              Situated on the Hampshire Surrey border.
            </h2>
          </header>
          <p>
            KWS builders undertake various types of work including extensions,
            new builds or garage conversions to name a few. With 40 years experience
            you can be sure our builds are to exacting standards and can be confident
            of a nice timely build.
          </p>
          {/* <ul className="actions">
            <Link
              to='/aboutUs'
              className='button'>
              Learn More about us
            </Link>
          </ul> */}
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery
            images={RECENT_IMAGES.map(
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
              Full Portfolio
            </Link>
          </ul>
        </section>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default HomeIndex
