import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 24,
  },
  button: {
    width: Dimensions.get("window").width - 30,
  },
  buttonText: {
    textAlign: "center",
    width: "100%",
  }
});

export default styles;
