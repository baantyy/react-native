import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Reference from './app/components/Reference';
import Input from './app/containers/Input';
import Buttons from './app/containers/Buttons';
import Loader from './app/containers/Loader';

const App = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="loader" component={Loader} />
        <Scene key="buttons" component={Buttons} />
        <Scene key="input" component={Input} />
        <Scene key="reference" component={Reference} />
      </Stack>
    </Router>
  );
};

export default App;
