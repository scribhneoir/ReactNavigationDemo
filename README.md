# React Native Navigation Example

### Intro

This example is based in React Native, Expo, and React Navigation. As React Native has no internal solution for navigation (other than jankally using props and state to determine wheather a component displays in JSX), Facebook highly recommends using the React Navigation package for app navigation. I will explain the process of setting up the project here, while the functionallity of the packages are explained in the code's comments.

### Project Setup

If you havent already set up Expo and a new React Native project, first install the Expo command line interface globally using npm.

    $ npm install --global expo-cli

Then use the Expo CLI to initiallize a project by running expo init in the directory you desire to create the project at.

    $ cd [DIRECTORY]
    $ expo init [PROJECT NAME]

The Expo CLI will create a new folder at the current directory to store your project. When given the option to choose how your Expo project is set up, choose a managed workflow [^1]. Once the project is set up, cd into the newly created project directory and install the required node packages for React Navigation.

    $ cd [NEW DIRECTORY]
    $ yarn add @react-navigation/native
    $ expo install react-native-screens react-native-safe-area-context

React Navigation has several navigation styles, all of which can be nested inside of eachother to perform complex navigation trees. The simplest is the stack, which will push and pop screens to a navigation tree. Install the stack using this command:

    $ yarn add @react-navigation/native-stack

You have now set up your Expo project for navigation. The actual functionallity of React Navigation is explained within App.tsx and the screen files listed in ./components.

### External Documentation

Here is the external documentation for all the packages used in this project. Since Expo sits on top of React Native, it is best practice to refer to Expo's documentation before React Native.

- [Expo](https://docs.expo.dev)
- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)

### Recomended Packages for React Native Projects

These are a few packages I used in my senior project that I found useful and would highly recommend to others.

- [Styled Components](https://styled-components.com/docs/basics#react-native)
- [Axios](https://axios-http.com/docs/intro)
- [Moment](https://momentjs.com)

[^1]: I personally would suggest using the typescrypt managed workflow, as the addition of types to javascript development will help you find errors in your code in development rather than production. It can cause some extra headache when learning initially but is well worth it in the end.
