import store from "../store";

export default {
  title: "设置",
  operate: "setting",
  icon: "cog",
  hander() {
    store.actions.execCommand("setting");
  }
};
