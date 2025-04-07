import { BadgeStyled, BadgesContainerStyled } from './badges.styled';

export const Badges = ({ badges }) => {
  return (
    <BadgesContainerStyled>
      {badges.map((badge, index) => (
        <BadgeStyled key={index}>{badge}</BadgeStyled>
      ))}
    </BadgesContainerStyled>
  );
};
