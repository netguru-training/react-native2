import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
  swipeout: {
    width: Dimensions.get("window").width - 30,
    margin: 0,
    padding: 0,
  },
  container: {
    padding: 15,
  },
});

export default styles;
