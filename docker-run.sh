#!/bin/bash
containerName=docker-question-2-api
docker run -itd -p "8070:8000" --name=$containerName --hostname=$containerName henriqueyun/api-2-question:latest
docker network connect --alias $containerName docker_default $containerName 