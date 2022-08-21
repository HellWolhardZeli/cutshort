import FormUi from './components/Form/form';
import React from 'react';

export default function App() {
  const [state, setState] = React.useState({
    firstName: '',
  });
  function onChangeHandler(nam, val) {
    setState({
      ...state,
      [nam]: val,
    });
  }
  return (
    <div>
      <div>
      
        <FormUi onChange={onChangeHandler}></FormUi>
      </div>
    </div>
  );
}
