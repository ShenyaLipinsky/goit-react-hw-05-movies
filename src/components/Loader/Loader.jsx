import { LoaderStyled } from './Loader.styled';
import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeCircles
        color="#3f51b5"
        height={70}
        width={70}
        ariaLabel="three-circles-rotating"
      />
    </LoaderStyled>
  );
};
