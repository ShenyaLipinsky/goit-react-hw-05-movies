import Notiflix from 'notiflix';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppBox } from './App.styled';
import { Modal } from './Modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import fetchImages from './services/API-Pixabay';

const CARD_HEIGHT = 260;

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

export const App = () => {
  const [page, setPage] = useState(1);
  const [queue, setQueue] = useState('');
  const [hits, setHits] = useState([]);
  const [loaderHidden, setLoaderHidden] = useState(true);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalHidden, setModalHidden] = useState(true);
  const [modalImg, setModalImg] = useState('');

  const getRequest = data => {
    setQueue(prevState => {
      if (
        prevState.toLowerCase().trim() === data.toLowerCase().trim() &&
        data.toLowerCase().trim() !== ''
      ) {
        return Notiflix.Notify.info(
          `You are already looking for ${data}. Change you request.`,
          notiflixOptions
        );
      } else if (data.toLowerCase() === '') {
        setQueue('');
        return Notiflix.Notify.info(`Enter some request.`, notiflixOptions);
      } else {
        setPage(1);
        setQueue(data);
        setHits([]);
        setTotalHits(0);
      }
    });
  };

  const toggleModal = largeImg => {
    if (modalImg === '') {
      setModalHidden(false);
      return setModalImg(largeImg);
    }
    setModalHidden(true);
    return setModalImg('');
  };

  const loadMore = () => {
    setIsLoading(true);
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (queue === '') {
      return;
    }

    async function fetchImagesData() {
      try {
        setLoaderHidden(false);
        const imagesData = await fetchImages(queue, page);
        if (imagesData.totalHits === 0) {
          return Notiflix.Notify.failure(
            `Have no images on your request ${queue}`,
            notiflixOptions
          );
        }
        const images = imagesData.hits.map(item => {
          let data = {
            id: item.id,
            webformatURL: item.webformatURL,
            largeImageURL: item.largeImageURL,
          };
          return data;
        });

        if (imagesData.totalHits !== 0 && totalHits === 0) {
          setTotalHits(imagesData.totalHits);
          return Notiflix.Notify.success(
            `Hooray! We found ${imagesData.totalHits} images.`,
            notiflixOptions
          );
        }
        if (page === 1) {
          setHits(images);
          return;
        } else {
          return setHits(prevState => [...prevState, ...images]);
        }
      } catch {
        return Notiflix.Notify.failure(
          'Oops something goes wrong, change your request or refresh page',
          notiflixOptions
        );
      } finally {
        setIsLoading(false);
        setLoaderHidden(true);
      }
    }

    fetchImagesData();

    return;
  }, [page, queue, totalHits]);

  useEffect(() => {
    if (page > 1) {
      setTimeout(() => {
        window.scrollBy({
          top: CARD_HEIGHT * 2,
          behavior: 'smooth',
        });
      }, 600);
    }
  }, [page]);

  return (
    <AppBox>
      <SearchBar onSubmit={getRequest} />
      {hits.length !== 0 && (
        <ImageGallery
          data={hits}
          toggleModal={toggleModal}
          isModalOpen={modalHidden}
        />
      )}
      {!loaderHidden && <Loader />}
      {hits.length < totalHits && (
        <Button onClick={loadMore} loading={isLoading} />
      )}
      {!modalHidden && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </AppBox>
  );
};

