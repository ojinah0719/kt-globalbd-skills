# Deliverable Management SOP — 산출물 등록·관리 (1-page)

PMO가 프로젝트 전 산출물을 **체계적으로 등록·통제**하기 위한 표준 절차입니다.
운영 도구는 **Document Management Master (.xlsx)** — `Dashboard / Register / Change_Log / Conventions` 4탭.

## 0. 원칙
- **SSOT(단일 기준):** 모든 산출물은 **Register 탭 1행**으로 관리한다.
- **"등록되지 않은 산출물은 존재하지 않는다."** 공유·보고 전 반드시 등록.
- 산출물 → 요구사항(RTM) → 결정(Decision Log) → **계약**으로 추적 가능해야 한다.

## 1. 마스터 레지스터 (SSOT)
- 위치: `Document Management Master.xlsx` → **Register** 탭 (PMO가 소유).
- 1행 = 1산출물. 열: ID·명칭·단계·Phase·유형·작성(R)·승인(A)·버전·상태·기밀등급·등록일·승인일·**저장위치 링크**·연계 RTM·연계 DEC·supersedes·비고.
- **Dashboard**가 상태·Phase·기밀 건수를 자동 집계(수식). 신규 행 추가 시 자동 갱신.

## 2. ID · 버전 · 파일명
- **ID:** `DEL-###` 순번(예: DEL-001). 단계 한정 시 `S07-DEL-01`. ID 재사용 금지 — 폐기본은 ID 유지 + 상태 `Superseded`.
- **버전:** `v0.x`=초안/검토 → **`v1.0`=승인·baseline**. 수정=minor↑, 재baseline=major↑.
- **파일명:** `KTxVNPT_WS1_<산출물명>_v<버전>_<YYYYMMDD>_<기밀등급>.<ext>`
  - 예: `KTxVNPT_WS1_BriefingDeck_v0.1_20260606_Confidential.pptx`

## 3. 상태 워크플로우 (Stage-Gate 연동)
`Drafting → In review → Approved → Baselined → (Superseded)`
- 승인은 **각 Stage-Gate에서 게이트**: 해당 단계 산출물이 **Approved**여야 다음 단계로 진행(`project-lifecycle.md` Exit 조건).
- 모든 버전 변경은 **Change_Log**에 기록(일자·ID·버전·변경내용·작성·승인).

## 4. 기밀등급
`Public / Internal / Confidential(NDA 대상) / Restricted(상용·법무: 가격·MG·계약·개인정보)`
- 파일명·Register에 등급 표기. Confidential 이상은 NDA 적용 사실 명시.

## 5. 폴더 구조 (Teams / SharePoint)
레지스터=색인, 실제 파일은 단계별 폴더에 보관 후 각 행이 링크.
`/00_PMO · /01_Proposal · /02_Consulting · /03_Requirements · /04_Design · /05_Legal · /06_Cert · /07_Test · /08_Pilot_Commercial`

## 6. 역할
- **Document Controller = PMO** (레지스터 소유·통제).
- **Author(R)** 작성 · **Approver(A)** 게이트에서 승인 · 전원 공유 전 등록.

## 7. 등록 절차 (매 산출물)
1) 생성 → 2) 명명 규칙대로 파일명 → 3) **Register에 행 추가(Drafting)** → 4) 해당 폴더에 저장 + 링크 붙여넣기 → 5) 검토(In review) → 6) **게이트에서 승인/Baseline** → 7) Change_Log 기록 → 8) 구버전 있으면 Superseded 처리.

## 8. 거버넌스·추적
- Register는 **매 회의·Stage-Gate의 표준 점검 항목**(`meeting-governance.md`).
- 각 산출물의 연계 RTM·DEC를 통해 **계약 조항까지 추적**(Contract Traceability).
- 운영은 본 스킬 **모드 C(상시 PM)**: 신규/변경 산출물 발생 시 Register·Change_Log·Decision Log를 갱신하고 단계 게이트를 점검.
