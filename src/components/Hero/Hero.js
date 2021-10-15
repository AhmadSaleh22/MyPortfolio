import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
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
      <Button onClick={()=>
        window.location = 'https://google.com'
      }>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;