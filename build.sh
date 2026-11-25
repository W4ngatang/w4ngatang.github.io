#!/usr/bin/env bash
# Cloudflare runs this as the build command, so each branch decides how it builds.
set -euo pipefail
npm ci
npm run build
