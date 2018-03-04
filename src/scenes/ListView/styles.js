import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: '#2096f3',
  },
  listItem: {
    borderBottomWidth: 0,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#2096f3',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  listText: {
    paddingTop: 10,
    paddingBottom: 10,
    color: "white"
  },
  taskButton: {
    flex: 1,
    borderRadius: 0,
    height: "100%",
  },
  taskButtonDone: {
    flex: 1,
    borderRadius: 0,
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
  rightHiddenRow: {
    flex: 1,
    flexDirection: "row",
    margin: 0,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  }
});

export default styles;
