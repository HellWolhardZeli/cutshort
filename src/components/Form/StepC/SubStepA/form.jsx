import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Dropdown, Container } from 'semantic-ui-react';

import styles from '../../Form.module.css';

export default function FormUi(props) {
  // const [Majorcryptocurrencies, setMajorcryptocurrencies] = useState('');

  function handleClick(e) {
    // console.log(toggleState[e.target.name - 1].state);
    var temp = toggleState;
    // console.log(temp[e.target.name - 1].state);
    temp[e.target.name - 1].state = !temp[e.target.name - 1].state;
    // console.log(temp);
    setToggleState([...temp]);
    props.onChange('expertise', toggleState);
  }
  const [addOwnState, setaddOwnState] = useState('');
  function addOwnChange(e) {
    setaddOwnState(e.target.value);
  }
  function onAddOwn(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setToggleState([
        ...toggleState,
        { name: toggleState.length + 1, state: 'true', text: e.target.value },
      ]);
      setaddOwnState('');
      props.onChange('expertise', toggleState);
    }
  }
  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ];
  const [toggleState, setToggleState] = useState([
    { name: 1, state: false, text: 'Major cryptocurrencies' },
    { name: 2, state: false, text: 'DeFi' },
    { name: 3, state: false, text: 'Yield Farming' },
    { name: 4, state: false, text: 'Infrastructure' },
    { name: 5, state: false, text: ' Alt Coins' },
    { name: 6, state: false, text: 'Crypto Investing' },
    { name: 7, state: false, text: ' Decentralized Exchangee' },
    { name: 8, state: false, text: ' Alt Coins' },
    { name: 9, state: false, text: 'Crypto Investing' },
  ]);
  return (
    <div>
      <Form>
        <Form.Field fluid>
          <label className={styles.label_color}>Blockchan General</label>
        </Form.Field>
        {toggleState.map((data, i) => {
          return (
            <Button
              // active={data.state}
              color={data.state ? 'blue' : 'white'}
              name={data.name}
              onClick={handleClick}
              className={styles.toggle_buttons}
            >
              {data.text}
            </Button>
          );
        })}

        <Form.Field fluid>
          <label className={styles.label_color}>Blockchan General</label>
        </Form.Field>

        <Form.Field>
          <label className={styles.label_color}>Add your own</label>
        </Form.Field>
        <Form.Group>
          <Form.Field fluid>
            <input
              placeholder='Press Enter to Add'
              onKeyDown={onAddOwn}
              value={addOwnState}
              onChange={addOwnChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  );
}
