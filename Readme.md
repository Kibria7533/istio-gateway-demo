# Istio Gateway

## Resources
- [YouTube: Istio Gateway](https://www.youtube.com/watch?v=kVGFB83rHRA&list=PLI4xy7phW54nbfjf7ZMnlEx1O5cHneigh&index=5)

## My Review
- We need to install `Gateway` and `VirtualService` in the `istio-system` namespace.
- We have to create a certificate in the `istio-system` namespace.
- The certificate will create a secret in the `istio-system` namespace.
- We can point services from another namespace.
- For Istio Gateway SSL, when creating `ClusterIssuer`, we have to use the class `istio`.



# for registry password
```
sudo apt-get update
sudo apt-get install apache2-utils

htpasswd -Bc htpasswd registryuser

kubectl create secret generic registry-basic-auth \
  --from-file=htpasswd=./htpasswd
```


# For argocd run 
``` kubectl apply -k ./ -n argocd --wait=true```

``` kubectl apply -f argocdgateway.yaml ```