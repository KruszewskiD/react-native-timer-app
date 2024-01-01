import { View, Text, StyleSheet, Vibration, Pressable } from "react-native";
import { formatTime } from "../helpers/formatTime";
import { useState, useEffect } from "react";
const Timer = ({ mainTaskToDo, setIsBreak, isBreak }) => {
  const [timer, setTimer] = useState(mainTaskToDo.timeToComplete);
  const [currentInterval, setCurrentInterval] = useState(1);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    setTimer(mainTaskToDo.timeToComplete * 60);
    setIsBreak(false);
  }, [mainTaskToDo]);
  useEffect(() => {
    const countdown = setInterval(() => {
      isTimerRunning ? setTimer((prevtimer) => prevtimer - 1) : null;
    }, 1000);
    if (timer == 0) {
      console.log("chujwie" + timer);
      clearInterval(countdown);
      Vibration.vibrate(3 * 30);
      if (isBreak) {
        if (currentInterval === mainTaskToDo.intervals) {
          return;
        }
        setCurrentInterval((prevInterval) => prevInterval + 1);
        setIsBreak(false);
        setTimer(mainTaskToDo.timeToComplete * 60);
      } else {
        if (currentInterval === mainTaskToDo.intervals) {
          return;
        }
        setIsBreak(true);
        setTimer(mainTaskToDo.breakTime * 60);
      }
    }
    return () => clearInterval(countdown); // Czyszczenie intervalu przed odmontowaniem komponentu
  }, [timer, isBreak, currentInterval, mainTaskToDo, isTimerRunning]);

  return (
    <View style={styles.timerWrapper}>
      <Pressable
        onPress={() => setIsTimerRunning((prevState) => !prevState)}
        style={{ flex: 1 }}
      >
        <View
          style={[
            styles.timer,
            { backgroundColor: isTimerRunning ? "#fff" : "#ddd" },
          ]}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 9,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 120,
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                {formatTime(timer)}
              </Text>

              <Text style={{ fontSize: 25, color: "#333" }}>
                {mainTaskToDo.title}
              </Text>
              <Text style={{ fontSize: 15, color: "#333" }}>
                {mainTaskToDo.description}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRadius: "50",
                borderWidth: 1,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width:
                    (timer /
                      (isBreak
                        ? mainTaskToDo.breakTime * 60
                        : mainTaskToDo.timeToComplete * 60)) *
                      100 +
                    "%",
                  backgroundColor: "darkgreen",
                  borderRadius: "50",
                  height: "100%",
                }}
              ></View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerWrapper: {
    flex: 4,
    padding: 10,
  },
  timer: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: "black",
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
