import { View, TextInput, Modal, Button } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddTaskModal = ({ setModalIsActive, modalIsActive }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState();
  const [workTime, setWorkTime] = useState();
  const [brakeTime, setBrakeTime] = useState();
  const [intetvalNumber, setIntervalNumber] = useState();
  const dispatch = useDispatch();

  const clearInputValues = (value) => {
    setNewTitle(value);
    setNewDescription(value);
    setWorkTime(value);
    setBrakeTime(value);
    setIntervalNumber(value);
  };
  return (
    <Modal animationType="slide" visible={modalIsActive}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextInput
          placeholder="Title"
          onChangeText={(value) => {
            setNewTitle(value);
          }}
          style={{
            fontSize: 20,
            width: "80%",
            padding: 10,
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="Description"
          onChangeText={(value) => {
            setNewDescription(value);
          }}
          style={{
            fontSize: 20,
            width: "80%",
            padding: 10,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: "80%",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="workTime"
            onChangeText={(value) => {
              setWorkTime(value);
            }}
            style={{
              fontSize: 20,
              flex: 1,
              padding: 10,
              borderWidth: 1,
            }}
          />
          <TextInput
            placeholder="brakeTime"
            onChangeText={(value) => {
              setBrakeTime(value);
            }}
            style={{
              fontSize: 20,
              flex: 1,
              padding: 10,
              borderWidth: 1,
            }}
          />
          <TextInput
            placeholder="Intervals"
            onChangeText={(value) => {
              setIntervalNumber(value);
            }}
            style={{
              fontSize: 20,
              flex: 1,
              padding: 10,
              borderWidth: 1,
            }}
          />
        </View>
        <Button
          title="Add Task!"
          onPress={() => {
            if (
              !newTitle ||
              !newDescription ||
              !workTime ||
              !brakeTime ||
              !intetvalNumber
            )
              return;
            dispatch({
              type: "addTask",
              payload: {
                title: newTitle,
                description: newDescription,
                timeToComplete: workTime,
                brakeTime: brakeTime,
                intervals: intetvalNumber,
                id: newTitle + Math.random() * 10000,
              },
            });
            clearInputValues("");
            setModalIsActive((prevState) => !prevState);
          }}
        ></Button>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
