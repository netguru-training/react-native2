import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
    minHeight: Dimensions.get("window").height / 2,
  },
  inputBox: {
    width: Dimensions.get("window").width - 30,
    marginLeft: 15,
  },
  input: {
    width: Dimensions.get("window").width,
  },
  descBox: {
    flex: 1,
    flexDirection: "column",
    height: 300,
    width: Dimensions.get("window").width - 30,
    marginLeft: 15,
    paddingLeft: 0,
    borderRadius: 4,
  },
  labelDesc: {
    paddingTop: 30,
    paddingBottom: 15,
    marginLeft: 15,
    color: "#575757",
    width: Dimensions.get("window").width - 30,
  },
  inputDesc: {
    flex: 1,
    height: 300,
    paddingLeft: 15,
    width: "100%",
  },
  button: {
    marginTop: 30,
    width: Dimensions.get("window").width - 30,
    marginLeft: 15,
  },
  buttonText: {
    width: Dimensions.get("window").width - 30,
    textAlign: "center"
  }
});

export default styles;
