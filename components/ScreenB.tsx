import { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type CompProps = {
  navigation: { navigate: Function; goBack: Function };
  text: string;
};
export default function ScreenB(props: CompProps) {
  /* This is a state hook. It defines a variable,
   * a setter function, and the variable's default value.
   * When state updates, components that contain that state
   * will re-render. You will notice that the state is preserved
   * when navigating back to this screen in the stack.
   */
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <Text>{props.text}</Text>
      <Text>This page uses the state hook</Text>
      <Button
        title={count + ''}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title='Screen A'
        onPress={() => {
          props.navigation.navigate('ScreenAAgain');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
