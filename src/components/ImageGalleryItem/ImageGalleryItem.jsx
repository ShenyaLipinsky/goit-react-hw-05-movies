import propTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryImgStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webImg, largeImg, toggleModal }) => {
  return (
    <>
      <ImageGalleryItemStyled onClick={() => toggleModal(largeImg)}>
        <ImageGalleryImgStyled src={webImg} alt="image" />
      </ImageGalleryItemStyled>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webImg: propTypes.string.isRequired,
  largeImg: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  toggleModal: propTypes.func.isRequired,
};
