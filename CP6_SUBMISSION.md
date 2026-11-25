# LOVELY PROFESSIONAL UNIVERSITY (LPU)
## Course: INT335 – Design Thinking | Checkpoint 6 (CP6 — Week 12) Submission
### PROJECT P08: BEYOND THE RUMOUR MILL
#### Checkpoint 6 (CP6): User Testing & Iteration — Task Logs, Friction Synthesis & Prototype v2

---

### Project Attribute Summary
| Project Attribute | Details |
| :--- | :--- |
| **Project Code & Title** | P08 – Beyond the Rumour Mill |
| **Domain & Problem Area** | Placements and Career Services — Placement Preparation & Information Asymmetry |
| **Group & Section** | Group 5 | Section: K3P25ZY (School of Computer Science & Engineering) |
| **Faculty Mentor** | Komal Gupta |
| **Submission Stage** | Checkpoint 6 (CP6 – Week 12): User Testing & Prototype Iteration |
| **Testing Scope** | 6 Moderated Sessions (4 Placement Aspirants + 2 Senior Contributors) | Prototype v1 -> v2 |
| **Live Deployed Prototype v2** | [https://anirudhooa.github.io/beyond-the-rumour-mill/](https://anirudhooa.github.io/beyond-the-rumour-mill/) |
| **GitHub Repository** | [https://github.com/anirudhooa/beyond-the-rumour-mill](https://github.com/anirudhooa/beyond-the-rumour-mill) |

---

### Team Members & CP6 Testing Responsibilities (Group 5)
| S. No. | Student Name | Registration Number | CP6 Testing & Iteration Role |
| :---: | :--- | :---: | :--- |
| 1 | **Aayush Nehra** | 12509394 | **Team Lead** — Participant Recruitment & Iteration Prioritisation |
| 2 | **Rani Kumari Pandit** | 12510112 | **UI Refinement Lead** — Prototype v2 Screens & Visual Comparison |
| 3 | **Vendra Shyam Karthik** | 12510149 | **Primary Session Moderator** — Video/Observation Logging & Script Execution |
| 4 | **J Anirudh Reddy** | 12512643 | **Interaction Lead** — Task Timing Analytics, Friction Synthesis & v2 Logic |

---

## 1. Usability Testing Execution & Participant Log

Following our CP5 Test Plan, Group 5 conducted 6 individual moderated usability sessions with LPU B.Tech students using our 6-screen clickable prototype (v1). Moderators presented neutral task prompts without explaining prototype features beforehand and remained silent during task execution to observe genuine navigation behaviour.

| Test ID | Participant Segment & Profile | Tasks Tested | Completion Summary & Time | Post-Test Rating (Trust / Clarity) |
| :---: | :--- | :---: | :--- | :---: |
| **UT-01** | 3rd-Year CSE Student (Aspirant — Persona 1 profile) | Tasks 1, 2, 4 | All 3 completed unassisted ($T_1$: 34s, $T_2$: 52s, $T_4$: 18s). Hesitated briefly before spotting 'Start Here' banner. | **Trust:** 4.5 / 5<br>**Clarity:** 4.0 / 5 |
| **UT-02** | 3rd-Year CSE-AIML Student (Aspirant — Persona 2 profile) | Tasks 1, 2, 4 | All 3 completed ($T_1$: 28s, $T_2$: 41s, $T_4$: 14s). Immediately used Role Filter and Top-3 Vetted Links drawer. | **Trust:** 5.0 / 5<br>**Clarity:** 5.0 / 5 |
| **UT-03** | 2nd-Year B.Tech Student (Early Aspirant — Persona 1) | Tasks 1, 2, 4 | $T_1$ & $T_2$ completed ($T_1$: 42s, $T_2$: 65s); needed 1 prompt on $T_4$ because 'Report Outdated' button was tucked at bottom of card. | **Trust:** 4.5 / 5<br>**Clarity:** 4.0 / 5 |
| **UT-04** | 3rd-Year IT Student (Active Prep — Persona 2) | Tasks 1, 2, 4 | All 3 completed unassisted ($T_1$: 25s, $T_2$: 38s, $T_4$: 15s). Requested quick filter by 'Round Type (Coding vs Aptitude)'. | **Trust:** 5.0 / 5<br>**Clarity:** 4.5 / 5 |
| **UT-05** | 4th-Year Placed Senior (SDE Offer) | Task 3 (Senior Flow) | Completed 4-step micro-survey in 3 mins 20 secs. Found tap-to-select topic chips effortless. | **Ease of Input:** 5.0 / 5 |
| **UT-06** | 4th-Year Placed Senior (Analyst Offer) | Task 3 (Senior Flow) | Completed in 3 mins 55 secs. Suggested an optional 'Skip Link Input' toggle when a topic only needs a quick tip. | **Ease of Input:** 4.5 / 5 |

---

## 2. Synthesis of Findings: What Worked vs. Observed Friction

| Category | Observation / Finding | Evidence Source | Impact on CP5 Hypothesis |
| :--- | :--- | :---: | :--- |
| **What Worked Well (Validated)** | **Batch & Drive Verification Badges Built Immediate Trust:** 4/4 aspirants checked the 'Verified [Date]' badge before reading company rounds, confirming they felt confident the info was not an old WhatsApp rumour. | UT-01, UT-02, UT-03, UT-04 | Strongly validates Part A of hypothesis (anti-rumour verification). |
| **What Worked Well (Validated)** | **Top-3 Vetted Links Cap Eliminated Selection Paralysis:** Participants praised having only 3 senior-rated resources per topic instead of long unorganized link lists. | UT-02, UT-04 | Strongly validates Part B of hypothesis (curated anti-overload). |
| **What Worked Well (Validated)** | **5-Minute Senior Micro-Survey Completed Under 4 Mins:** Both 4th-year seniors finished submitting real round notes in under 4 minutes using tap-to-select chips. | UT-05, UT-06 | Validates Part C of hypothesis (low-friction asynchronous senior capture). |
| **Friction Point 1 (High Priority)** | **'Report Outdated' Control Was Buried Below Long Debrief Cards:** In UT-03, the participant took extra time to find how to flag stale info because the button sat at the bottom of the screen. | UT-01, UT-03 | Requires UI relocation in Prototype v2 for faster peer verification. |
| **Friction Point 2 (Medium Priority)** | **Beginners Wanted Stronger Visual Hierarchy for 'Start Here' Roadmap:** First-time aspirants (UT-01, UT-03) initially scanned company cards before noticing the beginner 4-week roadmap. | UT-01, UT-03 | Requires clearer onboarding entry card on Screen 1 in v2. |
| **Friction Point 3 (Medium Priority)** | **Seniors Wanted Optional Link Field in Micro-Survey:** In UT-06, the senior wanted to submit a round tip quickly without being forced to paste URLs for every topic. | UT-06 | Requires making URL fields explicitly optional in Screen 6. |

---

## 3. Evidence-Driven Prototype Iteration Log (v1 -> v2)

| Iteration ID | Observed Friction (CP6 Test) | Exact Change Made in Prototype v2 | Affected Screen |
| :---: | :--- | :--- | :---: |
| **ITER-01** | Users hesitated locating the 'Report Outdated' button at the bottom of debrief feeds (UT-01, UT-03). | **Moved 'Verify Current / Flag Outdated' action directly beside the top Company Verification Badge** in the header so it is visible without scrolling. | **Screen 3 & Screen 5** |
| **ITER-02** | Beginner aspirants missed the 'Start Here' roadmap on first glance (UT-01, UT-03). | **Elevated 'New to Placements? Start Here (4-Week Roadmap)' to a primary spotlight hero card** with a progress bar and week milestone cards on the Home screen. | **Screen 1 & Screen 2** |
| **ITER-03** | Active aspirants requested filtering by round type (Aptitude vs. Coding vs. Core) inside company dossiers (UT-04). | **Added interactive round-filter pills** ('All Rounds', 'Online Assessment', 'Technical & DSA', 'System Design & Core', 'Culture & HR') above the round timeline. | **Screen 3 & Screen 4** |
| **ITER-04** | Seniors wanted to submit quick round advice without mandatory URL inputs (UT-06). | **Added 'Skip Links (Text-Only Mode)' toggle** and made study resource URLs optional so seniors can publish high-impact interview tips in $< 3$ minutes. | **Screen 6** |

---

## 4. UI Design System Transformation (Assets Alignment)

Prototype v2 incorporates design principles from our reference benchmarks:
- **From `insp1.jpg`:** Clean macOS desktop frame with window traffic lights, dark high-contrast active navigation pills, and structured hierarchical card depth.
- **From `placement.jpg`:** Tactile placement intelligence dashboard layout, 'Overall Information' dark stat card with high-yield metrics, elevated 4-week roadmap progress spotlight, and clean monochrome company cards with high readability.

---

## 5. Hypothesis Verdict & Final Showcase Readiness (CP7)

### CP6 Hypothesis Verdict: VALIDATED (With 4 Targeted Usability Refinements)
Across 6 moderated tests, **100% of placement aspirants** successfully verified drive currency and selected curated study resources without external help, achieving a **4.75 / 5.00 average Information Trust rating** and **4.38 / 5.00 Resource Clarity rating**. Simultaneously, **100% of tested seniors** completed the asynchronous debrief flow in under 4 minutes.

Incorporating **ITER-01 through ITER-04** into Prototype v2 resolves every observed navigation friction ahead of the **Week 14 Final Showcase (CP7)**.

* **Live Deployment URL:** [https://anirudhooa.github.io/beyond-the-rumour-mill/](https://anirudhooa.github.io/beyond-the-rumour-mill/)
* **Repository:** [https://github.com/anirudhooa/beyond-the-rumour-mill](https://github.com/anirudhooa/beyond-the-rumour-mill)
