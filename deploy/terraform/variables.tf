#
# Huawei Cloud Configuration
#
variable "access_key" {
  description = "Huawei Cloud - IAM Access Key"
  type        = string
}

variable "secret_key" {
  description = "Huawei Cloud - IAM Secret Key"
  type        = string
}

variable "region" {
  description = "Huawei Cloud - Region"
  type        = string
  default     = "ap-southeast-2"
}

#
# Project Information
#
variable "project_id" {
  description = "Project ID"
  type        = string
  default     = "gsb-pdpa"
}

variable "envname" {
  description = "Environment Name"
  type        = string
  default     = "demo"
}
