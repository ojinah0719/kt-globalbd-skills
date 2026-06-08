# Build Guide — .docx / .xlsx 산출 절차

## 0. 원칙
- 산출 직전 **권위 있는 공개 스킬을 먼저 읽는다**: `.docx`는 `/mnt/skills/public/docx/SKILL.md`, `.xlsx`는 `/mnt/skills/public/xlsx/SKILL.md`. (본 가이드는 그 위에 KT 스타일·PMO 스키마를 더하는 보충 문서.)
- 작업은 `/home/claude/`에서 빌드 → 검증 → 최종본만 `/mnt/user-data/outputs/`로 복사 → `present_files`로 전달.
- 모든 금액·기간·M/M은 **"계획 추정치 + 가정"** 으로 표기(확정 견적 단정 금지).

-----

## 1. .docx — 통합 PMO Control Pack

### 빌드 방식 (KT 표준: Node.js `docx`, 모듈형)
1. `docx` 패키지는 전역 설치 사용: 실행은 항상 `NODE_PATH=$(npm root -g) node main.js`.
2. **모듈형 빌드:** 섹션(=관리요소)별 `part-XX.js`를 만들고 `main.js`에서 조립 → 특정 섹션만 수정·재빌드 가능.
   ```
   /home/claude/pack/
     main.js            # 문서 조립·스타일·헤더/푸터
     part-00-summary.js ... part-13-contract.js
     style.js           # KT 공통 스타일 헬퍼
   ```
3. 섹션 내용은 `reference/deliverable-templates.md`의 스키마/목차(§0)를 따른다.
4. 빌드 후 **시각 검증**: `soffice --headless --convert-to pdf main.docx` → `pdftoppm`로 1~2페이지 이미지 확인 → `pdfinfo`로 페이지 수 확인.
5. 통과 시 `/mnt/user-data/outputs/`로 복사.

### KT 스타일 사양 (style.js 반영)
- 폰트: **Malgun Gothic** (영문 혼용 시 가독 동일). 본문 10~11pt, 제목 위계 H1~H3.
- 용지: **A4 세로(portrait)**, 여백 표준.
- 페이지 **헤더**: `KT × VNPT/MyTV | PMO Control Pack`.
- 페이지 **푸터**: 좌측 `CONFIDENTIAL — KT Global Business Division`, 가운데 페이지 번호.
- **RAG 색상 표** (상태 셀 배경):
  - 정상/완료 = 초록 `D5E8D4`, 주의/진행 = 노랑 `FFF2CC`, 위험/지연 = 빨강 `F8CECC`.
  - 적용 대상: RAID 등급, 일정 상태, 인증 상태, RTM 상태.
- 강조: 핵심 메시지·의사결정 요청은 Callout(음영 박스). 비교·추적은 표, 단순 나열은 불릿(페이지당 표·박스 1~2개).
- 표 헤더 행: KT 블루 음영 + 굵게.

-----

## 2. .xlsx — 요소별 트래커

### 탭 구성 (워크북 1개, 탭별 트래커)
| 탭 | 내용 | 스키마 출처 |
|---|---|---|
| `RTM` | RFI 7항목 추적 | templates §1 |
| `WBS` | 작업분해·담당·일정 | templates §3 |
| `Milestones` | 마일스톤·게이트 | templates §3 |
| `Cost_BM` | 비용 항목·BM 비교 | templates §4 |
| `RACI` | 책임 배정 | templates §5 |
| `Deliverables` | 산출물·검수 | templates §6 |
| `RAID` | 리스크·이슈 로그 | templates §8 |
| `Cert_Roadmap` | 인증·규제 | templates §9 |

> 사용자가 "특정 요소 트래커"만 요청하면 해당 탭만 생성.

### 형식
- 1행: 컬럼 헤더(굵게·KT 블루 음영·고정/freeze panes), 자동 필터 적용.
- **조건부 서식(RAG):** 상태/등급 컬럼에 `완료/정상→초록`, `진행/주의→노랑`, `지연/High/Open→빨강`.
- 날짜는 `YYYY-MM-DD`, 금액은 통화·천단위 구분, M/M은 소수 1자리.
- 셀 주석으로 가정·전제 명시(특히 Cost_BM).

-----

## 3. 산출 옵션별 흐름
- **A (.docx만):** part 조립 → 빌드 → 시각검증 → outputs → present_files.
- **B (.xlsx만):** 탭 생성 → 조건부 서식 → outputs → present_files.
- **C (둘 다, 기본값):** A → B 순차 → `present_files`로 2개 동시 전달(가장 관련 높은 파일을 첫 번째 인자로).

-----

## 4. Citation 3-Tier 규약 (외부 사실에만 적용)

PMO 산출물은 다수가 내부 계획 문서이므로 **다음 외부 사실에만** 출처·Tier를 부착한다(규약 본체는 `L3-bd-kt-integrated-marketing-proposal`의 Bibliography Protocol 계승):

**부착 대상:** 규제·법령(PDPL 2025·Decree 356 등), 정부·인증 절차·기간(MIC·Google), 산업 벤치마크(AFR 기준), 시장·경쟁 수치.
**비대상:** KT 솔루션 사양·범위 결정·역할분담 등 사업 내부 정의.

- **Tier 1**(우선): 정부 공식 문서, 기업 공시(SEC·DART), 표준 문서(TR-069/369), 공식 IR.
- **Tier 2**: 공인 리서치(Mordor·Statista·IDC·Gartner).
- **Tier 3**: 업계 매체 — 사용 시 본문에 "추정" 명시.

**형식:** `[N] [Tier] 기관. "제목". 발행처, 발행일. URL`
**위치:** Control Pack 부록 B(Bibliography) + 핵심 수치 검증 트레이스(본문 위치·수치·[N]·Tier·검증일).
**불확실성:** Tier 1=단정 / Tier 2·3=추정 / 출처 부재=업계 통상치 또는 "KT 자체 분석" 명시.

-----

## 5. 빌드 전 최종 체크 (SKILL.md STEP 5와 동일)
RFI 7항목 100% 매핑 · 선택 요소 누락 0 · 단계 게이트 명시 · WS1 허브 반영 · RACI R 누락 0 · 외부 사실 출처·Tier · 비용/인력 "추정+가정" · Confidentiality 푸터.
