
#encoding=utf-8

import sys
import json
import custom

def main(argv):
	global settings
	def getAllCommand(text,param):
		global settings
		commands=[]
		for i in custom.settings:
			commands.append(i)
		print(json.dumps({"res":8000,"data":commands}))
	custom.settings["getAllCommand"]=getAllCommand
	custom.customFunction()

	text=argv[0]
	command=argv[1].split()
	try:
		custom.settings[command[0]](text,command[1:])
	except:
		print(json.dumps({"res":-1}))


if __name__ == '__main__':
	if len(sys.argv) < 3:
		sys.exit(1)
	main(sys.argv[1:])


