import { NavigationStyled } from "./navigation.styled";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/homeIcon.svg";
import exploreIcon from "../../assets/exploreIcon.svg";
import badgesIcon from "../../assets/badgesIcon.svg";
import settingsIcon from "../../assets/settingsIcon.svg";

export const NavigationComponent = () => {
    return (
        <NavigationStyled>
            <ul>
                <li>
                    <NavLink 
                        to="/homepage" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <img src={homeIcon} alt="Home" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/explore" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <img src={exploreIcon} alt="Explore" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/badges" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <img src={badgesIcon} alt="Badges" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/settings" 
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <img src={settingsIcon} alt="Settings" />
                    </NavLink>
                </li>
            </ul>
        </NavigationStyled>
    );
};