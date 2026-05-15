# Terraform Vercel 배포 구성

이 디렉터리는 발표 자료 Next 앱을 Vercel 프로젝트로 만들고, GitHub 저장소와 연결하는 Terraform 구성입니다.

## 관리 범위

- Vercel 프로젝트 생성
- Next.js 프레임워크 지정
- GitHub repository 연결
- monorepo 또는 하위 폴더 배포를 위한 `root_directory` 지정
- 발표 자료의 Notion 링크를 `NEXT_PUBLIC_NOTION_URL` 환경변수로 주입

Supabase, DB, 서버 비밀값은 이 자료 앱에 필요하지 않아 제외했습니다.

## 실행

```powershell
cd "C:\Users\lsm\develop\doc\ai_lecture_refresh\next-presentation\infra\terraform"
Copy-Item terraform.tfvars.example terraform.tfvars
```

`terraform.tfvars`에서 `github_repository`, `root_directory`, `vercel_team_id`를 실제 배포 위치에 맞게 조정합니다.

민감값은 파일에 남기지 않는 편이 좋습니다.

```powershell
$env:TF_VAR_vercel_api_token = "..."
terraform init
terraform plan -var-file=terraform.tfvars
terraform apply -var-file=terraform.tfvars
```

## 주의

- 이 구성은 프로젝트 생성과 Git 연동까지 담당합니다. 실제 배포는 Vercel이 GitHub push를 감지해서 실행합니다.
- 앱이 저장소 루트에 있다면 `root_directory`는 현재 경로에 맞게 조정해야 합니다.
- `terraform.tfstate`에는 프로젝트 정보가 들어가므로 Git에 올리지 마세요.
