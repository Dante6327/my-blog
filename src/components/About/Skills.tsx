import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="text-xs">
        <b className="font-semibold">Framework</b> : React, Svelte, TypeScript,
        C#, Next.js
      </p>
      <p className="text-xs">
        <b className="font-semibold">Library</b> : Styled-components, SASS,
        Recoil, tailwindCSS
      </p>
      <p className="text-xs">
        <b className="font-semibold">Management</b> : Git, Github, Trello,
        redmine
      </p>
      <p className="text-xs">
        <b className="font-semibold">Convention</b> : Prettier, ESLint
      </p>
      <p className="text-xs">
        <b className="font-semibold">Others...</b> : Slack, Notion, Postman, AWS
        S3, Fiddler
      </p>
    </div>
  );
};

export default Skills;
