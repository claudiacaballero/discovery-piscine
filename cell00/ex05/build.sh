#!/bin/bash
if (( $# > 0 ))
then
	for i; do
		mkdir "ex${i}"
	done
else
	echo "No arguments supplied"
fi
