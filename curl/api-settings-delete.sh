#!/bin/bash

echo "> Delete current setting(s)"

curl "http://localhost:8080/api/settings" -X \
  DELETE -H "Content-Type: application/json" -d '{"id": '"$1"'}'
