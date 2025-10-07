# Kubernetes Manifests

This directory contains Kubernetes deployment manifests for the OEM Seller Platform.

## Files

- `namespace.yaml` - Creates the oem-seller namespace
- `configmap.yaml` - Application configuration
- `secret.yaml` - Sensitive configuration (update with real values)
- `*-deployment.yaml` - Service deployments
- `*-service.yaml` - Kubernetes services
- `ingress.yaml` - Ingress configuration
- `hpa.yaml` - Horizontal Pod Autoscaler

## Deployment

1. Apply namespace:
   ```bash
   kubectl apply -f namespace.yaml
   ```

2. Apply configs and secrets:
   ```bash
   kubectl apply -f configmap.yaml
   kubectl apply -f secret.yaml
   ```

3. Apply all deployments:
   ```bash
   kubectl apply -f .
   ```

## Notes

- Update the secret.yaml with properly base64-encoded values
- Update ingress.yaml with your actual domain
- Ensure your AKS cluster has an ingress controller installed
