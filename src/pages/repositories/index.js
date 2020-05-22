import React, { useEffect, useState } from 'react';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

export default function Repositories() {

  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [usuario] = useState(localStorage.getItem('username'));

  // useEffect monitora uma variavel, monitora "ciclos de vida"
  // pode ser usado para montar um componente quando numa variável mudar
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName); // transformou de string p objeto
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }

  }, [history]); // se nao passar nada em [], vai montar so qnd o componente for renderizado/montado


  return (
    <S.Container>

      <S.Title>Repositórios de <i>{usuario}</i></S.Title>
      {/** Esse Link é do react-router-dom que faz links entre as rotas 
       * e foi importado no styled.js*/}
      <S.List>
        {/** Programção declarativa, 
        * é mais simplificada que a Hiperativa (constroi elemento, coloca o innerHtml,
        * insere um por um na lista... é trabalhoso). Na declarativa é basicamente:
        * Se tiver elementos no array, constroi ele pra mim aqui */}
        { repositories.map( (repository, ix) => {
          let url=`http://github.com/${usuario}/${repository}`;
          return(
            <S.LinkRepo key={ix} href={url} target="_blank">
              <S.ListItem> { repository } </S.ListItem>
            </S.LinkRepo>
            
          )
        }) }
        
      </S.List>

      <S.LinkHome  to="/">VOLTAR</S.LinkHome>

    </S.Container>
  );
}

