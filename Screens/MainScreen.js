import { View, StyleSheet, LogBox, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import AddTaskModal from "../Components/AddTaskModal";

import Timer from "../Components/Timer";

import { useState } from "react";
import { useSelector } from "react-redux";
import SearchInput from "../Components/SearchInput";
import TodolistComponent from "../Components/TodolistComponent";

LogBox.ignoreAllLogs();

function MainScreen(props) {
  // global data from redux store
  const state = useSelector((state) => {
    return state;
  });

  // useStateHooks
  const [searchValue, setSearchValue] = useState("");
  const [modalIsActive, setModalIsActive] = useState(false);

  // task renderd in Timer
  const [mainTaskToDo, setMainTaskToDo] = useState({
    timeToComplete: 25,
    description: ":)",
    breakTime: 5,
    intervals: 5,
    title: "Add New Task",
    id: "firstItem",
  });

  const [isBreak, setIsBreak] = useState(false);
  return (
    <View style={styles.wrapper}>
      <StatusBar color="black" />
      {/*Timer */}
      <Timer
        mainTaskToDo={mainTaskToDo}
        isBreak={isBreak}
        setIsBreak={setIsBreak}
      ></Timer>

      {/*ToDoLista */}
      <TodolistComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setModalIsActive={setModalIsActive}
        setMainTaskToDo={setMainTaskToDo}
        state={state}
      ></TodolistComponent>

      {/* ?Bottom Menu? */}
      <View style={styles.bottomMenuWrapper}>
        <View
          style={{
            borderWidth: 1,
            flex: 1,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40 }}>
            {!isBreak ? "Deep Focus Time" : "Rest Time"}
          </Text>
        </View>
      </View>
      {/*Modal */}
      <AddTaskModal
        modalIsActive={modalIsActive}
        setModalIsActive={setModalIsActive}
      ></AddTaskModal>
    </View>
  );
}

export default MainScreen;
// styles
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  bottomMenuWrapper: { flex: 1, padding: 10 },
});
