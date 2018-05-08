import React from 'react';
import {
  Column,
  Columns,
  Container,
  Section,
} from 're-bulma';
import Icon from '../Icons';

import './style.css';

const Search = () => (
  <Section className="search">
    <Container className="container">
      <Columns className="row">
        <Column size="is8" offset="isOffset2" className="col">
          <input type="text" placeholder="Como você gostaria de ajudar?" />
          <button className="searchButton">
            <Icon icon="lupa" size={32} color="#444F60" />
          </button>
        </Column>
      </Columns>
    </Container>
  </Section>
);

export default Search;