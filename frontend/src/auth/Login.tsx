import styled from 'styled-components';

import { useAuth } from './useAuth';

const LoginContainer = styled.div``;

export const SignIn = () => {
  return (
    <button type="button" data-testid="sign-in">
      Se connecter
    </button>
  );
};

export const LogOut = () => {
  return (
    <button type="button" data-testid="log-out">
      Se déconnecter
    </button>
  );
};

type LoginProps = {
  defaultAccessToken?: string;
};

export const Login = ({ defaultAccessToken }: LoginProps) => {
  const { isLoggedIn } = useAuth(defaultAccessToken);

  return (
    <LoginContainer>{isLoggedIn ? <LogOut /> : <SignIn />}</LoginContainer>
  );
};
