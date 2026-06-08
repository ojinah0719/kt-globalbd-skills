# Deliverable Templates — 산출물 템플릿 / 스키마

각 산출물의 **표준 컬럼·구조**와 **VNPT 컨텍스트 기반 예시 행**입니다.
.docx Control Pack의 섹션과 .xlsx 트래커 탭 모두 본 스키마를 따릅니다.
예시 행은 형식 안내용이며, 실제 값은 인터뷰·원문·web_search로 채웁니다. **금액·기간·M/M은 "계획 추정치 + 가정"으로 표기.**

-----

## 0. 통합 PMO Control Pack — 문서 구조(.docx 목차)

```
표지 (KT × VNPT/MyTV | PMO Control Pack | Confidential | 일자)
0. Executive Summary  — 사업 개요·현재 단계·핵심 쟁점·의사결정 요청 4행
1. 사업 범위 & WS 허브 구조 (WS1 중심 8 WS 맵)   [①]
2. 요구사항 추적 — VNPT RFI 7항목 대응 (RTM)      [①]
3. 정합·아키텍처 (To-Be·IDD·연동 매트릭스·OS/런처) [②]  ★
4. 일정·마일스톤 (WBS·게이트·Critical Path)       [④]
5. 원가·상용모델 (비용·BM 비교·Payback)           [③]
6. 자원·조직·R&R (RACI·인력·기술이전)              [⑤]
7. 산출물·검수·형상                                [⑥]
8. 품질·SLA·테스트                                 [⑦]
9. 조달·물류·공급망                                 [⑧]
10. 리스크·이슈 (RAID)                              [⑨]
11. 규제·컴플라이언스 (인증 로드맵·데이터주권)      [⑩]  ★
12. 거버넌스·이해관계자·커뮤니케이션 (+온라인 미팅) [⑪]
13. 계약·IP (체크리스트·License/IP 매트릭스)        [⑫]
부록 A. 단계 Stage-Gate 체크리스트
부록 B. Bibliography (외부 사실 출처·Tier) + 검증 트레이스
```

> 선택된 요소만 포함할 경우 해당 섹션만 전개. 단, 8 WS 선택 시 §1 허브 구조와 §2 RTM은 필수.

-----

## 1. RTM — 요구사항 추적 매트릭스 (RFI 7항목) ★ .xlsx 탭
**컬럼:** ID | RFI# | 요구사항(요약) | 분류(관리요소) | KT 응답/접근 | 증빙 문서 | 책임(R) | 상태(미착수/진행/완료) | 비고

| ID | RFI# | 요구사항 | 분류 | KT 응답/접근 | 증빙 | R | 상태 |
|---|---|---|---|---|---|---|---|
| RTM-01 | 1 | 제품 포트폴리오·사양·원가 | ①③ | STB 4·사운드바 사양표 + 원가 개산 | STB Spec / 비용 산정서 | KT | 진행 |
| RTM-02 | 2 | AI Agent 통합범위·통합모델·OTA | ②① | Cloud 기반 + 레거시 제약 기능 명시·OTA | AI Agent Spec / IDD | KT | 진행 |
| RTM-03 | 3 | OS·런처·Google Cert·개발책임 | ②④⑩⑤ | GTV4O vs Custom 비교 + Cert 로드맵 + R&R | OS/런처 전략서 / 인증 로드맵 | 공동 | 미착수 |
| RTM-04 | 4 | BM 비용내역·MOQ·Rev Share | ③⑫ | OEM→License Hybrid + 비용내역 + MOQ | BM 비교표 / 계약 부속 | 공동 | 진행 |
| RTM-05 | 5 | TMS 기능·배포·OTA 타게팅 | ①② | TR-069/369·On-prem/Cloud·세그먼트/지역 OTA | TMS Spec / IDD | KT | 미착수 |
| RTM-06 | 6 | 통관·MIC 인증·AS·AFR·Epidemic | ⑧⑩⑦ | 물류·통관 절차 + MIC + AFR 목표 + 정책 | 조달·물류 / SLA 정의서 | 공동 | 미착수 |
| RTM-07 | 7 | 데이터주권·VNPT Cloud·PDPL 2025·Decree 356 | ⑩② | VNPT Cloud 배포 + 데이터 거주 설계 | 데이터주권 설계서 | 공동 | 미착수 |

-----

## 2. IDD — 인터페이스 정의서 / 연동 매트릭스 ★ [②]
**연동 매트릭스 컬럼:** I/F-ID | KT 시스템 | VNPT 시스템 | 연동 목적 | 방식(API/SDK/Batch/OTA) | 프로토콜/표준 | 방향 | 데이터 | 인증/보안 | 상태

| I/F-ID | KT | VNPT | 목적 | 방식 | 표준 | 방향 | 상태 |
|---|---|---|---|---|---|---|---|
| IF-01 | MBS 연동 | BSS/OSS/CRM | 가입·과금·프로비저닝 | RESTful API | OAuth2 | 양방향 | 설계 |
| IF-02 | Media AI Agent | STB Fleet | AI 기능 배포 | Cloud APK + OTA | TR-369/MQTT | 단방향(배포) | 설계 |
| IF-03 | OTT Provisioning | OTT Backend(Netflix·Disney+) | 구독·활성화 | RESTful API | PDI/ESN·JWT | 양방향 | 검토 |
| IF-04 | DRM 연동 | Verimatrix | 콘텐츠 보호 | SDK | - | 단방향 | 검토 |
| IF-05 | TMS | STB Fleet | 단말·OTA·QoS·장애 | ACS | TR-069/369·MQTT | 양방향 | 검토 |

**통합모델 결정서 항목:** 후보(Cloud / Edge / Hybrid) × 평가축(레거시 HW 호환·지연·비용·데이터주권·운영) → 권고·근거.
**OS·런처 전략서 항목:** GTV4O vs Custom Launcher × (UX 커스터마이징·Google 정책·인증·개발 부담·일정) → 권고 + 개발 R&R(RFI #3).

-----

## 3. WBS · 마일스톤 ★ .xlsx 탭 [④]
**WBS 컬럼:** WBS-ID | 작업 | 상위 WS | 산출물 | 선행 | 담당(R) | 시작 | 종료 | 상태(RAG)
**마일스톤 컬럼:** MS-ID | 마일스톤 | Phase | 목표일 | Gate 기준 | 상태

| MS-ID | 마일스톤 | Phase | 목표일 | Gate 기준 |
|---|---|---|---|---|
| MS-0 | MOU 체결 | P0 | 2026 Q3 | 양사 서명 |
| MS-1 | 상세 설계 DR 승인 | P1 | 계약+6주 | IDD·WBS·예산 Baseline |
| MS-2 | MIC ICT 인증 취득 | P2 | 2026 Q4 | MIC 인증서 |
| MS-3 | Google Certification | P2 | 2026 Q4 | Google 인증 |
| MS-4 | 데이터주권 검증 | P2 | 2026 Q4 | VNPT Cloud 배포·PDPL 2025·Decree 356 충족 |
| MS-5 | UAT 합격 | P3 | - | UAT 기준·SLA 충족 |
| MS-6 | 상용 Go-Live | P4 | - | 상용 안정화·운영 이관 |

> Critical Path: WS1 개발 → 인증(MS-2/3/4) → 파일럿(MS-5) → 상용(MS-6). WS2~6은 MS-5 이후 게이트.

-----

## 4. 비용·BM 산정서 [③]  ※ 계획 추정치 + 가정 명시
**비용 항목:** License Fee | SI/구축 | 현지화 | 인증(MIC·Google) | HW(ASP×수량) | 물류·통관 | 운영·AS | 예비비
**BM 비교표 컬럼:** 모델 | 초기 CAPEX | 운영비 | KT 수익구조 | VNPT 부담·리스크 | 적합성

| 모델 | 초기 CAPEX | KT 수익 | VNPT 리스크 | 적합성 |
|---|---|---|---|---|
| OEM 구매 | 높음 | HW 마진 | 재고·CAPEX | 초기 신속, CAPEX 부담 |
| License | 중 | License Fee | 중간 | 자율성↑ |
| Revenue Share | 낮음 | 매출 연동 | 낮음(분담) | CAPEX 최소 |
| **Hybrid(권장)** | 단계적 | OEM→License/RS | 단계적 완화 | **CAPEX·리스크 최소 니즈 부합** |

**가정 블록(필수):** 환율·수량·기간·범위 가정, MOQ, 의무 협력기간, Payback 산식. "정식 견적은 별도 산정."
**견적서 표준(정산용):** 파트 | 항목 | 단가 | 수량 | 통화 | 합계 | **유형(goods/royalty/service)** | **세금 라인** — 협력사 원가→KT 마진→VNPT 가격 **3단 일치**, scope-line 1:1, 버전 단일 기준.
**정산 대사 트래커(.xlsx):** 견적 ↔ 계약/PO ↔ 검수 ↔ 송장 ↔ 지급 **N-way match**(수량·단가·통화·세금 라인). 검수연동 지급·변경통제·환율 기준일 통일. (상세: `settlement-integrity.md`)

-----

## 5. RACI 매트릭스 ★ .xlsx 탭 [⑤]
**컬럼:** 산출물/의사결정 | KT | MyTV | VNPT | PMO | (R=책임 A=승인 C=협의 I=공유)

| 항목 | KT | MyTV | VNPT | PMO |
|---|---|---|---|---|
| 솔루션 사양·IDD | R | C | I | A |
| 레거시 연동 | C | R | C | A |
| 런처 개발(RFI#3 쟁점) | R/C | R/C | I | A |
| 인증(MIC/Google) | C | R | C | A |
| 데이터주권·Cloud | C | C | R | A |
| 상용 정산·운영 | I | R | C | A |
| 콘텐츠·로컬 패키징 | I | R | C | I |

> 모든 핵심 산출물에 **R 1주체 지정(누락 0)**. RFI#3 런처 개발 책임은 협의 후 R 확정.
**인력 투입계획:** 역할 | 조직 | M/M | 기간 | Phase. **기술이전 계획:** 영역 | From→To | 방법(교육·OJT·문서) | 완료기준.

-----

## 6. 산출물 목록 · 검수 [⑥]
**컬럼:** 산출물-ID | 산출물명 | WBS 연계 | Phase | 작성(R) | 검수자(A) | 검수기준 | 형상버전 | 상태

| ID | 산출물 | Phase | R | 검수기준 |
|---|---|---|---|---|
| DEL-01 | 인터페이스 정의서(IDD) | P1 | KT | 연동 항목 완전성·합의 |
| DEL-02 | 현지화 빌드(APK) | P2 | KT | 기능·언어·인증 통과 |
| DEL-03 | UAT 결과서 | P3 | 공동 | UAT 시나리오 합격률 |

-----

## 7. SLA 정의서 [⑦]  (RFI #6)
**컬럼:** SLA-ID | 지표 | 대상 | 목표 | 측정방법 | 위반 시 조치

| SLA-ID | 지표 | 대상 | 목표 | 위반 조치 |
|---|---|---|---|---|
| SLA-01 | AFR(연간 고장률) | 8K STB·사운드바 | 목표치 [협의] | 교체·보상 |
| SLA-02 | Epidemic Failure | 전 라인업 | 임계 [정의] 초과 시 | 리콜·일괄 교체·보상 |
| SLA-03 | AS 처리 | 현지 | 접수→처리 SLA | 패널티 |

**테스트 전략:** 단위 → 통합 → E2E → UAT. **결함관리:** 등급·재현·조치·재검증.
> AFR 벤치마크 등 외부 수치는 출처·Tier 부착.

**보강(RFI #6 응답용):**
- **AFR 측정식 합의:** AFR = (필드 반품 ÷ 가동 설치대수) 연환산, SKU별 목표(8K STB `[≤X%]` / 사운드바 `[≤Y%]`, placeholder) + 월간 리포팅.
- **Epidemic 임계 정의:** rolling `[ ]`개월 누적 결함률 > max((a) 배포대수 `[N]%`, (b) AFR `[k]×`) → 8D → 구제(OTA / 배치 교체 / 리콜) + 비용배분.
- **수입·인증·AS 운영 계획:** IOR(VNPT/디스트리뷰터)·Incoterms·HS·CO / MIC 타입승인 게이트 / 3-tier AS·RMA·DOA·역물류.
- **백투백 필수:** SLA·보증·Epidemic 비용은 **OEM 계약으로 flow-down**(`settlement-integrity.md` §4). 정량 수치는 OEM·법무(L5) 확인 전 placeholder.
- (상세 운영·통제: `logistics-as-sla.md`)

-----

## 8. RAID 로그 ★ .xlsx 탭 [⑨]
**컬럼:** ID | 유형(R/A/I/D) | 내용 | 영향 | 확률 | 등급 | 대응 | 책임(R) | 기한 | 상태

| ID | 유형 | 내용 | 등급 | 대응 | R | 상태 |
|---|---|---|---|---|---|---|
| RA-01 | Risk | MIC/Google 인증 지연 | High | 병행 트랙·조기 착수·버퍼 | 공동 | Open |
| RA-02 | Risk | 데이터주권 미충족(PDPL 2025·Decree 356) | High | VNPT Cloud 우선 설계·법무 검토 | 공동 | Open |
| RA-03 | Risk | 레거시 HW(NPU 부재) AI 제약 | Med | Cloud APK 대체·기능 범위 합의 | KT | Open |
| RA-04 | Issue | 런처 개발 R&R 미정(RFI#3) | Med | RACI 협의·결정 | PMO | Open |
| RA-05 | Depend. | WS2~6은 WS1 마일스톤 선행 | - | MS-5 게이트 연동 | PMO | Track |

-----

## 9. 인증·규제 로드맵 [⑩]  (RFI #3·6·7) ※ 기간=추정 범위·출처 부착
**컬럼:** 트랙 | 단계 | 산출물/증빙 | 책임(R) | 예상 기간(~) | 선행 | 상태

| 트랙 | 단계 | 증빙 | R | 예상기간(~) |
|---|---|---|---|---|
| MIC ICT | 시험→인증 신청→취득 | MIC 인증서 | 공동 | [추정·출처] |
| Google Cert | 요건→테스트→인증 | Google 인증 | 공동 | [추정·출처] |
| 데이터주권 | 요건분석→Cloud 배포→검증 | 설계서·검증결과 | 공동 | P2 내 |
| 통관·물류 | 수입→통관→보세/창고 | 절차서 | MyTV/VNPT | - |

**데이터주권 설계서 항목:** 데이터 종류(시청·행동·TMS) | 물리적 위치(베트남 VNPT Cloud) | 저장·처리 방식 | PDPL 2025·Decree 356 조항 매핑 | 검증 방법.

-----

## 10. 거버넌스 · 이해관계자 · 온라인 미팅 [⑪]
**거버넌스 차터:** 의사결정 체계(Steering / PMO / 실무 트랙) | 보고 주기(주간·월간·게이트) | 에스컬레이션 경로.
**이해관계자 맵 컬럼:** 이해관계자 | 조직 | 역할 | 관심사 | 영향력 | 관여 전략.

**★ 온라인 미팅(P0) 운영안 — 현재 국면 즉시 활용**
```
목적: KT 제안 상세 설명 + 정합 방안 논의 + RFI 7항목 쟁점 정렬
참석: KT(BD·기술·PMO) / MyTV(제품·기술·구매) / (필요시) VNPT 인프라
어젠다(예):
 1) 제안 핵심 요약 & 8 WS WS1-허브 전략 (10')
 2) RFI 7항목별 KT 입장·쟁점 정렬 (40')  ← RTM 기반
 3) 정합(②)·BM(③)·인증(⑩) 3대 쟁점 심화 (30')
 4) R&R·다음 단계·MOU 로드맵 합의 (20')
 5) 후속조치·책임·기한 (10')
산출: 미팅 어젠다 · 쟁점별 KT 입장 1pager · 의사결정/후속조치 로그(회의록은 L4-bd-meeting-minutes 연계)
```

-----

## 11. 계약·IP [⑫]  (RFI #4)
**계약 체크리스트:** 단계(MOU/LOI/본계약) | 항목(범위·산출물·검수·SLA·페널티·License·IP·**세금(FCT)·언어/우선본·기술이전 등록(MOST)·데이터(DPA/PDPL)·통화/환**·준거법·분쟁해결·기밀) | 상태 | 비고.
**베트남 필수 조항(체결 전 점검):** ① 세금 — FCT 분류·gross-up·한–베 조세조약 ② 데이터 — PDPL 2025·Decree 356(VNPT Cloud·DPIA·CTIA·DPO·컨트롤러/프로세서) ③ 언어 — 영-베 이중언어·우선본(기술이전/IT는 베트남어) ④ 기술이전 — MOST 등록 ⑤ 분쟁 — VIAC/SIAC·뉴욕협약·SOE 주권면제 배제·중재조항 서면·기관 명시 ⑥ 실행 — 법적대표자+직인 ⑦ MG·정산. (상세: `vietnam-legal-checklist.md`)
**License/IP 귀속 매트릭스:** 자산(SW·APK·런처·데이터·콘텐츠) | 소유 | License 범위 | 제약 | 비고.
**백투백(Back-to-Back) 점검:** KT–VNPT 계약 의무를 협력사 계약에 **flow-down** — 지급 마일스톤·검수연동·통화/환·MG/Rev Share 배분·페널티/SLA pass-through·IP/License 체인·기간·세금 분류 일치. (상세: `settlement-integrity.md`)
> 심층 리스크 조항 검토는 **L5-bd-contract-review**(준거법 베트남)로 위임. License/Rev Share 조건은 §4(③)와 일치시킴.

-----

## 12. 조달·물류·공급망 [⑧]  (RFI #6)
**조달계획:** 품목 | 공급모델(OEM/위탁) | MOQ | 리드타임 | 단가(추정) | 공급 SLA.
**물류·통관 절차서:** 수출(KR)→수입(VN)→관세·인증 연계→보세/창고→배송→설치.
**AS/역물류:** 접수 채널 | 현지 수리센터 | 부품 재고 | 교체·반품(역물류) | Epidemic 대응(⑦ 연계).
