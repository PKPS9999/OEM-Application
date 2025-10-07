variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "oem-seller-rg"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "East US"
}

variable "acr_name" {
  description = "Name of the Azure Container Registry"
  type        = string
  default     = "oemselleracr"
}

variable "aks_cluster_name" {
  description = "Name of the AKS cluster"
  type        = string
  default     = "oem-seller-aks"
}

variable "aks_dns_prefix" {
  description = "DNS prefix for the AKS cluster"
  type        = string
  default     = "oemseller"
}

variable "kubernetes_version" {
  description = "Kubernetes version"
  type        = string
  default     = "1.27.3"
}

variable "node_count" {
  description = "Initial number of nodes"
  type        = number
  default     = 3
}

variable "node_vm_size" {
  description = "VM size for nodes"
  type        = string
  default     = "Standard_DS2_v2"
}

variable "sql_server_name" {
  description = "Name of the SQL Server"
  type        = string
  default     = "oem-seller-sql-server"
}

variable "sql_database_name" {
  description = "Name of the SQL Database"
  type        = string
  default     = "oem-seller-db"
}

variable "sql_admin_username" {
  description = "SQL Server admin username"
  type        = string
  default     = "sqladmin"
}

variable "sql_admin_password" {
  description = "SQL Server admin password"
  type        = string
  sensitive   = true
}

variable "redis_cache_name" {
  description = "Name of the Redis Cache"
  type        = string
  default     = "oem-seller-redis"
}

variable "key_vault_name" {
  description = "Name of the Key Vault"
  type        = string
  default     = "oem-seller-kv"
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
  default     = "oemsellerstorage"
}

variable "common_tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default = {
    Project     = "OEM Seller Platform"
    Environment = "Production"
    Owner       = "DevOps Team"
  }
}