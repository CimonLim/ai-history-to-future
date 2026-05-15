output "vercel_project_id" {
  description = "Vercel project ID."
  value       = vercel_project.app.id
}

output "vercel_project_name" {
  description = "Vercel project name."
  value       = vercel_project.app.name
}

output "vercel_root_directory" {
  description = "Vercel root directory configured for this app."
  value       = var.root_directory
}
