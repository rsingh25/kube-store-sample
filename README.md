## Pre-requisite to use of "Docker for Desktop"

1. nginx ingress contorller

   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml

2. Postgres intalled on the local server

## Trouble shooting:

    kubectl run -it --rm --image=curlimages/curl debug-cli -- sh

Running the dev env using skaffold and nodemon

1. To be completed.
