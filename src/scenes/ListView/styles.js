import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  list: {
    flex: 0.5,
    flexDirection: "column",
    width: "100%",
    margin: 0,
    minHeight: 0,
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
  },
  itemHeaders: {
    backgroundColor: "#2E2E3A",
    width: Dimensions.get("window").width,
  },
  itemHeadersText: {
    color: "#ffffff",
    textAlign: "center",
    width: Dimensions.get("window").width - 30,
  }
});

export default styles;
