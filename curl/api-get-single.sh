#!/bin/bash

echo "> Getting single word: $1"

curl "http://localhost:8080/api/words/$1" -XGET
