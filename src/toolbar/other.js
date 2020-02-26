import store from "../store";

export default {
  help: {
    title: "帮助",
    operate: "help",
    icon: "question-circle",
    hander() {
      store.state.toolbarModal = this;
    },
    submit() {
      store.state.toolbarModal = false;
    },
    cancel() {
      store.state.toolbarModal = false;
    }
  },
  info: {
    title: "关于",
    operate: "info",
    icon: "info-circle",
    hander() {
      store.state.toolbarModal = this;
    },
    submit() {
      store.state.toolbarModal = false;
    },
    cancel() {
      store.state.toolbarModal = false;
    }
  }
};
