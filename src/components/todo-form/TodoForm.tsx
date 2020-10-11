import React, {useState} from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  const [title, setTilte] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTilte(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title)
      setTilte('')
    }
  }

  return <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder={"Введите название дела"}
        />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
}