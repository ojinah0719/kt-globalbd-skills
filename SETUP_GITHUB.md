# GitHub 최초 설정 (1회)

> 전제: GitHub에 **private** 리포지토리 생성(예: `kt-globalbd-skills`).

```bash
cd <이 폴더>
git init
git add .
git commit -m "chore: initial import — PMO v1.5, orchestrator v2.5, build scripts, templates"
git branch -M main
git remote add origin https://github.com/<org-or-user>/kt-globalbd-skills.git
git push -u origin main
# 첫 태그
git tag pmo-v1.5 && git tag orchestrator-v2.5 && git push --tags
```

이후에는 Claude 설정 → **Connectors → GitHub** 연결 시,
이 대화에서 "리포 읽어줘 / 브랜치 만들어 커밋·PR 해줘" 등을 바로 수행할 수 있습니다.

## 주의
- **private 리포** 사용, 실제 원가·가격·MG 커밋 금지(`.gitignore`·README 참조).
- 사내 GitHub Enterprise를 쓰면 remote URL을 사내 호스트로 교체.
