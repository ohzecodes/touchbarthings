"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  const runCode = vscode.commands.registerCommand("extension.runCode", () => {
    vscode.commands.executeCommand("code-runner.run");
  });

  const buildCode = vscode.commands.registerCommand(
    "extension.buildCode",
    () => {
      vscode.commands.executeCommand("workbench.action.tasks.build");
    }
  );
  context.subscriptions.push(runCode, buildCode);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
