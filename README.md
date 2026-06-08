# KT Global BD — Skills & Deliverables (KT × VNPT/MyTV)

KT Global BD의 **Claude 스킬·빌드 스크립트·산출물 템플릿**을 버전관리하는 리포지토리입니다.
세션 초기화로 인한 유실을 방지하고, 변경 이력·리뷰(PR)·재현 가능한 배포를 제공합니다.

## 구조
- `skills/` — Claude 스킬 (각 폴더 = 1 스킬, `SKILL.md` + `reference/`)
- `build-scripts/` — 산출물 생성 스크립트 (`.py` openpyxl/docx, `.js` docx/pptx)
- `deliverables/templates/` — 견적·정산·결정팩 템플릿 (**ILLUSTRATIVE·placeholder만**)
- `deliverables/responses/` — VNPT 제출 문서 (예: RFI #6 Annex C)
- `docs/` — 워크플로우·가이드
- `.github/workflows/` — CI 검증(스킬 무결성)

## 스킬 목록
| 스킬 | 버전 | 설명 |
|---|---|---|
| `l3-bd-si-pmo-control-tower` | v1.5 | SI/PMO 컨트롤타워 (12관리요소×5단계·정산 무결성·물류/AS/SLA·베트남 법무) |
| `l0-bd-orchestrator` | v2.5 | BD 스킬 마스터 오케스트레이터 (24개 agent 카탈로그) |

## 사용법
```bash
git clone <repo-url> && cd <repo>
# 스킬 수정 → 커밋 → PR (docs/WORKFLOW.md 참조)
# 산출물 재생성:  NODE_PATH=$(npm root -g) node build-scripts/build_annexc.js
#                pip install openpyxl --break-system-packages && python build-scripts/build_settle.py
```
스킬 배포(설치): 해당 스킬 폴더를 `/mnt/skills/user/<skill>/`에 두면 Claude가 인식합니다(폴더명 소문자, `reference/` 유지).

## ⚠️ 기밀 원칙 (필독)
- 이 리포는 **private**로 운영합니다.
- **실제 OEM 원가·VNPT 가격·MG·NDA/계약 수치를 커밋 금지.** 모든 금액·세율·SLA 수치는 **placeholder([ ])** 로 유지합니다.
- 실데이터가 필요한 산출물은 로컬/거버넌스 저장소에서 다루고, 리포에는 템플릿(구조)만 둡니다.
- Notion(SSOT)은 결정·추적, 이 리포는 코드·문서 버전관리 — 상호 보완.
