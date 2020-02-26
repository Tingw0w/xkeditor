import store from "../store";

export default {
  "tex-$": {
    title: "添加行内公式",
    operate: "tex-$",
    icon: "dollar-sign",
    hander() {
      store.actions.insertTextToAce(
        {
          left: "$$",
          right: "$$"
        },
        false,
        2
      );
    }
  },
  "tex-math": {
    title: "添加块公式",
    operate: "tex-math",
    icon: "divide",
    hander() {
      store.actions.insertTextToAce(
        {
          replace: "```math\n\n```"
        },
        true,
        4
      );
    }
  }
};
