
#encoding=utf-8

import sys
import json
 
def main(argv):
	func=argv[0]
	text=argv[1]
	print(json.dumps({"data":text+func}))

if __name__ == '__main__':
	if len(sys.argv) < 3:
		sys.exit(1)
	main(sys.argv[1:])