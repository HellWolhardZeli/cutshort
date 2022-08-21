import React, { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Dropdown,
  Container,
  Card,
} from 'semantic-ui-react';
import person from '../../../../assets/img/person.png'
import persons from '../../../../assets/img/persons.png'

import styles from '../../Form.module.css';

export default function FormUi(props) {
  // const [Majorcryptocurrencies, setMajorcryptocurrencies] = useState('');
  const [activeLevel, setactiveLevel] = useState('');
  function cardClicked(e, data) {
    setactiveLevel(data.meta);
    props.onChange('expertise_level', data.meta);
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <Card.Group>

            <Card
              className={styles.expertise_card}
              meta='intermediate'
              onClick={cardClicked}
              style={{
                border:"1px solid",
                borderColor: activeLevel === 'intermediate' ? 'blue' : '#f0f1f7',
              }}
            >
              <Card.Content >
                <div><img src={person} alt="" /></div>
                <Card.Header
                  className={styles.expertise_card_heading}
                  // style={{
                  //   color: activeLevel === 'intermediate' ? 'white' : null,
                  // }}
                >
                 For Myself
                </Card.Header>

                <Card.Description
                  // style={{
                  //   color: activeLevel === 'intermediate' ? 'white' : null,
                  // }}
                >
                 Write better. Think more clearly. Stay organized.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card
              className={styles.expertise_card}
              meta='expert'
              onClick={cardClicked}
              style={{
                border:"1px solid",
                borderColor: activeLevel === 'expert' ? 'blue' : '#f0f1f7',
              }}
            >
              <Card.Content >
              <div><img src={persons} alt="" /></div>
                <Card.Header
                  className={styles.expertise_card_heading}
                  // style={{
                  //   color: activeLevel === 'expert' ? 'white' : null,
                  // }}
                >
                  With my team
                </Card.Header>

                <Card.Description
                  // style={{
                  //   color: activeLevel === 'expert' ? 'white' : null, 
                  // }}
                >
                {"Wikis, docs, tasks & projects, all in one placeWikis, docs, tasks & projects, all in one place."}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Form.Field>
      </Form>
    </div>
  );
}
