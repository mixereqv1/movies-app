import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 250px;
  border: 2px solid #000;
  border-radius: 25px;
  padding: 5px 10px;
`;

const SearchInput = () => (
  <StyledWrapper>
    <label htmlFor="title">MOVIE NAME</label>
    <StyledInput type="text" id="title" placeholder="i.e. Jurassic Park" />
  </StyledWrapper>
);

export default SearchInput;
