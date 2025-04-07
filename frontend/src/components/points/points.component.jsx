import { PointsStyled } from './points.styled';

export const Points = ({ points }) => {
  return (
    <div className="points-container">
      <span>Points</span>
      <PointsStyled>{points}</PointsStyled>
    </div>
  );
};
