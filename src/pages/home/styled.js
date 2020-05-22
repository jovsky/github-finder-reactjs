import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: block;
  width: 50vw;
  margin: 50px auto;
  padding: 30px;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 0 0 10px #555;
  background-color: rgb(255, 210, 128);
  border-radius: 1rem;
  font-family: sans-serif;
`

export const Input = styled.input`
  height: 2.5rem;
  width: 250px;
  border: 1px solid #ddd;
  padding: 0 .5rem;
  border-radius: .5rem 0 0 .5rem;
  border-right: none;

  &:focus, &:active {
    outline: none;
    box-shadow: none;
  }

`

export const Btn = styled.button`
  height: 2.5rem;
  border: 2px solid #eee;
  padding: 0 .5rem;
  background-color: #111;
  color: white;
  border-radius: 0 .5rem .5rem 0;
  cursor: pointer;
  border-left: none;

  &:hover {
    background-color: #333;
    box-shadow: none;
  }
  &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
}
`

export const mensagemErro = styled.span`
  margin-top: 20px;
  color: red;
  display: block;
  font-size: 1rem;
  font-weight: 600;

`