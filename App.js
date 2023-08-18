import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <View style={styles.input}>
        <TextInput placeholder="enter your text" style={styles.inputField} />
        <Button title="add" color="#007bff" />
      </View>
      <View style={styles.output}>
        <Text>list of text...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 50,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  inputField: {
    flex: 0,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    width: "60%",
  },
  output: {
    flex: 3,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
