variable "project_name" {
  description = "Base name used for the Vercel project."
  type        = string
  default     = "ai-future-presentation"
}

variable "environment" {
  description = "Environment label used in the Vercel project name. Leave empty to use project_name only."
  type        = string
  default     = "prod"
}

variable "vercel_api_token" {
  description = "Vercel API token. Prefer TF_VAR_vercel_api_token."
  type        = string
  sensitive   = true
  nullable    = false
}

variable "vercel_team_id" {
  description = "Optional Vercel team ID or slug. Leave null for a personal account."
  type        = string
  default     = null
}

variable "vercel_project_name" {
  description = "Vercel project name. Defaults to project_name-environment."
  type        = string
  default     = null
}

variable "github_repository" {
  description = "GitHub repository in owner/name format. Leave null to create an unlinked Vercel project."
  type        = string
  default     = null
}

variable "root_directory" {
  description = "Root directory used by Vercel when the GitHub repository contains this app in a subdirectory. Leave null when the app is at the repository root."
  type        = string
  default     = null
  nullable    = true
}

variable "notion_url" {
  description = "Public Notion research page linked from the presentation."
  type        = string
  default     = "https://www.notion.so/361664d8d92c815d8eb0ed83d3ff71b4"
}

variable "vercel_environment_targets" {
  description = "Vercel environments that receive app environment variables."
  type        = set(string)
  default     = ["production", "preview"]

  validation {
    condition     = alltrue([for target in var.vercel_environment_targets : contains(["production", "preview", "development"], target)])
    error_message = "Targets must be one of production, preview, or development."
  }
}
