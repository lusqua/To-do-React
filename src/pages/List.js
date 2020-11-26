import React from 'react';

const List = () => {
  const rlist = [
    {
      title: 'Criar lista',
      description: 'Criar uma lista de teste',
      date: 'ok',
    },
    {
      title: 'lista em localStorage',
      description:
        'Criar um localstorage onde toda lista fica lá e é passada para o usuário',
      date: 'a fazer',
    },
    {
      title: 'Criador de tarefas',
      description: 'Criar um campo que cria novas tarefas',
      date: 'ok',
    },
    {
      title: 'Removedor de tarefas',
      description: 'Criar um campo que cria novas tarefas',
      date: 'a fazer',
    },
  ];

  const [localstorage, setLocalstorage] = React.useState(
    localStorage.getItem('Lista')
      ? localStorage.getItem('Lista')
      : localStorage.setItem('Lista', '[]'),
  );

  const [list, setList] = React.useState(JSON.parse(localstorage));

  return (
    <div>
      {list.map((response) => (
        <div>
          <h2>{response.title}</h2>
          <ul>
            <li key={response.description}>
              <p>{response.description}</p>
            </li>
            <li key={response.date}>
              <p>{response.date}</p>
            </li>
            <button
              onClick={() => {
                const index = list.indexOf(response);
                if (index > -1) {
                  list.splice(index, 1);
                }
                setList(list);
                console.log(list);
                setLocalstorage(JSON.stringify(list));
                localStorage.setItem('Lista', JSON.stringify(list));
              }}
            >
              Excluir
            </button>
          </ul>
        </div>
      ))}
      <button
        onClick={() => {
          localStorage.setItem('Lista', JSON.stringify(rlist));
          window.location.reload(true);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default List;
