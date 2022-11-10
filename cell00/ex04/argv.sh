#!/bin/bash
if (( $# == 0 ))
then
	echo "No arguments supplied"
fi
if (( $# > 3 ))
then
	echo $1
	echo $2
	echo $3
else
	for i; do
		echo $i
	done
fi
