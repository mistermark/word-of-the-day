#!/bin/bash

echo "> Getting all words"

curl 'http://localhost:8080/api/words' -XGET
