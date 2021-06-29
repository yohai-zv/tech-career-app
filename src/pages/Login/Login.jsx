// import './Login.css'
import styled from "styled-components";
const Login = () => {
  const StyleDiv = styled.div`
    text-align: -webkit-center;
  `;

  const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: -webkit-center;
    line-height: 220%;
    border: solid 1px #00000047;
    border-radius: 10px;
    padding: 20px;
    box-shadow: #00000012 0px 2px 4px 4px;
    input {
      border-radius: 10px;
      border: solid 1px #00000047;
      padding: 8px;
      margin: 10px;
    }
  `;
  const StyleButton = styled.button`
    height: 35px;
    border-radius: 6px;
    border: none;
    background: #ff9800;
    &:hover {
      background: rgb(228, 151, 36);
    }
  `;
  return (
    <StyleDiv >
      <h1> Login </h1>
      <StyleForm >
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot password?</a>
        <StyleButton>Login</StyleButton>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </StyleForm>
    </StyleDiv>
  );
};
export default Login;
