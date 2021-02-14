nginx ingress contorller

   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml

Secret and Config map:


DB:

Inside kube cluster:
    mysql-client
    kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword

    curl
    kubectl run -it --rm --image=curlimages/curl debug-cli -- sh  



Internal Services:


Ingress Service:


