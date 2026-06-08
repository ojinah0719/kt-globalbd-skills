# KT × VNPT/MyTV 사업 컨텍스트 (사전 탑재)

본 문서는 PMO 프레임워크에 주입되는 **사업 사실 데이터**입니다. 타 고객사 적용 시 이 파일만 치환하고 프레임워크는 유지합니다.
프로젝트에 첨부된 원문 PDF가 있으면 `project_knowledge_search`로 대조하며, **충돌 시 원문 우선**입니다.

-----

## 1. 사업 개요

- **사업명(가칭):** AI-Powered MyTV — KT × VNPT Joint Platform Initiative
- **성격:** KT 미디어 솔루션을 VNPT 기존 미디어 플랫폼(MyTV)에 정합·구축하는 **대형 SI 사업**
- **목표:** Viettel·FPT 대비 기술·플랫폼 우위 확보 (AI STB·Media AI Agent 이식), 8 WS 대응 + Quick Win(WS1·WS7) 집중, Launch→Validate→Scale 단계 전략
- **현재 국면:** 영업·마케팅 종료 → **수주 클로징(P0)**. 제안 상세 설명·논의를 위한 **온라인 미팅** 예정. VNPT는 RFI 제출(=능동적 의사결정 단계 진입).

## 2. 협상 경과 (4개 문서 = 대화 스레드)

| # | 문서 | 발신 | 내용 |
|---|---|---|---|
| 1 | KT Media Solution Proposal for VNPT (2026-03-17) | KT→VNPT | 최초 솔루션 제안 (KT 개요·E2E 미디어·AI STB·Media AI·AX·B2B/B2G) |
| 2 | MyTV_KT Collaborative Discussion (03-26) | VNPT→KT | 8 WS로 니즈 정리 + 3자 역할분담(예시) + KT 실무 인풋 6영역 요청 |
| 3 | MyTV x KT Business Cooperation Proposal (Apr 2026) | KT→VNPT | 8 WS 니즈분석→Q&A→KT 역평가→AI IPTV 전략 (4-Layer BM·NOW/NEXT/LATER) |
| 4 | kTxMyTV@WS01 Request for Information | VNPT→KT | WS1 대상 RFI 7항목 (=PMO 요구사항 명세) |

> 보조 문서(프로젝트 내): E2E Solution Spec, AI Media Solution Proposal for WS1, AI Agent Spec, AX Solution Spec, Premium STB Spec.

## 3. 8 Workstream — WS1 허브 구조 맵

| WS | 영역 | 우선순위 | 제안 BM | 핵심 산출물 | WS1과의 관계 |
|---|---|---|---|---|---|
| **WS1** | Device & AI UX | **NOW (Quick Win)** | OEM/License + 현지화 | **AI STB · TMS · Media AI Agent** | **허브(축)** — 플랫폼·데이터·디바이스 기반 |
| WS2 | Discovery & Recommendation | NEXT | License + 현지화 | AI 추천 시스템 | WS1 시청 데이터 위에 적층 |
| WS3 | AI Content Operations | NEXT | License | Magic Platform | WS1 AI 인프라 활용 |
| WS4 | Content Partnership | NEXT | License | 콘텐츠 패키지(K-Content) | WS1 STB/UX에 "K-Content Zone" 노출 |
| WS5 | Advertising & Commerce | NEXT | License + 현지화 | 광고(AD) 시스템 | WS1+WS2 데이터로 광고 인벤토리 |
| WS6 | OTT Bundling | NEXT | 현지화 | OTT Aggregation | WS1 STB/앱에 스토어프론트→SSO/빌링 |
| **WS7** | Hospitality B2B | **NOW (Quick Win)** | License + 현지화 | HiOrder 시스템 | 병렬 Quick Win — WS1 디바이스/플랫폼 패턴 재사용 |
| WS8 | B2G / Family / Learning | LATER | License + 현지화 | 해당 서비스 시스템 | 확립된 플랫폼 위 장기 확장 |

**PMO 함의:** WS1 마일스톤(인증·파일럿)이 WS2~6의 선행 의존성 → ④일정·⑨RAID Dependency로 게이트. WS7은 병렬, WS8은 장기.

## 4. VNPT RFI 7항목 (= PMO 요구사항, WS1)

| # | RFI 항목 | 요구 내용 | 매핑 관리요소 |
|---|---|---|---|
| 1 | 제품 포트폴리오 | 제품 개요·USP, HW 사양(칩셋/RAM/Storage), SW(OS 버전), 타깃 세그먼트, 원가/가격 | ① ③ |
| 2 | Media AI Agent 통합 | 구현 범위·use case, 레거시 HW 제약상 불가 기능, 통합모델(Cloud/Edge/Hybrid), API/SDK, OTA | ② ① |
| 3 | STB OS·런처 전략 | GTV4O vs Custom Launcher 비교, **Google Certification 로드맵·마일스톤·일정**, 개발 책임 분담 | ② ④ ⑩ ⑤ |
| 4 | 비즈니스 모델 | OEM/License 비용내역(License fee·SI cost·ASP), Leasing/Rev Share(MOQ·정산·의무 협력기간) | ③ ⑫ |
| 5 | TMS | 기능·관리 능력, 배포(On-prem/Cloud), OTA(고객 세그먼트·행정구역별 타게팅) | ① ② |
| 6 | 물류·공급망·SLA | 통관·창고, **MIC ICT 인증**, AS(보증·수리·교체), **AFR 목표(8K STB·사운드바)**, Epidemic Failure 정책 | ⑧ ⑩ ⑦ |
| 7 | **데이터 주권** | 사용자 행동데이터 물리적 위치·저장방식, **VNPT Cloud(베트남 내) 전체 배포 가능 여부** (PDPL 2025·Decree 356 필수 요건) | ⑩ ② |

> RFI는 ①~⑫ 중 ①②③④⑤⑦⑧⑩⑫에 걸쳐 매핑됨 → RTM에서 7항목 100% 추적 필수.

## 5. 3자 역할분담 (Collaborative Discussion 기준 · 확정 아님)

- **KT:** 핵심 기술·제품 자산, 검증된 운영모델·솔루션 패턴, 플랫폼·엔진 역량, 선별적 기술 인에이블먼트·노하우 이전
- **MyTV:** 제품 정의·로컬 서비스 패키징, 콘텐츠·운영·로컬 사업 소유, 파일럿 설계·시장 실행, 상업적 우선순위 결정
- **VNPT 생태계:** 번들 자산·채널, 엔터프라이즈·버티컬 도달, 인프라·인접 서비스 지원, 규모·생태계 통합

> RFI #3 미해결 쟁점: Custom Launcher 선택 시 **개발 주도 주체**(VNPT 주도 vs KT 프레임워크+포괄 지원) → ⑤ RACI에서 확정 필요.

## 6. 정합 대상 시스템 (VNPT 레거시) — ② 핵심 입력

- **BSS/OSS/CRM** (레거시) — 가입·과금·정산·고객
- **MBS** (Media Business System) — 상품 패키징·구독/결제·시청 제어
- **Verimatrix** — DRM
- **OTT Backend** — Netflix·Disney+·iQIYI 등 (KT PI/OTT Provisioning, 표준 RESTful API, 사업자측 I/F 변경 없음)
- **결제 시스템** — 카드·온라인·OTP·포인트
- **STB Fleet** — 기존 스마트박스(레거시 HW 제약 존재) + 신규 프리미엄(8K STB·사운드바)
- **TMS 표준** — TR-069 / TR-369 / MQTT (펌웨어·APK·OTA·QoS·장애 관리)

## 7. KT 솔루션 구성요소 (제안 범위)

Genie TV STB 4, Genie TV All-in-one Soundbar, Media AI Service / **Media AI Agent**, AX Platform(추천 / 콘텐츠 제작=Magic Platform / 홈쇼핑), **TMS**, OTT Aggregation/Provisioning, MBS, HiOrder(B2B), B2B/B2G 솔루션.

> SmartBox 3 피드 참고(컨텍스트): KT Media AI Agent 15개 기능 중 8개는 클라우드 APK로 즉시 배포 가능, 4개는 레거시 HW(NPU 부재)로 제약 → ② 구현범위·⑨ 리스크에 반영.

## 8. 인증·규제 트랙 — ⑩ 핵심 입력 (외부 사실: 출처·Tier 부착)

| 트랙 | 내용 | 비고 |
|---|---|---|
| **MIC ICT 인증** | 베트남 정보통신부(MIC) 규제 시험·인증/허가 (HW 수입·유통 전제) | RFI #6 |
| **Google Certification** | 제안 기기의 공식 Google 인증 (GTV4O/런처 관련) | RFI #3 — 로드맵·마일스톤·일정 요구 |
| **데이터주권 (PDPL 2025·Decree 356)** | 개인정보·데이터 거주(residency) — VNPT Cloud(베트남 내) 저장·처리 필수 | RFI #7 — 필수(mandatory) 요건 |
| 통관·물류 | 수입·통관·보세·창고 절차 | RFI #6 |

> 인증 소요 기간은 **통상치/추정 범위**로 표기하고 출처를 단다(임의 단정 금지). 병행 인증 트랙(MIC + Google)은 ④ 마일스톤에 게이트로 배치.

## 9. 비즈니스 모델 옵션 — ③ 핵심 입력

- **OEM 구매** / **License** / **Revenue Share** / **Hybrid Sequencing**
- **권장 방향(컨텍스트):** OEM 구매로 시작 → License/Rev Share로 전환하는 **Hybrid Sequencing** (VNPT의 CAPEX·리스크 최소화 니즈 충족)
- 산정 항목: License Fee, SI Cost, ASP(STB 라인업), **MG(Minimum Guarantee — 최소 보장 물량/금액)**, MOQ, Rev/Cost Sharing, 의무 협력기간, Payback.
- **VNPT 명시 관심(BM):** 제안 STB의 **device pricing · MG · commercial terms** (working session 핵심 의제).

## 10. VNPT 핵심 니즈 (메시징 기준선)

1. **Quick Win 차별화** (Viettel·FPT 대비 가시적 우위)
2. **CAPEX·리스크 최소화**
3. **운영 자율성** (로컬 주도)
4. **규제 준수** (하드필터 — 미충족 시 진행 불가)

→ 모든 산출물의 메시지는 표면적 RFI 응답을 넘어 위 4개 니즈를 충족하는 논리로 구성.

## 11. 단계 타임라인 (컨텍스트 기준)

- **P0 수주 클로징:** 현재 (온라인 미팅 → RFI 정식 회신 → BM 확정 → MOU)
- **P1 착수·정합 설계:** 계약 후
- **P2 현지화·인증:** **2026.8~12** (MIC ICT + Google Cert 병행, 데이터주권 구현)
- **P3 파일럿:** P2 후
- **P4 상용 전환·확산:** 파일럿 후 (운영 이관 → WS2~8 확산)

## 12. KT 참고 실적 (제안 근거)

- 한국 **Genie TV Android TV OS 전환(Big Transformation)** — 수백만 가입자 플랫폼 마이그레이션
- 콘텐츠 9.7M+ 고객 서비스·시청 데이터 분석
- 해외 프로젝트: 태국·베트남·인도네시아
- HiOrder(테이블오더 키오스크) 20만 고객 (WS7 근거)

## 13. 최신 VNPT 시그널 (WhatsApp — 차주 Joint Working Session 요청)

- **상태 진전:** VNPT가 제안 자료 **내부 검토 완료** → **부서 리더십에 예비 보고** 완료. (의사결정 단계 가속, 리더십 가시성 확보)
- **요청:** **Joint Working Session** 개최 — 기술/사업 요구사항 **심화 검토** + **상세 Action Item 확정**. KT에 **차주(next week) 가용 일정** 회신 요청(→ VNPT가 일정 확정·소집).
- **VNPT 명시 심화 의제 3영역:**
  1. **제안 STB의 Business Model** — device pricing, **MG(Minimum Guarantee)**, commercial terms 등
  2. **STB deployment** — 기술 범위(technical scope) 및 구현 계획(implementation plan)
  3. **Media AI Agent · TMS** — 상세 범위 및 구현 계획
  - "KT가 적절하다고 보는 추가 항목 제시 환영" → KT는 **인증·데이터주권 로드맵**(딜리버리 일정 게이트)을 보조 의제로 추가 권장.
- **PMO 함의:** 회의 성격 = Stage 3(Deep-dive) → Stage 4(요구사항) 가교 + Action Item 확정. NDA 선행 필요(Deep-dive). KT는 "초청"이 아닌 **가용일정 회신 + 어젠다/사전준비/도달 결론 구조 제안**으로 주도.

## 14. Vietnam Legal & Contracting Risk (체결 전 핵심)

> 일반 정보 — 체결 전 **베트남 자격 변호사·세무사 검토 필수**. 심층 검토는 `L5-bd-contract-review`(준거법 베트남)로 위임.

| 영역 | 핵심 | 리스크 / 대응 |
|---|---|---|
| **세금(FCT)** | 비거주자 KT 지급액에 VAT+CIT 원천징수(VNPT 원천징수·납부). SW 라이선스=로열티 CIT 10%, 디지털서비스 VAT 5→10%(Circular 69/2025) | 분류(기기/로열티/서비스)·**gross-up**·**한–베 조세조약** → 마진 직결, 계약 명문화 |
| **데이터** | **PDPL 2025**(법 91/2025/QH15, 2026.1.1 시행)·**Decree 356/2025** (구 Decree 13/2023 대체) | VNPT Cloud 거주·DPIA·**CTIA(국외이전영향평가)**·DPO·컨트롤러/프로세서 계약. 국외이전 위반 과징금 최대 직전연도 매출 5% |
| **기술이전** | KT SW/기술 라이선스 = 기술이전법(2017) 해당 가능 | **MOST 등록** + 베트남어 계약 검토 |
| **언어·형식** | 민법2015·상법2005 — 언어 자유 | 영-베 이중언어 + **우선본**; 법원/공증 시 베트남어; 법적대표자+**직인(con dấu)** |
| **분쟁해결** | 뉴욕협약 가입; VIAC vs SIAC/ICC | 중재조항 **서면·기관 명시**; 외국판정은 법원 승인; '기본원칙' 거부사유 유의 |
| **거래상대(SOE)** | VNPT 국영그룹 | 내부 승인 체인 지연 버퍼; 단 중재 시 **주권면제 배제** |
| **인증** | MIC ICT·Google Cert | 딜리버리 일정 게이트·책임 분담 |
| **통화·외환** | 지급 통화·환리스크 | 통화·환·외환관리 조항 |

**연계:** 요소 ⑩(규제·컴플라이언스)·⑫(계약·IP) / RFI #4(BM·계약)·#7(데이터). 모든 법령·세율은 변동 가능 — 체결 시점 재확인.
