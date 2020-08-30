import React from 'react';
import {useAuthValue} from '_services/store/auth-context';
import {RootSafeAreaView, RootView} from '_styles/rootView';
import {Container, Button, BtnText} from '_styles/PhotoGallery';

const Login = () => {
  const [username, setUsername] = React.useState('test');
  const [password, setPassword] = React.useState('test');
  const {signIn} = useAuthValue();
  return (
    <RootSafeAreaView>
      <RootView>
        <Container>
          <Button onPress={() => signIn({username, password})}>
            <BtnText>Login</BtnText>
          </Button>
        </Container>
      </RootView>
    </RootSafeAreaView>
  );
};

export default Login;
