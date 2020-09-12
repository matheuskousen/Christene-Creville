import styled from 'styled-components';

export const Container = styled.nav`
  display:flex;
  height:68px;
  align-items:center;
  position:absolute;
  z-index:1;
  top:0;
  width:100%;
  left:0;
  padding-left:32px;
  .logo{
      flex: 1;
      font-size:22px;
      
      color:black;
      font-weight:900;
      a{
        font-weight:700;
      }
  }
  .navbar-links{
      font-size:14px;
      a{
        margin:0 0 0 20px;
      }
  }
  .fr{
      margin:0 32px;
  }
`;
