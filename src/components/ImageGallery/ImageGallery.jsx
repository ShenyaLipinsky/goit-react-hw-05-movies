import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';

export const ImageGallery = ({ data, toggleModal, isModalOpen }) => {
  // console.log(data);
  return (
    <ImageGalleryBox>
      {data.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webImg={webformatURL}
            largeImg={largeImageURL}
            toggleModal={toggleModal}
            isModalOpen={isModalOpen}
          />
        );
      })}
    </ImageGalleryBox>
  );
};

ImageGallery.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
