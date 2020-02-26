import store from "../store";

export default {
  title: "粗体",
  operate: "bold",
  icon: "bold",
  hander() {
    store.actions.insertTextToAce(
      {
        left: "**",
        right: "**"
      },
      false,
      2
    );
  }
};
