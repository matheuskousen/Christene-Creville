import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    margin-top: -120px;
  }
  .intro-row {
    padding-left: 32px;
    max-width: 500px;

    .headline-h2 {
      position: relative;
      overflow: hidden;
      font-size: 42px;
      text-align: right;
      @media (min-width: 1024px) {
        padding-bottom: 100px;
      }
    }
  }

  @media (max-width: 970px) {
    .intro-row {
      padding-left: 1px;
      .headline-h2 {
        padding: 0 22px;
        font-size: 42px;
        margin-top: -2rem;
      }
    }
  }
`;
