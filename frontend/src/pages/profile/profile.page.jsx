import { ProfileStyled } from "./profile.styled";
import { TitleComponent } from "../../components/title/title.component";
import { Points } from "../../components/points/points.component";
import { Badges } from "../../components/badges/badges.component";  // Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import { LogOutButton } from "../../components/LogOutButton/logOutButton.component";

export const ProfilePage = ({ username, onLogout }) => {
  username = 'user';
  const badges = ["Badge 1", "Badge 2", "Badge 3", "Badge 4", "Badge 5", "Badge 6"];

  return (
    <ProfileStyled>
      <TitleComponent text="hello, " boldText={username} logo={null} size="small" />
      
      {/* Componente de puntos */}
      <Points points="8,383" />
      
      {/* Componente de badges */}
      <Badges badges={badges} />

      {/* Componente de botón de cierre de sesión */}
      <LogOutButton onClick={onLogout} />
    </ProfileStyled>
  );
};
