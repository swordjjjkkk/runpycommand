# Advanced Replacer (VSCode Extension)
Replace selections by python script.

Only two command export.

OpenPyFile    //edit custom command

RunPyCommand  //run custom command

# USAGE EXAMPLE

### step1:
run OpenPyFile command ,it will open custom.py automaticly.

In this file,two example command exist.

you can make your own command like this way. (@addCommand+function)

param text is selected text.  print means return value. res:0 is necessary. data is replace value.

运行OpenPyFile命令即可自动打开custom.py文件

在这个文件中，按照我给出的例子可以添加任意多的自定义命令

只需要对着例子照猫画虎写一个命令即可，格式就是 @addCommand+function

其中参数text是选中的文本，最后的print是返回值的意思，data就是最终要替换的文本内容。


![输入图片说明](https://images.gitee.com/uploads/images/2021/1104/230822_1831368f_8116542.png "屏幕截图.png")

### step2:
in editor, select some text(if you don't select any text,it will insert text that returned by @addCommand function not replace)

run RunPyCommand command,then input the function name you define in custom.py(for example, "example" or "str2hex")

if you type str2hex , it will replace the selectd text like AABBCCDD==>0xAA,0xBB,0xCC,0xDD,

anyway , you can replace the text whatever you like.

it's easy to add a command,and python is powerful to deal with text string.you don't even need to restart vscode to run your python script.

Enjoy it.

选中一些文本(如果不选中任何文本的话会将@addCommand函数返回的data内容插入到当前光标位置)

然后运行RunPyCommand命令，他会提示输入命令，这个命令就是定义的函数名称,比如自带的"example" 或 "str2hex"

如果你输入的str2hex，那他就会把选中的文本 比如 AABBCCDD变为 0xAA,0xBB,0xCC,0xDD,

总之你可以把选中的文本替换为任何你想要的.

添加一条命令是如此的简单，你甚至不需要重启vscode。便可以输入一个函数名去执行你的python脚本。

使用愉快！



![输入图片说明](https://images.gitee.com/uploads/images/2021/1104/233920_95fbe3b4_8116542.gif "atp1b-mghmn.gif")

## Advanced Topic

if you use some command frequently,you can make keyboard shortcut.

every command you defined in custom.py will automatictly register to vscode command.

the format is advancedreplacer.functionname,but new command need vscode restart to work.(via RunPyCommand run python doesn't need restart vscode)

如果你对一些命令使用很频繁，可以将其设置为快捷键，每一个你在custom.py定义的函数都会自动注册成为vscode的命令。

命令的格式是 advancedreplacer.函数名称 ，但是新添加的命令需要重启vscode才会生效。（通过RunPyCommand输入命令是不需要重启vscode的）


## License

MIT License.