import { useContext } from "react";
const translate = require("translate-google");
const tranObj = {
  a: 1,
  b: "1",
  c: "How are you?\nI'm nice.",
  d: [true, "true", "hi", { a: "hello", b: ["world"] }],
};

translate(tranObj, { to: "zh-cn", except: ["a"] })
  .then((res) => {
    res.send(console.log(res));
  })
  .catch((err) => {
    console.error(err);
  });
