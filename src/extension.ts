// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import { execFile } from 'child_process';
import { PythonShell } from 'python-shell';

// your extension is activated the very first time the command is executed
function runPyCommand(vsctx: vscode.ExtensionContext,text:string,command:string)
{

	let activeEditor = vscode.window.activeTextEditor;
	let options={
		// mode:'text',
		// pythonPath:'python',
		pythonOptions:['-u'],
		scriptPath:__dirname,
		args:[text,command!]
	};
	try
	{
		PythonShell.run("script.py",options,function(err,results){
			if(err)
			{
				vscode.window.showInformationMessage("RunPyCommand: script.py crashed , please check your code!! ");
				console.log(err);
			}
			let res=JSON.parse(results![0]);
			if(res["res"]===0)
			{
				console.log(res);
				activeEditor!.edit(editBuilder => {
					if (activeEditor!.selection.isEmpty)
					{
						editBuilder.insert(activeEditor!.selection.active,res["data"]);
					}
					else
					{
						editBuilder.replace(activeEditor!.selection, res["data"]);
					}
				});
			}
			else if(res["res"]===8000)
			{
				console.log(res);
				for(let i=0;i<res["data"].length;i++)
				{
					let tmp = vscode.commands.registerCommand('extpy.'+res["data"][i], () => {
						let activeEditor = vscode.window.activeTextEditor;
						let text=activeEditor!.document.getText(activeEditor!.selection);
						runPyCommand(vsctx,text,res["data"][i]);
					});
					vsctx.subscriptions.push(tmp);
				}

			}
			else if(res["res"]===-1)
			{
				vscode.window.showInformationMessage("RunPyCommand: script.py run command failed , please check your code!! ");
			}
			else
			{
				console.log("python run result wrong!!");
				vscode.window.showInformationMessage("RunPyCommand: script.py command did't print res:0 ");
			}
		});
	}
	catch(err)
	{
		vscode.window.showInformationMessage("RunPyCommand:got some error.but it's ok! don't be afraid! ");
	}
}

export function activate(context: vscode.ExtensionContext) {
	runPyCommand(context,"","getAllCommand");
	let disposable = vscode.commands.registerCommand('extpy.runpycommand', () => {
		vscode.window.showInputBox(
		{
			placeHolder:'Input Command' // 在输入框内的提示信息
		}).then(function(msg){
			let activeEditor = vscode.window.activeTextEditor;
			let text=activeEditor!.document.getText(activeEditor!.selection);
			runPyCommand(context,text,msg!);
        });
	});

	let disposable2 = vscode.commands.registerCommand('extpy.openpyfile', () => {
		vscode.window.showTextDocument(vscode.Uri.file(__dirname+"/custom.py"));
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

export function deactivate() {}
