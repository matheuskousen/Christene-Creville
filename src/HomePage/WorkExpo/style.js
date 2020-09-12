import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 62px;

  .workexpo-row {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template: auto 0.5fr / 1fr 2fr;

    .col-left {
      font-size: 70px;
      white-space: nowrap;
      p {
        margin-bottom: 32px;
        color: gray;
      }
      .hess {
        color: black;
        position: relative;
        z-index: 1;
      }
    }
    .col-right {
      margin-left: -60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 500px;
      }
    }
  }

  /* WORK INSIDE */

  .work-inside {
    width: 100%;
    background: linear-gradient(transparent 10%, #121315 30%);
    .work-inside-row {
      max-width: 960px;

      margin: 0 auto;
      .headline-h3 {
        padding: 94px 0;
        font-size: 80px;
        text-align: center;
      }

      .headline-image {
        img {
          height: 800px;
        }
      }
      .intro-work-inside {
        padding: 62px 0;
        .subheadline-h4 {
          text-align: center;

          h6 {
            color: gray;
          }
        }
        .intro-text {
          font-size: 36px;
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
          line-height: 3.5rem;
          p {
            color: aliceblue;
            margin: 48px 0;
          }
        }

        .row-intro-inside {
          display: grid;

          grid-template: auto 1fr/ 1fr 1fr;
          place-items: center;

          .c-1 {
            background: red;
            justify-content: center;

            display: flex;
            img {
              width: 300px;
              height: 500px;
            }
          }
        }

        .r-2 {
          display: grid;

          grid-template: auto 1fr/ 1fr 1fr;
          place-items: center;

          .c-2 {
            justify-content: center;

            display: flex;
            img {
              width: 300px;
              height: 500px;
            }
          }

          .c-1 {
            display: flex;

            font-size: 32px;
            p {
              color: aliceblue !important;
              padding: 0 5rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 970px) {
    .workexpo-row {
      grid-template: auto/ 1fr;
      .col-left {
        padding-left: 24px;
        font-size: 42px;
      }
    }
    .headline-h3 {
      font-size: 52px !important;
    }
    .intro-text {
      padding: 0 45px;
    }

    .intro-work-inside .row-intro-inside,
    .r-2 {
      grid-template: auto / 1fr !important;
    }
    .r-2 {
      .c-2 {
        position: relative !important;
        z-index: 1;
      }
      .c-1 {
        margin-bottom: -1cm;
        position: relative !important;
        z-index: 2;
      }
    }
  }

  @media (max-width: 375px) {
    .workexpo-row {
      grid-template: auto/ 1fr;
      .col-left {
        padding-left: 24px;
        font-size: 30px;
        margin: 28px 0;
      }
    }

    .c-1 {
      display: flex;

      margin-top: 2rem;
      font-size: 32px;
      p {
        color: aliceblue !important;

        padding-left: 2rem !important;
        padding-right: 1rem !important;
        line-height: 1.5rem;
      }
    }
  }
`;
