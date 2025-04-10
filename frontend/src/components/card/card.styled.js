import styled from "styled-components";

export const CardStyled = styled.div`
  .courseSmall {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-purple-dark-medium);
    border-radius: 15px;
    width: 35vw;
    padding: 0.5rem;
    img {
      width: 33px;
      height: 33px;
    }
    p {
      align-self: flex-start;
      font-size: 0.8rem;
    }
  }

  .courseLarge {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #d0e0ff;
    border-radius: 15px;
    width: 80vw;
    height: 80px;
    padding: 0.5rem;

    > div:first-of-type {
      width: 60%;
      height: 100%;
    }
    img {
      width: 33px;
      height: 33px;
      position: absolute;
      left: 1rem;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--color-purple-dark);
      padding: 16px 10px;
    }
    p {
      font-size: 0.8rem;
      color: var(--color-purple-dark);
    }

    .courseLength {
      position: absolute;
      right: 0.25rem;
      top: 1.5rem;
      background-color: var(--color-yellow-saturated);
      padding: 0.25rem;
      border: 2px solid var(--color-yellow);
      border-radius: 10px;
      font-weight: 700;
      margin-right: 10px;
    }

    .progressBarContainer {
      background-color: var(--color-purple-light);
      border-radius: 10px;
      width: 100%;
      height: 0.5rem;
      margin-top: 0.5rem;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;
    }

    .progressBar {
      background-color: var(--color-purple-medium);
      border-radius: 10px;
      width: 50%;
      height: 100%;
    }
}

.courseVideo {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-purple-dark-medium);
    border-radius: 15px;
    width: 40vw;
    height: 15vh;
    overflow: hidden;
    padding: 0.5rem;
    padding-bottom: 0;

    >div:first-of-type {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    img {
        width: 33px;
        height: 33px;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
    p {
        font-size: 0.8rem;
        color: var(--color-purple-dark);
        font-weight: bold;
    }

    .videoLength {
        background-color: var(--color-purple-medium);
        border-radius: 10px;
        width: 120%;
        height: 0.5rem;
        position: absolute;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .videoProgress {
        position: absolute;
        background-color: var(--color-purple-dark);
        border-radius: 10px;
        height: 100%;
        left: 0;
        top: 0;
    }

    

}

.courseReading {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid var(--color-purple-dark-medium);
    border-radius: 15px;
    width: 40vw;
    padding: 0.5rem;
    height: 15vh;

    >div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    img {
        width: 33px;
        height: 33px;
    }
    p {
        font-size: 0.8rem;
        font-weight: 700;
    }

    > p {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
}

    .courseExercise {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-purple-dark-medium);
        border-radius: 15px;
        width: 40vw;
        padding: 0.5rem;
        height: 15vh;
        font-weight: 700;
    }
`
