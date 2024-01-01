import { View, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";
import TasksList from "./TasksList";
const TodolistComponent = ({
  searchValue,
  setSearchValue,
  setModalIsActive,
  setMainTaskToDo,
  state,
}) => {
  return (
    <View style={styles.toDoListWrapper}>
      <View style={styles.toDoListBorder}>
        <SearchInput
          setSearchValue={setSearchValue}
          setModalIsActive={setModalIsActive}
        ></SearchInput>
        <TasksList
          searchValue={searchValue}
          state={state}
          setMainTaskToDo={setMainTaskToDo}
        ></TasksList>
      </View>
    </View>
  );
};

export default TodolistComponent;

const styles = StyleSheet.create({
  toDoListWrapper: {
    flex: 6,
    padding: 10,
  },
  toDoListBorder: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
