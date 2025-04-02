import { TitleStyled } from "./title.styled";


export const TitleComponent = ({ text, boldText, logo, size }) => {

    console.log(size);


    return (
        <TitleStyled className='title'>
            <div className={size}>
                {logo && <img src={logo} alt="Logo" />}
                <div>
                    <h1>{text}</h1>
                    <p>{boldText}</p>
                </div>
            </div>

        </TitleStyled>
    );


}