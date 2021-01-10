import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../../assets/images/double/finish.jpg'
import full02 from '../../assets/images/barn/finish.jpg'
import full03 from '../../assets/images/single/finish.jpg'
import full04 from '../../assets/images/bifold/finish.jpg'
import PortfolioImages from '../../components/PortfolioImages'
import Layout from '../../components/layout'

const PORTFOLIO_IMAGES = [
  {
    id: '1',
    thumbnail: full01,
    caption: 'Double storey extension',
    description: 'A complex build with various levels and angles to contend with.',
    link: 'one',
  },
  {
    id: '2',
    thumbnail: full02,
    caption: 'Barn conversion',
    description: 'New roof new shingles and refurbish interior.',
    link: 'two',
  },
  {
    id: '3',
    thumbnail: full03,
    caption: 'Single storey extension',
    description: 'The blending of this difficult exterior finish to match existing.',
    link: 'three',
  },
  {
    id: '4',
    thumbnail: full04,
    caption: 'Bifold Doors',
    description: 'Fitting new Bifold doors.',
    link: 'four',
  },
]

const portfolio = () => {
  const siteTitle = 'KWS builder';
  const siteDescription = 'KWS builders portfolio static site';
  const renderPortfolio = images => {
    if (!images) return

    const portfolio = <PortfolioImages images={images} />

    return portfolio
  }
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
              Take a look at our portfolio of other jobs.
            </h2>
          </header>
        </section>
        <section id="two">
          {renderPortfolio(PORTFOLIO_IMAGES)}
          <ul className="actions">
            <Link
              to='/'
              className='button'>
              Home
            </Link>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default portfolio
