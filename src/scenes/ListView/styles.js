import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  listItem: {
    borderBottomWidth: 0,
    paddingTop: 5,
    paddingBottom: 5,
  }
});

export default styles;
