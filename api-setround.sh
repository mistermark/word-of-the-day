#!/bin/bash

echo "> Set current active rotation round"

curl "http://localhost:8080/api/settings" -X \
  PUT -H "Content-Type: application/json" -d '{"round": 0}'
