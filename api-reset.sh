#!/bin/bash

echo "> Cleaning up DB with samples"

curl "http://localhost:8080/api/reset" -X \
  POST -H "Content-Type: application/json" -d '{"reset": true, "sample": true}'
