import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
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
  }
});

export default styles;
