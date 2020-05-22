import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-familiy: sans-serif;
  border-radius: 10px;
  border: 1px solid black;
  padding: 15px;
  box-shadow: 2px 2px 6px grey;
  font-family: sans-serif;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
  margin: 30px 0;
`

export const ListItem = styled.li`
  margin: .5rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 8px;
  border: 2px solid white;

  &:hover {
    background-color: #222;
  }
`

export const Container = styled.div`
  max-width: 80%;
  margin: auto;
`

export const LinkHome = styled(Link)`
  color: white;
  text-decoration: none;
  border: 3px solid white;
  box-shadow: 0 0 5px #000;
  padding: 7px;
  font-family: sans-serif;
  background-color: red;
  border-radius: 0.4rem;
  margin: 10px;

  &:hover {
    background-color: rgb(255,30,30);
  }
`

export const LinkRepo = styled.a`
  &:link, &:active, &:visited, &:hover {
    color: white;
    text-decoration: none;
  }
`
