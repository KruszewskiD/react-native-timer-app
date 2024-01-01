import TaskListElement from "./TaskListElement";
import { View, FlatList } from "react-native";
const TasksList = ({ searchValue, state, setMainTaskToDo }) => {
  const data =
    searchValue != ""
      ? state.toDoList.filter((element) => element.title.includes(searchValue))
      : state.toDoList;
  const keyExtractorCallback = (item) => item.id;
  const renderItemCallback = ({ item }) => {
    return (
      <TaskListElement
        setMainTaskToDo={setMainTaskToDo}
        item={item}
      ></TaskListElement>
    );
  };

  return (
    <View style={{ flex: 8 }}>
      <FlatList
        data={data}
        style={{ flex: 1, padding: 5 }}
        keyExtractor={keyExtractorCallback}
        renderItem={renderItemCallback}
      ></FlatList>
    </View>
  );
};

export default TasksList;
