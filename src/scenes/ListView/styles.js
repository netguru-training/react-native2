import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    padding: 0,
    left: -15,
  },
  listItem: {
    borderBottomWidth: 0,
    paddingTop: 5,
    paddingBottom: 5,
  }
});

export default styles;
