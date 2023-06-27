import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainScreen from "./Screens/MainScreen";
import { store } from "./store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainScreen style={{ flex: 1 }}></MainScreen>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
