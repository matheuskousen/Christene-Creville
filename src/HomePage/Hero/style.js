import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  position: relative;
  .hero-row {
    min-height: 100vh;

    margin: 0 auto;
    display: grid;
    grid-template: 1fr / 1fr;
    align-items: center;

    .headline-h1 {
      font-size: 80px;
      padding-left: 70px;
      z-index: 1;
      position: relative;
      overflow: hidden;
      line-height: 3.5rem;

      a {
        font-size: 16px;
        border: 1px solid black;
        width: 150px;
        margin-top: 32px;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        text-align: center;
      }
    }

    .bg-img {
      background: url("/assets/utils/img0-1.jpg");
      background-size: cover;
      position: absolute;
      left: 65%;
      top: 80%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 600px;
      @media (min-width: 1024px) {
        left: 70%;
        top: 80%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 1200px;
      }
    }
  }

  @media (max-width: 970px) {
    overflow: hidden;
    .hero-row {
      .headline-h1 {
        text-align: left;
        padding: 0 1rem;
        font-size: 70px;
      }
    }
    .scroll {
      display: none;
    }
  }
`;
