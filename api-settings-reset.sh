#!/bin/bash

curl "http://localhost:8080/api/settings/reset" -X \
  POST -H "Content-Type: application/json" -d '{"reset": true}'
