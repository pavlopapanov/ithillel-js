import React from "react";
import useTodoField from "../../hooks/useTodoField";
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
  const { addItem } = props;
  const todoInputText = useTodoField('type');
  const onSubmit = (event) => {
    addItem(event, todoInputText);
  }

  return (
      <form className="form" onSubmit={onSubmit}>
        <Input
            value={todoInputText.value}
            onChange={todoInputText.onChange}
            type={todoInputText.type}
        />
        <Button text="Відправити" customClass="form__btn" />
      </form>
  )
}

export default TodoForm;