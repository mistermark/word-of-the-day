#!/bin/bash

echo "> Removing single word, with ID: $1"

curl "http://localhost:8080/api/words/$1" -X DELETE
