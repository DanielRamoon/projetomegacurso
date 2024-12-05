import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
`;

export const SearchBarContainer = styled.div`
  background-color: #1a2b4c;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 10px;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;
