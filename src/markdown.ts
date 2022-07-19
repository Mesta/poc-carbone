import * as carbone from "carbone";
import * as path from "path";
import { writeFileSync } from "fs";

const data = { firstName: "John", lastName: "Doe" };

carbone.render(
  path.join(__dirname, "templates", "template.markdown"),
  data,
  { convertTo: "pdf" },
  function (error, result) {
    if (error) {
      return console.error(error);
    }
    writeFileSync("markdown.pdf", result);
  }
);
