import store from "../store";

export default {
  format: {
    title: "格式化(美化)",
    operate: "format",
    icon: "atom",
    hander() {
      store.actions.execCommand("format");
    }
  },
  pasteFormat: {
    title: "粘贴转化",
    operate: "pasteFormat",
    icon: "paste",
    hander() {
      store.actions.execCommand("pasteFormat");
    }
  },
  empty: {
    title: "清空",
    operate: "empty",
    icon: "eraser",
    hander() {
      store.actions.execCommand("empty");
    }
  },
  undo: {
    title: "撤销",
    operate: "undo",
    icon: "undo",
    hander() {
      store.actions.execCommand("undo");
    }
  },
  redo: {
    title: "重做",
    operate: "redo",
    icon: "redo",
    hander() {
      store.actions.execCommand("redo");
    }
  }
};
