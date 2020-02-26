import store from "../store";

export default {
  title: "时间",
  operate: "time",
  icon: "clock",
  hander() {
    store.actions.insertTextToAce(
      {
        left: new Date().toLocaleString(),
        right: ""
      },
      false
    );
  }
};
