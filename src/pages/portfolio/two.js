import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../../assets/images/barn/tiles.jpg'
import full02 from '../../assets/images/barn/topFloor.jpg'
import full03 from '../../assets/images/barn/doors.jpg'
import full04 from '../../assets/images/barn/interior.jpg'
import full05 from '../../assets/images/barn/stairs.jpg'
import full06 from '../../assets/images/barn/upstairs.jpg'
import full07 from '../../assets/images/barn/hall.jpg'
import full08 from '../../assets/images/barn/finish.jpg'
import Gallery from '../../components/Gallery'
import Layout from '../../components/layout'

const TWO_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: full01,
    caption: 'Removing tiles',
    description: 'Stripping the roof of old tiles to help inspect the old roof.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: full02,
    caption: 'Strengthen and replace',
    description: 'Replace and strengthen the roof to allow the addition of an upper floor.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: full03,
    caption: 'New doors',
    description: 'New access to th courtyard.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: full04,
    caption: 'Open room',
    description: 'A new modern open living space.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: full05,
    caption: 'Spiral staircase',
    description: 'Space saving staircase to new living quarters.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: full06,
    caption: 'Opening up',
    description: 'Opening into the new sleeping areas.',
  },
  {
    id: '7',
    source: full07,
    thumbnail: full07,
    caption: 'Space saving',
    description: 'Hallway and rooms organised into space saving roof area.',
  },
  {
    id: '8',
    source: full08,
    thumbnail: full08,
    caption: 'Finish',
    description: 'new shingles and roof tiles on a completed barn conversion.',
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
              Barn conversion.
            </h2>
          </header>
        </section>

        <section id="two">
          <Gallery
            images={TWO_IMAGES.map(
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
