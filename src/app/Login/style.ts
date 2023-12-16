import styled from "styled-components";
import loginBg from "../../assets/login-bg.png";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${loginBg}) no-repeat center center / cover;
`;

export const FormCard = styled.div`
  padding: 20px;
  background: #ffffffd6;
  border-radius: 5px;
  min-width: 80%;
  backdrop-filter: blur(10px);
`;

export const LoginTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0 1.5rem;
  text-align: center;
`;
