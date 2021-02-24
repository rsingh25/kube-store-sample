# create namespace
kubectl apply -f ./k8s/dev-namespace.yaml

namespace=store-dev

# create config map and secrets
kubectl apply -f ./k8s/store-configmap.yaml -n $namespace

# create cart def
kubectl apply -f ./k8s/cart-def.yaml -n $namespace

# create inventory def
kubectl apply -f ./k8s/inventory-def.yaml -n $namespace

# create ingress service
kubectl apply -f ./k8s/store.yaml  -n $namespace
