import propTypes from 'prop-types';

import { fetchReviews } from '../../services/API-MovieDB';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { ReviewItem } from './FilmDetails.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState(null);

  useEffect(() => {
    async function reviewsData() {
      await fetchReviews(Number(id)).then(setReviewsDetails);
    }
    reviewsData();
  }, [id]);
  if (!reviewsDetails) {
    return null;
  }
  return (
    <Box as="ul" p={3} boxShadow="1px 1px 4px #000000" width="100vw">
      {reviewsDetails.length > 0 ? (
        reviewsDetails.map(({ author, content, id }) => {
          return (
            <ReviewItem key={id}>
              {author === null ? (
                <p>No Author</p>
              ) : (
                <p>
                  <span>Author: </span>
                  {author}
                </p>
              )}

              <p>{content}</p>
            </ReviewItem>
          );
        })
      ) : (
        <h3>Sorry, this film have no reviews yet.</h3>
      )}
    </Box>
  );
};
Reviews.propTypes = {
  id: propTypes.string,
  reviewsDetails: propTypes.arrayOf(
    propTypes.shape({
      author: propTypes.string,
      content: propTypes.string,
      id: propTypes.string,
    })
  ),
};
export default Reviews;
