import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItems from './GalleryItems'

const Gallery = ({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }

  const renderGallery = images => {
    if (!images) return

    const gallery = <GalleryItems images={images} toggleLightbox={toggleLightbox} />

    return gallery
  }
  return (
    <div>
      {renderGallery(images)}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
  toggleLightbox: PropTypes.func,
}

export default Gallery
