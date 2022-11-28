build:
	cp ./src/htmlrpt.js ./lib/htmlrpt.js
	minify ./src/htmlrpt.js --outFile ./lib/htmlrpt.min.js
