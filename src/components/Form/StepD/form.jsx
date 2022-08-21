import React, { useState } from 'react';
import { Button, Checkbox, Container, Form, Icon } from 'semantic-ui-react';
import Tick from '../../../assets/img/tick.png'
import styles from '../Form.module.css';

export default function StepD(props) {
  const [state, setstate] = useState({
    callPerHr: '',
    perMsg: '',
  });
  onchange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    props.onChange('rate', state);
  };
  return (
    <div>
      <div style={styles.completed_circle}></div>
      <div style={{display:'flex', justifyContent:'center'}}><img src={Tick} alt="" /></div>
      <h1 style={{textAlign:'center'}}>Congratulations, Eren!</h1>
      <div className={styles.label_color} style={{textAlign:'center'}} >You have completed onboarding, you an start using Eden</div>

      {/* <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <label className={styles.label_color}>Call per hr.</label>
            <input
              placeholder='10.00'
              type='number'
              value={state.callPerHr}
              className={styles.money_input}
              name='callPerHr'
              onChange={onchange}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
          <Form.Field>
            <label className={styles.label_color}>Per message.</label>
            <input
              placeholder='2.00'
              type='number'
              value={state.perMsg}
              name='perMsg'
              className={styles.money_input}
              onChange={onchange}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label className={styles.label_color} style={{ color: 'grey' }}>10% Sapien Service Fee</label>
        </Form.Field>
        <Form.Group widths='equal'>
          <Form.Field>
            <label className={styles.label_color}>Call per hr.</label>
            <input
              placeholder='10.00'
              type='number'
              className={styles.money_input}
              value={(Math.round((state.callPerHr / 10) * 100) / 100).toFixed(
                2
              )}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
          <Form.Field>
            <label className={styles.label_color}>Per message.</label>
            <input
              placeholder='2.00'
              type='number'
              className={styles.money_input}
              value={(Math.round((state.perMsg / 10) * 100) / 100).toFixed(2)}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
        </Form.Group>

        <Form.Field widths='equal'>
          <label className={styles.label_color}>You'll Recieve</label>
          <p style={{ fontSize: '10px', color: 'grey' }}>
            The estimated amount you will receive after service fees
          </p>
        </Form.Field>
        <Form.Group>
          <Form.Field>
            <label className={styles.label_color}>Call per hr.</label>
            <input
              placeholder='10.00'
              type='number'
              className={styles.money_input}
              value={(
                Math.round((state.callPerHr - state.callPerHr / 10) * 100) / 100
              ).toFixed(2)}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
          <Form.Field>
            <label className={styles.label_color}>Per message.</label>
            <input
              placeholder='2.00'
              type='number'
              className={styles.money_input}
              value={(
                Math.round((state.perMsg - state.perMsg / 10) * 100) / 100
              ).toFixed(2)}
            />
            <Icon name='dollar sign' className={styles.input_icon}></Icon>
          </Form.Field>
        </Form.Group>
      </Form> */}
    </div>
  );
}
