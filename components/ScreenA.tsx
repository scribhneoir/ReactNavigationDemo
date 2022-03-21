import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* since this project uses Typescript (a superset of Javascript)
 *  we must define  the component's expected props.
 */
type CompProps = {
  /* The props passed by navigation are much more complex,
   *  but we are only using the navigate and goBack functions in this example
   */
  navigation: { navigate: Function; goBack: Function };
  text: string;
};
export default function ScreenA(props: CompProps) {
  return (
    <SafeAreaView>
      <Text>{props.text}</Text>
      <Button
        title='Screen B'
        onPress={() => {
          // Navigate to the screen in stack with the name ScreenB
          props.navigation.navigate('ScreenB');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          /* Navigate back to whatever screen came before it.
           * If there is no previous screen, it throws an error
           * This error is only thrown in developmentt and will be ignored in production
           */
          props.navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
