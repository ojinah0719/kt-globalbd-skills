# Meeting Governance — 회의 운영 루프 · 의사결정 추적 · 계약 연계

본 문서는 PMO가 **모든 회의를 동일한 방식으로 운영**하여, 회의가 흩어지지 않고 **하나의 스토리로 연결 → 의사결정이 투명하게 누적 → 최종 계약서로 반영**되도록 하는 엔진입니다.

## 1. 회의 거버넌스 루프 (모든 회의 공통)

```
① Invitation 발송        ② 회의(Review & Discussion)     ③ 회의록 공유            ④ 누적·추적
─────────────────        ──────────────────────────       ──────────────         ───────────────
목적·라이프사이클 위치     어젠다대로 진행                    L4-bd-meeting-minutes   Decision Log 갱신
어젠다 + 사전준비 매트릭스  쟁점 review·결정 도출              회의록 + Action Tracker  → Deliverable Registry
Exit 결론(도달 목표)       Exit 결론 충족 확인               참가자 공유              → Contract Trace
사전자료(pre-read)·NDA                                                              → 다음 회의 Invitation
```

- **연속성:** 각 회의의 Output(결정·Action·산출물)은 다음 회의 Invitation의 Input이 된다.
- **투명성:** 모든 결정은 Decision Log에 누적되고, 관련 계약 조항으로 태깅된다(Contract Trace).
- **단계 연계:** 회의 유형은 `project-lifecycle.md`의 단계에 1:1 대응(예: Deep-dive 미팅=단계3, 요구사항 워크숍=단계4).

## 2. Invitation 표준 구성 (이메일 + 첨부)

**이메일 본문(요약):** 인사 → 회의 목적·성격(라이프사이클 위치) → 일시·플랫폼·참석자 → 어젠다 요약 → 양사 사전 준비 요청 → 사전자료(pre-read) → **이번 회의에서 도달할 결론(Decisions to reach)** → NDA 안내(해당 시) → 회신 요청.
**첨부(Meeting Package, .docx):** 라이프사이클 개요 + 상세 어젠다 + 사전준비 매트릭스 + NDA/기밀 + Exit 결론 + 다음 단계 로드맵.

### 사전준비 매트릭스 스키마
**컬럼:** 어젠다# | 항목 | KT 준비·공유 | MyTV/VNPT 준비·공유 | 관련 자료(pre-read) | 도달 결론

## 3. Decision Log (누적·계약 추적) ★ .xlsx 탭
회의에서 내린 모든 결정을 누적 기록하여 최종 계약에 반영한다.
**컬럼:** DEC-ID | 일자 | 회의 | 단계 | 결정 내용 | 근거 | 책임(R) | 상태(잠정/확정) | **연계 계약조항** | 연계 산출물

| DEC-ID | 회의 | 단계 | 결정 | 상태 | 연계 계약조항 |
|---|---|---|---|---|---|
| DEC-01 | Deep-dive | 3 | BM = OEM→License Hybrid 방향 | 잠정 | §가격·BM, License |
| DEC-02 | Deep-dive | 3 | 데이터는 VNPT Cloud(베트남) 저장 | 잠정 | §데이터주권·SLA |
| DEC-03 | Deep-dive | 3 | 런처: GTV4O 우선 검토 / 개발 R&R 차기 확정 | 잠정 | §범위·R&R |

> 잠정(Tentative) 결정은 후속 단계에서 확정(Confirmed)되며, 확정 결정은 **계약서 초안(SOW·본계약)으로 이관**된다.

## 4. Contract Traceability (계약 추적 매트릭스)
계약서의 각 조항이 **어느 회의의 어느 결정에서 비롯되었는지** 역추적 가능하게 한다.
**컬럼:** 계약조항 | 출처 Decision(DEC-ID) | 출처 회의·일자 | 관련 산출물 | 상태
→ 임원/법무가 "이 조항 근거는?"이라 물을 때 즉시 대응. 단계 12(계약·IP)·`L5-bd-contract-review`로 연결.

## 5. Deliverable Registry (산출물 레지스트리) ★ .xlsx 탭
프로젝트 전 산출물을 등록·관리한다(요소 ⑥).
**컬럼:** DEL-ID | 산출물명 | 단계 | Phase | 작성(R) | 검수자(A) | 버전 | 상태(작성중/검수/승인) | 등록일 | 연계 회의(DEC-ID)
→ 모든 회의·단계의 Output이 여기에 등록되어 전체 추적성이 확보된다.

## 6. 회의별 "도달 결론(Exit Conclusions)" 원칙
모든 회의는 **다음 단계로 넘어가기 위해 반드시 도달해야 할 결론**을 사전 정의하고, 회의 종료 시 충족 여부를 확인한다.
- Invitation에 "Decisions to reach"로 명시 → 참가자가 회의 성격·목표를 정확히 이해.
- 회의 종료 시 미도달 결론은 Action Tracker로 이월(책임·기한 지정).
- 도달 결론은 Decision Log에 기록 → Contract Trace로 연결.

**단계별 대표 Exit 결론(예):**
| 단계 | 회의 | 도달 결론 |
|---|---|---|
| 3 | Deep-dive | RFI 회신 방향·3대 쟁점 정렬·요구사항 워크숍/MOU 로드맵 합의 |
| 4 | 요구사항 워크숍 | 요구사항 baseline 합의 |
| 5 | 범위 확정 | 과제범위(SOW) 동결·MOU 체결 |
| 7 | 설계검토(DR) | 설계 승인·개발 착수 |
| 10 | 인증 게이트 | 인증 취득·시범 진입 |

## 7. 회의록 (Minutes) 연계
회의 직후 **L4-bd-meeting-minutes**로 회의록(Decision Log·Action Tracker 포함)을 작성·공유한다. PMO는 회의록의 결정을 본 문서의 Decision Log/Registry/Contract Trace에 반영한다.

## 8. NDA 운영 (Deep-dive 이후 공통)
단계 3(Deep-dive) 진입 시 상호 NDA를 선행/병행 체결한다(상세: `project-lifecycle.md` §3). 이후 회의 Invitation에는 공유 자료의 기밀 등급(Public/Confidential/Restricted)을 표기하고, 기밀 자료는 NDA 적용 사실을 명시한다.
