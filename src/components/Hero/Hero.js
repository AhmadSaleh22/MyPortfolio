import {React, useState} from 'react';

import { Section, SectionText, SectionTitle, SecondaryBtn } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ahmed Saleh. <br/>I Build things for the web.
      </SectionTitle>
      <SectionText>
        I'm a Software Engineer, 
        I have 2 years experience leading all phases of the Design and Development process on responsive web Applications.
      </SectionText>
      <SecondaryBtn href='https://wa.me/message/LFA7JWZP573SE1'>Contact Me</SecondaryBtn>
        {/*
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          Hello from the modal!
        </Modal>
      */}
    </LeftSection>
  </Section>
);

export default Hero;