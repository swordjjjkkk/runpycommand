import json

settings={}

def addCommand(fn):
	global settings
	settings[fn.__name__]=fn
	return

def customFunction():
	@addCommand
	def example1(text,param=None):
		print(json.dumps({"res":0,"data":text+"hello"}))

	@addCommand
	def example2(text,param=None):
		print(json.dumps({"res":0,"data":text+"world"+param[0]}))

	@addCommand
	def str2hex(text,param=None):
		print(json.dumps({"res":0,"data":text+"str2hex"}))