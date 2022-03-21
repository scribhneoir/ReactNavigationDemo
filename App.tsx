import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screen components
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';

//set up the native stack navigator
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      {/* All navigation is nested inside a top-level NavigationContainer */}
      <NavigationContainer>
        {/* Each Screen goes inside the Stack's navigator */}
        <Stack.Navigator>
          {/* This screen will be the default to be shown as it is listed first*/}
          <Stack.Screen
            /* The screen is refered to in navigation calls by its name and not by the component's name.
             *  It is recommended to keep the name the same as the component's name to avoid confusion.
             */
            name='ScreenA'
          >
            {props => (
              /* the navigation information (like route and nav functions)
               *  are passed through using the deconstructed {...props}.
               */
              <ScreenA {...props} text='Hello world! This is screen A' />
            )}
          </Stack.Screen>
          <Stack.Screen name='ScreenB'>
            {props => <ScreenB {...props} text='This is screen B' />}
          </Stack.Screen>
          <Stack.Screen name='ScreenAAgain'>
            {props => (
              <ScreenA
                {...props}
                text='This is screen A again, but with different props'
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
