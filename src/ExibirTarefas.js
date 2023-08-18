function ExibirTarefas({ tarefas }) {
  if (tarefas.length > 0) {
    return (
      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>{tarefa.nome}</li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <p>Não existem tarefas a serem exibidas!</p>
    </div>
  )
}

export default ExibirTarefas
