#!/bin/bash

set -eu

until bin/rails db:version 2>/dev/null; do
  >&2 echo "Waiting for database..."
  sleep 1
done

bin/rails db:drop
bin/rails db:schema:load
bin/rails db:seed

exec "$@"
