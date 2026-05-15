locals {
  resource_suffix     = var.environment == "" ? var.project_name : "${var.project_name}-${var.environment}"
  vercel_project_name = coalesce(var.vercel_project_name, local.resource_suffix)

  vercel_environment_variables = [
    {
      key       = "NEXT_PUBLIC_NOTION_URL"
      value     = var.notion_url
      target    = var.vercel_environment_targets
      sensitive = false
      comment   = "Research note linked from the presentation."
    }
  ]
}

resource "vercel_project" "app" {
  name      = local.vercel_project_name
  framework = "nextjs"
  team_id   = var.vercel_team_id

  root_directory = var.root_directory

  git_repository = var.github_repository == null ? null : {
    type = "github"
    repo = var.github_repository
  }

  environment = local.vercel_environment_variables
}
