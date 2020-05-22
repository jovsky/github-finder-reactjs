import React, { useState } from 'react'; // {} é um hook
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function Home() {

  const history = useHistory();
  const [usuario, setUsuario] = useState(''); //Estado inicial de "usuario" [é JV]
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {

      const repositories = response.data;
      const repositoriesName = [];
      repositories.map( (repository) => {
        repositoriesName.push(repository.name);
        return null;
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      localStorage.setItem('username', usuario);
      history.push('/repositories');
    })
    .catch( err => setErro(true) );
  };

  return (

    <S.HomeContainer>
      <h1>Listagem de Repositórios de Usuário do Github</h1> 

      <S.Input className="usuarioInput" 
      placeholder="Digite aqui o usuário..." 
      value={usuario}
      onChange={ evt => setUsuario(evt.target.value) }
      onKeyPress={ evt => (evt.key==='Enter') ? handlePesquisa() : ''} />

      <S.Btn type="button" onClick={handlePesquisa}>Pesquisar</S.Btn>

      <br/><br/>
      
      { erro ? <S.mensagemErro>Ops! Usuário do Github não encontrado :(</S.mensagemErro> : '' }

    </S.HomeContainer>
  );

}

export default Home;

// No React, tudo são COMPONENTES independentes 

// <> é um fragment, funciona como uma div fantasma, pq na vdd nao existe

// O props resgasta valores de parametros definidos no App do 'index.js', são as PROPRIEDADES

// useState padrao: [usuario, setUsuario]. usuario é valor do input, e setUsuario eh a função q vai mudar o valor
// O ESTADO é a fonte principal de dados
// {}

// pilares do REACT: componentes, estados e propriedades