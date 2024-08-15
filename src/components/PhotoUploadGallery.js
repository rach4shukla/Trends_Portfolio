import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UploadButton = styled.input`
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #004526;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #367c2b;
  }
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  width: 100%;
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PhotoUploadGallery = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  return (
    <GalleryContainer>
      <UploadButton 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleUpload} 
      />
      <PhotosGrid>
        {photos.map((photo, index) => (
          <PhotoCard key={index}>
            <img src={photo} alt={`Uploaded ${index}`} />
          </PhotoCard>
        ))}
      </PhotosGrid>
    </GalleryContainer>
  );
};

export default PhotoUploadGallery;
