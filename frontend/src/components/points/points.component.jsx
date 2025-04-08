import { PointsStyled } from './points.styled';

export const Points = ({ points }) => {
  return (
    <div className="points-container">
      <h2>Points</h2>
      <PointsStyled>{points}</PointsStyled>
    </div>
  );
};
