import React, { useState } from "react";

import {
  Button,
  Checkbox,
  Container,
  Form,
  Progress,
  Grid,
  GridColumn,
} from "semantic-ui-react";

import logo from '../../assets/img/logo.png'

import { ReactComponent as StepAicon } from "../../assets/svg/StepA.svg";
import { ReactComponent as StepBicon } from "../../assets/svg/StepB.svg";
import { ReactComponent as StepCicon } from "../../assets/svg/StepC.svg";
import { ReactComponent as StepDicon } from "../../assets/svg/StepD.svg";
import { ReactComponent as StepBInicon } from "../../assets/svg/StepBIn.svg";
import { ReactComponent as StepCInicon } from "../../assets/svg/StepCIn.svg";
import { ReactComponent as StepDInicon } from "../../assets/svg/StepDIn.svg";

import StepA from "./StepA/form";
import StepB from "./StepB/form";
import StepD from "./StepD/form";
import SubStepA from "./StepC/SubStepA/form";
import SubStepB from "./StepC/SubStepB/form";

import styles from "./Form.module.css";
// var slide = 0;
export default function FormUi({ onChange }) {
  const steps = ["StepA", "StepB", "SubStepB", "StepD"];
  const [activeStep, setActiveStep] = useState("StepA");
  const [progress1, setProgress1] = useState(15);
  const [slide, setSlide] = useState(0);

  // const [slide, setslide] = useState(0);
  // const activeStep = 'StepA';

  function onNext() {
    // slide++;
  
    if (slide !== 3) {
      const nextSlide = slide +1;
      setSlide(nextSlide);
      // setslide(5);
      // setSlide(4);
      setProgress1(progress1 + 33);
      setActiveStep(steps[nextSlide]);
    } 

   
  }
  function onBack() {
   
    if (slide !== 0) {
      // setslide(0);
      const nextSlide = slide -1;
      setSlide(nextSlide);
      setProgress1(progress1 - 33);
      setActiveStep(steps[nextSlide]);
    } 
  
  }

  return (
    <div>
      <Container class textAlign="center" style={{ marginTop: "50px" }}>
    <div><img src={logo} alt="" /></div>
        <Grid>
          <Grid.Column
            width={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className={styles.step_circle_fill}>1</div>
          </Grid.Column>

          <Grid.Column
            width={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {slide > 0 ? (
              <div className={styles.step_circle_fill}>2</div>
            ) : (
              <div className={styles.step_circle}>2</div>
            )}
          </Grid.Column>

          <Grid.Column
            width={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {slide > 1 ? (
              <div className={styles.step_circle_fill}>3</div>
            ) : (
              <div className={styles.step_circle}>3</div>
            )}
          </Grid.Column>

          <Grid.Column
            width={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {slide > 2 ? (
              <div className={styles.step_circle_fill}>4</div>
            ) : (
              <div className={styles.step_circle}>4</div>
            )}
          </Grid.Column>
        </Grid>
        <Container className={styles.progressBar}>
          <Progress
            style={{ position: "relative", top: "-37px", zIndex: "-2" }}
            percent={progress1}
            color={"violet"}
            size="tiny"
          />
        </Container>
      </Container>
      <Grid stackable>
        <Grid.Column only=" tablet computer" width={3}></Grid.Column>
        <Grid.Column width={10}>
          {(() => {
            switch (activeStep) {
              case "StepA":
                return (
                  <Container textAlign="center" className={styles.sub_heading}>
                    <h1>Welcome! First things first...</h1>
                    <p style={{ color: "#7c8499" }}>
                      You can always change them later.
                    </p>
                  </Container>
                );
              case "StepB":
                return (
                  <Container textAlign="center" className={styles.sub_heading}>
                    <h1>Let's set up a home for all your work</h1>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      You can always create another workspace later
                    </p>
                  </Container>
                );

              case "SubStepB":
                return (
                  <Container textAlign="center" className={styles.sub_heading}>
                    <h1>How are you planning to use Eden</h1>
                    <p>We'll streamline your etup experience accordingly</p>
                  </Container>
                );
              case "StepD":
                return (
                  <Container textAlign="center" className={styles.sub_heading}>
                    <h1>Add your Experience</h1>
                    <p>to reach the most relevent people,jobs and updates</p>
                  </Container>
                );
              default:
                return <StepA></StepA>;
            }
          })()}

          <Container fluid className={styles.main_form}>
            {(() => {
              switch (activeStep) {
                case "StepA":
                  return <StepA onChange={onChange}></StepA>;
                case "StepB":
                  return <StepB onChange={onChange}></StepB>;
                case "SubStepB":
                  return <SubStepB onChange={onChange}></SubStepB>;

                case "StepD":
                  return <StepD onChange={onChange}></StepD>;
                default:
                  return <StepA onChange={onChange}></StepA>;
              }
            })()}

            <Grid className={styles.form_buttons}>
              <Grid.Column width={8}>
                <Button
                  className={styles.form_button_back}
                  style={{ float: "right" }}
                  type="submit"
                  basic
                  color="blue"
                  content="Blue"
                  onClick={onBack}
                >
                  Back
                </Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <Button
                  className={styles.form_button_next}
                  type="submit"
                  primary
                  onClick={onNext}
                >
                  Next
                </Button>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
