import React, { useState } from "react";
import { Form } from "semantic-ui-react";

import styles from "../Form.module.css";

export default function StepB(props) {
  const [state, setstate] = useState({
    school: "",
    degree: "",
    major: "",
    year_of_grad: "",
  });

  function onChange(evt, data) {
    let nam = evt.target.name;
    console.log(evt.target.type);
    const val = evt.target.type === undefined ? data.checked : evt.target.value;
    nam = evt.target.type === undefined ? data.name : nam;
    setstate({ ...state, [nam]: val });
  }
  return (
    <div>
      <Form>
        <Form.Field fluid>
          <label className={styles.label_color}>Full Name</label>
          <input
            placeholder="Steve Jobs"
            name="school"
            value={state.school}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field fluid>
          <label className={styles.label_color}>Display Name</label>
          <input
            placeholder="Steve"
            name="degree"
            value={state.degree}
            onChange={onChange}
          />
        </Form.Field>
      </Form>
    </div>
  );
}
