import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './root-navigation';
import {AuthContext} from '_services/store/auth-context';
import SplashScreen from '_scenes/splash';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {storeValue, retriveValue, removeValue} from '_utils/localStorage';
import {StateProvider, reducer} from '_services/store';

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

  const initialState = {
    slotData: [
      {id: 1, slot: '9AM - 10AM', icon: 'clock-time-nine', details: null},
      {
        id: 2,
        slot: '10AM - 11AM',
        icon: 'clock-time-ten',
        details: {firstName: 'Dev', lastName: 'Test', phone: 643743},
      },
      {id: 3, slot: '11AM - 12AM', icon: 'clock-time-eleven', details: null},
      {id: 4, slot: '12AM - 1PM', icon: 'clock-time-twelve', details: null},
      {id: 5, slot: '1PM - 2PM', icon: 'clock-time-one', details: null},
      {id: 6, slot: '2PM - 3PM', icon: 'clock-time-two', details: null},
      {id: 7, slot: '3PM - 4PM', icon: 'clock-time-three', details: null},
      {id: 8, slot: '4PM - 5PM', icon: 'clock-time-four', details: null},
    ],
  };

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
        ) : state.userToken === 'null' ? (
          <AuthNavigator firstLaunch={firstLaunch} />
        ) : (
          <StateProvider initialState={initialState} reducer={reducer}>
            <AppNavigator />
          </StateProvider>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
