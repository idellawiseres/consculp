import React from 'react';
import { setOnClick } from 'react-native-elements';

const MyComponent = () => {
  const buttonRef = React.createRef();

  React.useEffect(() => {
    // Set an onClick event handler to the button
    setOnClick(buttonRef, () => {
      console.log('Button clicked!');
    });
  }, [buttonRef]);

  return (
    <button ref={buttonRef}>Click me!</button>
  );
};
