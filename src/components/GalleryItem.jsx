import { useState } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import './GalleryItem.css';

const GalleryItem = ({ item, onClick }) => {
  const [targetRef, isIntersecting] = useLazyLoad();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={targetRef}
      className="gallery-item"
      onClick={onClick}
    >
      <div className="gallery-item-wrapper">
        {isIntersecting && (
          <>
            <img
              src={item.thumbnail}
              alt={item.title}
              className={`gallery-image ${isLoaded ? 'loaded' : ''}`}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3 className="gallery-item-title">{item.title}</h3>
              <span className="gallery-item-icon">+</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
