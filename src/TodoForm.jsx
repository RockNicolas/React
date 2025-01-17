import React from 'react'

const TodoForm = ({ todoform }) => {
  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form>
            <input type="texte" placeholder='Digite o titulo'/>
            <select>  
                <option value="">Selecione uma categoria</option>  
                <option value="Trabalho">Selecione uma categoria</option>         
                <option value="Pessoal">Selecione uma categoria</option>         
                <option value="Estudos">Selecione uma categoria</option>                   
            </select>
            <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm;