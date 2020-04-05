all: build

default: build

build:
	cd web && rm -rf dist && yarn && yarn run build
	go build

help:
    @echo "make: compile packages and dependencies"
    @echo "make clean: remove object files and cached files"
	
.PHONY: default install test