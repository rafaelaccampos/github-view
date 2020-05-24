import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form action="">
        <input placeholder="Nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22009981?s=460&u=b1416b4d67af05ac9f070ec42682a40971b25c76&v=4"
            alt="Rafaela Campos"
          />
          <div>
            <strong>Rocketfy</strong>
            <p>Interface recriada do Pipefy seguindo o vídeo da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22009981?s=460&u=b1416b4d67af05ac9f070ec42682a40971b25c76&v=4"
            alt="Rafaela Campos"
          />
          <div>
            <strong>Rocketfy</strong>
            <p>Interface recriada do Pipefy seguindo o vídeo da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/22009981?s=460&u=b1416b4d67af05ac9f070ec42682a40971b25c76&v=4"
            alt="Rafaela Campos"
          />
          <div>
            <strong>Rocketfy</strong>
            <p>Interface recriada do Pipefy seguindo o vídeo da Rocketseat</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
