import json

settings={}

def addCommand(fn):
	global settings
	settings[fn.__name__]=fn
	return

def customFunction():
	@addCommand
	def example1(text,param=None):
		print(json.dumps({"res":0,"data":text+"hello,world"}))
	@addCommand
	def str2hex(text,param=None):
		tmp=""
		a=0
		for i in text:
			if a==0:
				tmp+="0x"
			tmp+=i
			a+=1
			if a==2:
				tmp+=","
				a=0
		print(json.dumps({"res":0,"data":tmp}))