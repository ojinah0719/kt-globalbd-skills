#!/usr/bin/env python3
"""스킬 무결성 검증 (문자 기준). CI에서 실행."""
import os, re, sys
SKILLS="skills"; MAXDESC=1024
EXPECT_REF={"l3-bd-si-pmo-control-tower":10}  # 최소 reference 수
fail=False
for d in sorted(os.listdir(SKILLS)):
    p=os.path.join(SKILLS,d); sk=os.path.join(p,"SKILL.md")
    if not os.path.isdir(p): continue
    if not os.path.isfile(sk):
        print(f"❌ {d}: SKILL.md 없음"); fail=True; continue
    t=open(sk,encoding="utf-8").read()
    fm=re.match(r"^---\s*\n(.*?)\n---",t,re.S)
    blk=fm.group(1) if fm else ""
    m=re.search(r"^description:\s*(.+?)(?=\n[a-zA-Z_]+:\s|\Z)",blk,re.S|re.M)
    desc=(m.group(1).strip() if m else "")
    dlen=len(desc)                       # 문자 기준 (locale 무관)
    vm=re.search(r"^version:\s*(.+)$",blk,re.M)
    fmver=vm.group(1).strip() if vm else None
    vtags=sorted(set(re.findall(r"v\d+\.\d+",desc)))
    nref=len([f for f in os.listdir(os.path.join(p,"reference")) if f.endswith(".md")]) if os.path.isdir(os.path.join(p,"reference")) else 0
    errs=[]
    if dlen>MAXDESC: errs.append(f"desc {dlen}>{MAXDESC}")
    if fmver and vtags and ("v"+fmver) not in vtags:
        errs.append(f"버전 불일치 fm(v{fmver}) vs desc({','.join(vtags)})")
    if d in EXPECT_REF and nref<EXPECT_REF[d]:
        errs.append(f"reference {nref}<{EXPECT_REF[d]}")
    if errs: print(f"❌ {d}: "+"; ".join(errs)); fail=True
    else: print(f"✓ {d}: desc {dlen}자, reference {nref}개"+(f", v{fmver}" if fmver else ""))
print("-"*50)
print("RESULT:", "FAIL" if fail else "PASS")
sys.exit(1 if fail else 0)
