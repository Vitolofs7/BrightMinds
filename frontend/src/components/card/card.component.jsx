import { CardStyled } from "./card.styled";
import { useVideosData } from "../../utils/hooks/useVideosData";

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
                    <p>{courseProgress}%</p>
                    <div className="progressBarContainer">
                        <div className="progressBar" style={{ width: `${courseProgress}%` }}></div>
                    </div>
                </div>
                <div className="courseLength">
                    <p>{courseLength}</p>
                </div>
            </div>
            }

            {type === 'courseVideo' && <div className="courseVideo">
                <div>
                    <p>{courseLength}</p>
                    <p>{courseName}</p>
                </div>

                <img src={icon} alt="" />

                <div className="videoLength">
                    <div className="videoProgress" style={{ width: `${courseProgress}%` }}></div>
                </div>

            </div>
            }

            {type === 'courseReading' && <div className="courseReading">

                <div>
                    <p>{courseLength}</p>
                    <img src={icon} alt="icon" />
                </div>

                <p>{courseName}</p>
            </div>
            }

            {type === 'courseExercise' && <div className="courseExercise">

                <p>{courseName}</p>

            </div>
            }


        </CardStyled>
    );
}