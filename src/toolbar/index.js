import store from "../store";
import heading from "./heading";
import bold from "./bold";
import italic from "./italic";
import underline from "./underline";
import strikethrough from "./strikethrough";
import mark from "./mark";
import quote from "./quote";
import code from "./code";
import sup from "./sup";
import sub from "./sub";
import katex from "./katex";
import mermaid from "./mermaid";
import list from "./list";
import minus from "./minus";
import table from "./table";
import time from "./time";
import link from "./link";
import image from "./image";
import video from "./video";
import graff from "./graff";
import toLine from "./toLine";
import search from "./search";
import typewriter from "./typewriter";
import toc from "./toc";
import preview from "./preview";
import $switch from "./switch";
import edit from "./edit";
import storage from "./storage";
import other from "./other";
import setting from "./setting";

const all = {
  "|": {
    icon: "|"
  },
  ...heading,
  bold,
  italic,
  underline,
  strikethrough,
  mark,
  quote,
  code,
  sup,
  sub,
  ...katex,
  ...mermaid,
  ...list,
  minus,
  table,
  time,
  link,
  image,
  video,
  graff,
  toLine,
  search,
  typewriter,
  toc,
  ...preview,
  ...$switch,
  ...edit,
  ...storage,
  ...other,
  setting
};

const toolbar = [];

const selects = store.state.setting.aceSetting.toolbar.split(" ");

selects.forEach(item => {
  if (all[item]) {
    toolbar.push(all[item]);
  } else {
    console.warn(`Not toolbar item: ${item}`);
  }
});

export default toolbar;
