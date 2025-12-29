import { useState } from 'react';
import { galleryData, categories } from '../data/galleryData';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === 'tous'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Mon Travail</h2>
          <p className="gallery-subtitle">
            Une sélection de mes projets photographiques
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeCategory === category.id ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() => handleImageClick(item)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </section>
  );
};

export default Gallery;
