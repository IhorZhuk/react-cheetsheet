import React from 'react';
import Compound from '../../components/CompoundCom';

const HomePage: React.FC = () => (
  <div>
    Home Page
    <br/>
    <Compound onChange={() => console.log('change')}>
      <Compound.Title>Title Sample</Compound.Title>
      <Compound.Button>Toggle</Compound.Button>
    </Compound>
  </div>
)

export default HomePage;