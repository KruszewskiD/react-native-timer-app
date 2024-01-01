import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };
    case "setMainToDoItem":
      return {
        ...state,
        mainTaskToDo: action.payload,
      };
    case "updateTaskList":
      return {
        ...state,
        toDoList: state.toDoList.filter(
          (element) => element.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, { toDoList: [] });
