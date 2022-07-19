import * as carbone from "carbone";
import * as path from "path";
import { writeFileSync } from "fs";

const data = { firstname: "John", lastname: "Doe" };

carbone.render(
  path.join(__dirname, "templates", "template.docx"),
  data,
  { convertTo: "pdf" },
  function (error, result) {
    if (error) {
      return console.error(error);
    }
    writeFileSync("docx.pdf", result);
  }
);
