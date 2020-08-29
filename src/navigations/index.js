import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './root-navigation';
import {AuthContext} from '_services/store/auth-context';
import SplashScreen from '_scenes/splash';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {storeValue, retriveValue, removeValue} from '_utils/localStorage';

export default function App() {
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let hasLaunch;
      hasLaunch = await retriveValue('firstLaunch');

      if (typeof hasLaunch !== 'undefined') {
        setFirstLaunch(hasLaunch);
      }

      let userToken;
      userToken = await retriveValue('userToken');
      console.log('token Check', userToken);
      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        //firstLaunch
        if (firstLaunch === null) {
          let uniqueId = Math.floor(
            10000000 + Math.random() * 90000000,
          ).toString();
          setFirstLaunch(uniqueId);
          storeValue('firstLaunch', uniqueId);
        }

        //fb socialAuth
        if (data.bearerToken) {
          storeValue('userToken', data.bearerToken);
          dispatch({type: 'SIGN_IN', token: data.bearerToken});
        } else {
          // In a production app, we need to send some data (usually username, password) to server and get a token
          // We will also need to handle errors if sign in failed
          // After getting token, we need to persist the token using `AsyncStorage`
          // In the example, we'll use a dummy token
          storeValue('userToken', 'dummy-auth-token');
          dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
        }
      },
      signOut: () => {
        dispatch({type: 'SIGN_OUT'});
        removeValue('userToken');
        // LoginManager.logOut();
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  // const client = makeApolloClient(state.userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {state.isLoading ? (
          <SplashScreen />
        ) : state.userToken == 'null' ? (
          <AuthNavigator firstLaunch={firstLaunch} />
        ) : (
          <AppNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
