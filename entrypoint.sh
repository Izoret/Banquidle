#!/bin/bash

set -eu

bin/rails db:schema:load
bin/rails db:seed
bin/rails server -b 0.0.0.0

