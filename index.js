#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoUrl = "https://github.com/alii13/atlantis-starter-template.git";

const init = async () => {
  const projectName = process.argv[2];
  if (!projectName) {
    console.error("Please specify a project name: `atlantis-starter-template <project-name>`");
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  try {
    console.log("Cloning repository...");
    execSync(`git clone ${repoUrl} ${projectPath}`, { stdio: "inherit" });

    console.log("Installing dependencies...");
    execSync(`cd ${projectPath} && npm install`, { stdio: "inherit" });

    console.log("Project is ready!");
  } catch (error) {
    console.error("Error setting up the project:", error.message);
  }
};

init();
