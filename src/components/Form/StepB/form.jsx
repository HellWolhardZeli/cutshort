import React, { useState } from "react";
import { Form } from "semantic-ui-react";

import styles from "../Form.module.css";

export default function StepA(props) {
  const [state, setstate] = useState({
    company: "",
    role: "",
    start_year: "",
    end_year: "",
    company_location: "",
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
          <label className={styles.label_color}>Workspace Name</label>
          <input
            placeholder="Eden"
            name="company"
            value={state.company}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field fluid labeled>
          <label className={styles.label_color}>Workspace URL</label>
          <span style={{ display: "flex" }}>
            <span
              class="ui label"
              style={{ color: "#a4a9bb", lineHeight: "25px", fontSize: "14px" }}
            >
              www.eden.com/
            </span>
            <input
              placeholder="Example"
              name="role"
              value={state.role}
              onChange={onChange}
            />
          </span>
        </Form.Field>
      </Form>
    </div>
  );
}
