# 커밋·PR 협업 워크플로우

## 브랜치 전략
- `main` — 항상 배포 가능한 최신본 (직접 푸시 금지, PR로만)
- `feat/<주제>` — 기능·스킬 변경 (예: `feat/pmo-v1.6-sla`)
- `fix/<주제>` — 수정

## 변경 → 머지 흐름
1. 브랜치 생성: `git checkout -b feat/pmo-v1.6`
2. 변경 + **버전 일관성** 확인: `SKILL.md` frontmatter `version:` ↔ 설명문 `vX.Y` 일치
3. 커밋(메시지 규약): `type(scope): summary`
   - 예: `feat(pmo): add logistics-as-sla reference (v1.5)`
   - type = feat | fix | docs | refactor | chore
4. 푸시 → **Pull Request** 생성 → 리뷰어 지정
5. 리뷰 체크리스트(아래) 통과 → 머지 → `main`에 **태그**: `git tag pmo-v1.5 && git push --tags`

## PR 리뷰 체크리스트
- [ ] `SKILL.md` description ≤ 1024자 (등록 제약)
- [ ] frontmatter version ↔ 설명문 버전 표기 일치
- [ ] `reference/` 파일 누락 없음 (PMO=10개)
- [ ] 오케스트레이터 카탈로그 카운트·매핑 정합 (신규 스킬 등록 시)
- [ ] **실데이터(원가·가격·MG) 미포함** — placeholder만
- [ ] CI(validate) 통과

## 누가·언제·무엇을
| 역할 | 책임 |
|---|---|
| 작성자(KT BD) | 브랜치·변경·PR 생성, 버전·기밀 점검 |
| 리뷰어 | 체크리스트 검토·승인 |
| 머지 후 | `main` 태그 + 필요 시 `/mnt/skills/user/`에 배포 |

> Claude에게 "이 변경을 `feat/...` 브랜치로 커밋하고 PR 올려줘"라고 요청하면(GitHub 연결 시) 위 흐름을 대신 수행할 수 있습니다.
