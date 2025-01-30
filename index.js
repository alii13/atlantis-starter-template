#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set your template repository
const repoUrl = "https://github.com/alii13/atlantis-starter-template.git";

// Function to prompt user input
const askQuestion = (query, isPassword = false) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true
    });

    if (isPassword) {
      rl.stdoutMuted = true;
      rl._writeToOutput = function _writeToOutput() {
        rl.output.write("*");
      };
    }

    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

const init = async () => {
  const projectName = process.argv[2];
  if (!projectName) {
    console.error("❌ Please specify a project name: `atlantis-starter-template <project-name>`");
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  try {
    console.log("🚀 Cloning template repository...");
    execSync(`git clone --depth 1 ${repoUrl} ${projectPath}`, { stdio: "inherit" });

    console.log("📁 Changing directory...");
    process.chdir(projectPath);

    // Remove `.git` folder so the new project is clean
    execSync("rm -rf .git");

    // 🛑 Remove `bin` field from package.json inside the template
    const packageJsonPath = path.join(projectPath, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
      delete packageJson.bin; // Remove bin field
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log("🗑 Removed `bin` field from package.json in the new project.");
    }

    // 🗑 Remove `index.js` from the new project
    const indexFilePath = path.join(projectPath, "index.js");
    if (fs.existsSync(indexFilePath)) {
      fs.unlinkSync(indexFilePath);
      console.log("🗑 Removed `index.js` from the new project.");
    }

    // Ask for GitHub Personal Access Token (PAT)
    console.log("\n🔑 Enter your GitHub classic PAT (for private package access): ");
    const githubToken = await askQuestion("\n🔑 Enter your GitHub classic PAT (for private package access): ", true);

    if (githubToken) {
      console.log("📜 Creating .npmrc file...");
      const npmrcContent = `
@atlanhq:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${githubToken}
always-auth=true
auto-install-peers=true
ignore-workspace-root-check=true
`;
      fs.writeFileSync(".npmrc", npmrcContent);
      console.log("✅ .npmrc file created successfully.");
    } else {
      console.log("⚠ No token provided. Private package installation might fail.");
    }

    console.log("📦 Installing dependencies using pnpm...");
    try {
      execSync("pnpm install", { stdio: "inherit" });
      console.log("✅ Dependencies installed successfully.");
    } catch (error) {
      console.log("⚠ Dependency installation failed. You may need to run this manually:");
      console.log("   pnpm install");
    }

    console.log("📦 Installing @atlanhq/atlan-design-system@1.0.1-rc.20250120060655 using pnpm...");
    try {
      execSync("pnpm add @atlanhq/atlan-design-system@1.0.1-rc.20250120060655", { stdio: "inherit" });
      console.log("✅ Private package installed successfully.");
    } catch (error) {
      console.log("⚠ Private package installation failed. You may need to run this manually:");
      console.log("   pnpm add @atlanhq/atlan-design-system");
    }

    console.log("\n✅ Project setup complete! Run the following to start working:");
    console.log(`   cd ${projectName}`);
    console.log("   pnpm run dev");
    console.log("\n🚀 Happy coding!");

  } catch (error) {
    console.error("❌ Error setting up the project:", error.message);
  }
};

init();
