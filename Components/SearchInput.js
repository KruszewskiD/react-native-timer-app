import { View, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = ({ setSearchValue, setModalIsActive }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          flex: 1,
          borderRadius: 50,
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 8,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TextInput
            placeholder="Type Something"
            style={{
              fontSize: 20,
              width: "100%",
              height: "100%",
            }}
            onChangeText={(value) => {
              setSearchValue(value);
            }}
          ></TextInput>
        </View>
      </View>
      <View style={{ margin: 5 }}>
        <Pressable
          onPress={() => {
            setModalIsActive((prevState) => {
              return !prevState;
            });
          }}
        >
          <AntDesign name="pluscircleo" size={30} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchInput;
