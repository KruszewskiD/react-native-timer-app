import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";

const TaskTitleAndDescription = ({ item }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

const DeleteTask = ({ dispatch, item }) => {
  const onPressHandler = () => {
    dispatch({
      type: "updateTaskList",
      payload: { id: item.id },
    });
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={{ justifyContent: "center" }}>
        <EvilIcons name="trash" size={30} color="black" />
      </View>
    </Pressable>
  );
};

const TaskListElement = ({ setMainTaskToDo, item }) => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    setMainTaskToDo({
      title: item.title,
      description: item.description,
      timeToComplete: Number(item.timeToComplete),
      breakTime: Number(item.breakTime),
      intervals: Number(item.intervals),
      id: item.id,
    });
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.taskElement}>
        <TaskTitleAndDescription item={item}></TaskTitleAndDescription>
        <DeleteTask dispatch={dispatch} item={item}></DeleteTask>
      </View>
    </Pressable>
  );
};

export default TaskListElement;

const styles = StyleSheet.create({
  taskElement: {
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderBottomColor: "black",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 30,
  },
});
