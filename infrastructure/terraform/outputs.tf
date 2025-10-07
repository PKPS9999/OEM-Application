output "resource_group_name" {
  description = "Name of the resource group"
  value       = azurerm_resource_group.main.name
}

output "acr_login_server" {
  description = "Login server for Azure Container Registry"
  value       = azurerm_container_registry.main.login_server
}

output "aks_cluster_name" {
  description = "Name of the AKS cluster"
  value       = azurerm_kubernetes_cluster.main.name
}

output "sql_server_fqdn" {
  description = "FQDN of the SQL Server"
  value       = azurerm_mssql_server.main.fully_qualified_domain_name
  sensitive   = true
}

output "redis_hostname" {
  description = "Hostname of the Redis Cache"
  value       = azurerm_redis_cache.main.hostname
  sensitive   = true
}

output "key_vault_uri" {
  description = "URI of the Key Vault"
  value       = azurerm_key_vault.main.vault_uri
}