import { CardStyled } from "./card.styled";

export const CardComponent = ({ className, type, courseLength, icon, courseName, courseProgress }) => {

    return (
        <CardStyled>
            {type === 'courseSmall' && <div className="courseSmall">
                <p>{courseLength}</p>
                <img src={icon} alt="pythonLogo" />
                <h3>{courseName}</h3>
            </div>
            }

            {type === 'courseLarge' && <div className="courseLarge">
                <img src={icon} alt="" />
                <div>
                    <h3>{courseName}</h3>
                    <p>{courseProgress}</p>
                    <div className="progressBarContainer">
                        <div className="progressBar"></div>
                    </div>
                </div>
                <div className="courseLength">
                    <p>{courseLength}</p>
                </div>
            </div>


            }
        </CardStyled>
    );
}