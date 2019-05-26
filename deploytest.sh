#!/usr/bin/env bash
# #!/bin/bash
sudo rm -rf dist
# build the /dist for public url
sudo parcel build index.html --public-url http://62.78.181.155:10080/scanner/dist
