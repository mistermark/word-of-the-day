#!/bin/bash

echo "> Set current active rotation round"

curl "http://localhost:8080/api/settings" -X \
  GET -H "Content-Type: application/json"
