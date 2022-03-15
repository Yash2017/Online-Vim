import React from "react";

import { paraStyle, linkStyle } from "../styles/tailwindStyles";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className={`${paraStyle} text-justify`}>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-4/5 px-2">
          <p className="m-2">
            List of commands. Please check the source for more commands
          </p>
          <p className="m-2">
            Use<code className="font-bold"> h </code>,{" "}
            <code className="font-bold">j </code>,{" "}
            <code className="font-bold">k </code>and{" "}
            <code className="font-bold">l</code> to move around in the text
            editor. Use <code className="font-bold"> w </code>to move forward by
            word and <code className="font-bold"> b </code>to move backwards.
          </p>
          <p className="m-2">
            Use <code className="font-bold">yy</code> to yank a link ,{" "}
            <code className="font-bold">yw</code> to yank a word,
            <code className="font-bold"> y$ </code>to yank to the end of the
            line from the cursor,<code className="font-bold"> p</code> to paste
            after cursor and<code className="font-bold"> P </code>to paste
            before the cursor.
          </p>
          <p>
            <span />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
