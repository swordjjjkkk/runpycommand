// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { execFile } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('extpy.runpycommand', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInputBox(
		{
			placeHolder:'请输入函数名' // 在输入框内的提示信息
		}).then(function(msg){

			let activeEditor = vscode.window.activeTextEditor;
			let text=activeEditor!.document.getText(activeEditor!.selection);

            console.log("用户输入："+msg);
            console.log("用户选择："+text);

			const child=execFile("python",[__dirname+"\\script.py",msg!,text!],(error: any,stdout: any,stderr: any)=>{
				console.log(error);
				console.log(stdout);
				console.log(stderr);
				activeEditor!.edit(editBuilder => {
						editBuilder.replace(activeEditor!.selection, stdout);
				});
			});
			

        });
	});

	let disposable2 = vscode.commands.registerCommand('extpy.openpyfile', () => {
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
