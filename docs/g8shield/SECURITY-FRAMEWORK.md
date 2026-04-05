# G8Shield — Security Intelligence Framework

> **Status:** Draft — Pending SME Validation
> **Author:** Nasrul Hazim
> **Date:** 2026-04-05
> **Purpose:** Define the security framework, threat model, and solution scope before any code is written. This document should be reviewed and validated by a security SME.

---

## 1. What is G8Shield?

G8Shield is an **API Security Intelligence** product — part of the G8Stack ecosystem. It is a standalone application (not a gateway plugin) that provides continuous security monitoring, threat detection, compliance reporting, and risk scoring for API estates.

### Position in G8Stack Ecosystem

```
G8Connect  → Generates APIs from data sources
G8Stack    → Governs API lifecycle & deployment
G8Monitor  → Observability via Elastic Stack
G8Shield   → Security intelligence & compliance  ← THIS DOCUMENT
```

### What G8Shield is NOT

- NOT a replacement for gateway security (auth, rate limiting, TLS)
- NOT a WAF (Web Application Firewall)
- NOT a SIEM (but integrates with SIEMs)
- NOT a penetration testing tool

---

## 2. Threat Model

### 2.1 What Are We Protecting?

| Asset | Description |
|---|---|
| API Endpoints | Registered and unregistered routes serving data |
| Sensitive Data | PII, credentials, tokens, financial data flowing through APIs |
| API Configurations | Security policies, access controls, rate limits |
| Compliance Posture | Adherence to regulatory frameworks (PCI-DSS, GDPR, SOC2, PDPA) |
| API Inventory | Complete map of all APIs in the environment |

### 2.2 Threat Categories

| # | Threat Category | Description | OWASP API Top 10 |
|---|---|---|---|
| T1 | **Shadow APIs** | Undocumented, forgotten, or unmanaged API endpoints | API9:2023 — Improper Inventory Management |
| T2 | **Slow/Low Attacks** | Credential stuffing, enumeration, scraping at rates below detection thresholds | API2:2023 — Broken Authentication |
| T3 | **Sensitive Data Exposure** | PII, credentials, or tokens leaked in API responses | API3:2023 — Broken Object Property Level Authorization |
| T4 | **Business Logic Abuse** | Exploiting API workflows (e.g., cart manipulation, coupon abuse, rate abuse) | API6:2023 — Unrestricted Access to Sensitive Business Flows |
| T5 | **Configuration Drift** | Security policies changed, weakened, or removed without approval | API8:2023 — Security Misconfiguration |
| T6 | **Compliance Gaps** | APIs not meeting regulatory requirements (PCI-DSS, GDPR, SOC2, PDPA) | N/A — Regulatory |
| T7 | **Coordinated Attacks** | Multi-vector attacks across endpoints, IPs, and time windows | Multiple |
| T8 | **Excessive Data Exposure** | APIs returning more data than needed by the consumer | API3:2023 |

### 2.3 Threat Actors

| Actor | Motivation | Typical Attack |
|---|---|---|
| External attacker | Financial gain, data theft | Credential stuffing, data scraping, injection |
| Insider (malicious) | Data exfiltration | Excessive data access via legitimate API keys |
| Insider (negligent) | Unintentional exposure | Deploying debug endpoints, leaking PII in responses |
| Automated bots | Scraping, enumeration | High-volume, low-and-slow pattern attacks |
| Compliance auditor | Verification | Requesting evidence of security controls |

---

## 3. Security Domains

G8Shield covers **six security domains**. Each domain has a clear scope, data sources, detection methods, and response actions.

### Domain 1: API Discovery & Inventory

**Problem:** You can't protect what you can't see.

| Aspect | Detail |
|---|---|
| **Scope** | Discover all API endpoints — registered and unregistered |
| **Data Source** | Traffic logs (Elastic Stack), gateway route registry |
| **Detection Method** | Compare observed traffic endpoints vs registered API inventory |
| **Output** | Complete API inventory with risk classification |
| **Response** | Flag unregistered APIs, assign risk score, alert owner |

**Key Questions for SME:**
- How do we handle API versioning in discovery (v1, v2 of same endpoint)?
- Should we detect internal-only APIs exposed externally?
- What risk scoring model? (CVSS-like? Custom weighted?)

---

### Domain 2: Threat Detection & Attack Correlation

**Problem:** Individual requests look valid. The pattern is the attack.

| Aspect | Detail |
|---|---|
| **Scope** | Detect credential stuffing, enumeration, scraping, business logic abuse |
| **Data Source** | Traffic logs, authentication events, response codes |
| **Detection Method** | Behavioural analysis — correlate across requests, endpoints, IPs, time |
| **Output** | Attack incidents with timeline, severity, affected endpoints |
| **Response** | Alert, auto-block IP/key, rate limit, disable endpoint |

**Detection Rules (Initial Set — Needs SME Validation):**

| Rule | Signal | Threshold (Draft) |
|---|---|---|
| Credential stuffing | High 401 rate from single IP/fingerprint | > 50 failed logins in 5 min |
| Account enumeration | Sequential user ID probing | > 20 sequential IDs in 1 min |
| API scraping | Systematic pagination exhaustion | Full dataset download in < 1hr |
| Business logic abuse | Abnormal workflow sequences | e.g., 100 coupon applies per session |
| Brute force (slow) | Sustained low-rate failed auth | > 500 failed logins in 24hr from rotating IPs |

**Key Questions for SME:**
- What detection thresholds are appropriate for Malaysian/SEA context?
- Should we use ML-based anomaly detection or rule-based initially?
- How do we handle false positives without blocking legitimate users?
- What fingerprinting techniques beyond IP? (TLS fingerprint, device fingerprint?)

---

### Domain 3: Sensitive Data Monitoring

**Problem:** APIs leak PII and nobody knows until it's reported.

| Aspect | Detail |
|---|---|
| **Scope** | Scan API response bodies for sensitive data patterns |
| **Data Source** | API response payloads (sampled or full) |
| **Detection Method** | Pattern matching — regex + context-aware rules |
| **Output** | Data exposure alerts with endpoint, field, data type |
| **Response** | Alert, optionally auto-block endpoint |

**Sensitive Data Patterns (Draft):**

| Pattern | Example | Regex/Detection |
|---|---|---|
| Malaysian IC (NRIC) | 880101-01-1234 | `\d{6}-\d{2}-\d{4}` |
| Credit card | 4111 1111 1111 1111 | Luhn algorithm + `\d{13,19}` |
| Email address | user@domain.com | Standard email regex |
| Phone (MY) | +60123456789 | `\+?60\d{9,10}` |
| Password hash | $2y$10$... | bcrypt/argon2 prefix detection |
| API key/token | Bearer eyJ... | JWT prefix, API key patterns |
| Bank account | 1234567890 | Context-dependent |

**Key Questions for SME:**
- Should we scan ALL responses or sample? Performance implications?
- How to handle encrypted/tokenised fields? (Don't flag them as leaks)
- What about base64-encoded PII?
- Should we support custom pattern definitions per client?
- Data residency — do we store flagged data or only metadata?

---

### Domain 4: Compliance Mapping & Reporting

**Problem:** Audits are painful, reactive, and manual.

| Aspect | Detail |
|---|---|
| **Scope** | Map API security posture to compliance frameworks |
| **Data Source** | Gateway configs, G8Stack policies, G8Shield findings |
| **Detection Method** | Framework-specific control checklist evaluation |
| **Output** | Compliance score, gap report, evidence trail |
| **Response** | Generate auditor-ready reports, alert on drift |

**Supported Frameworks (Draft):**

| Framework | Key API Controls |
|---|---|
| **PCI-DSS v4.0** | Encryption in transit, auth enforcement, access logging, data masking |
| **GDPR** | Data minimisation, consent, right to erasure, breach notification |
| **SOC2 (Type II)** | Access controls, monitoring, incident response, change management |
| **PDPA (Malaysia)** | Personal data protection, consent, cross-border transfer |

**Key Questions for SME:**
- Which specific PCI-DSS requirements map to API security? (Req 1, 2, 3, 4, 6, 7, 8, 10?)
- How do we define "compliant" vs "partially compliant" vs "non-compliant"?
- What evidence format do auditors expect? (PDF? CSV? API?)
- Should compliance checks run continuously or on-demand?

---

### Domain 5: Security Posture Scoring

**Problem:** "How secure are we?" has no answer.

| Aspect | Detail |
|---|---|
| **Scope** | Risk score per API, per service, per organisation |
| **Data Source** | All other domains' findings |
| **Detection Method** | Weighted scoring model |
| **Output** | Risk scores (0-100), trends over time, comparisons |
| **Response** | Dashboard, executive reports, threshold alerts |

**Scoring Model (Draft — Needs SME Validation):**

| Factor | Weight | Scoring |
|---|---|---|
| Authentication strength | 20% | None=0, API key=40, OAuth=70, mTLS=100 |
| Data sensitivity | 20% | Based on PII patterns detected in responses |
| Traffic anomalies | 15% | Based on threat detection findings |
| Compliance status | 20% | Based on framework gap analysis |
| Configuration drift | 10% | Time since last policy review, unapproved changes |
| API documentation | 5% | Is the API registered, documented, versioned? |
| Exposure surface | 10% | Public vs internal, number of consumers |

**Key Questions for SME:**
- Is this weighting model reasonable?
- Should scoring be absolute (0-100) or relative (compared to peers)?
- What thresholds define Critical / High / Medium / Low risk?
- How often should scores be recalculated?

---

### Domain 6: Incident Response & Automation

**Problem:** Alerts without action are just noise.

| Aspect | Detail |
|---|---|
| **Scope** | Automated and manual response to detected threats |
| **Data Source** | Threat detection and data monitoring findings |
| **Detection Method** | N/A — this domain acts on findings from other domains |
| **Output** | Enforcement actions, incident records |
| **Response** | Block, rate limit, disable, alert, report |

**Response Actions (Draft):**

| Action | Automation Level | Mechanism |
|---|---|---|
| Block IP | Auto / Manual | Gateway Admin API |
| Revoke API key | Manual (dangerous) | Gateway Admin API |
| Rate limit endpoint | Auto / Manual | Gateway Admin API |
| Disable endpoint | Manual | Gateway Admin API |
| Alert SOC team | Auto | Webhook / SIEM integration |
| Create incident | Auto | Internal incident record |
| Generate report | Auto / On-demand | PDF / JSON export |

**Key Questions for SME:**
- Which actions are safe to automate? Which must be manual?
- How do we handle automated blocking false positives? (Auto-unblock after X minutes?)
- What SIEM formats should we support? (CEF, LEEF, JSON?)
- Should we integrate with incident management tools? (PagerDuty, Opsgenie, etc.)

---

## 4. Architecture (High-Level)

```
┌──────────────────────────────────────────────────┐
│                   G8Shield App                    │
│                                                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────────────┐  │
│  │Discovery│  │ Threat  │  │   Sensitive     │  │
│  │ Engine  │  │Detector │  │ Data Scanner    │  │
│  └────┬────┘  └────┬────┘  └───────┬─────────┘  │
│       │            │               │             │
│  ┌────┴────┐  ┌────┴────┐  ┌──────┴──────────┐  │
│  │Compliance│  │ Posture │  │   Incident     │  │
│  │ Mapper  │  │ Scorer  │  │   Responder    │  │
│  └─────────┘  └─────────┘  └────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │           Core Data Store               │    │
│  │  (Events, Scores, Inventory, Reports)   │    │
│  └──────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘
        │              │              │
        ▼              ▼              ▼
  ┌──────────┐  ┌────────────┐  ┌──────────┐
  │  API     │  │  Elastic   │  │ G8Stack  │
  │ Gateway  │  │  Stack     │  │Governance│
  └──────────┘  └────────────┘  └──────────┘
```

**Key Questions for SME:**
- Should data store be PostgreSQL, or do we need a time-series DB (ClickHouse, TimescaleDB)?
- How much traffic data should we retain? (30 days? 90 days? Configurable?)
- Performance: can we scan response bodies in real-time or should it be async?

---

## 5. What We Need From the Security SME

1. **Validate the threat model** — Are we covering the right threats? Missing anything critical?
2. **Review detection rules** — Are the thresholds reasonable? What rules are we missing?
3. **Validate sensitive data patterns** — Especially for Malaysian context (NRIC, bank formats)
4. **Review compliance mappings** — Which specific controls in each framework apply to APIs?
5. **Validate scoring model** — Are the weights and factors appropriate?
6. **Define automation boundaries** — What's safe to auto-respond? What must be manual?
7. **Architecture input** — Data retention, performance constraints, scaling considerations

---

## 6. Next Steps

1. [ ] Share this document with security SME for review
2. [ ] Schedule validation session
3. [ ] Incorporate SME feedback into v2 of this framework
4. [ ] Define MVP scope (which domains ship first?)
5. [ ] Create technical specification
6. [ ] Begin development

---

## Appendix: OWASP API Security Top 10 (2023) Coverage

| # | OWASP API Risk | G8Shield Domain | Coverage |
|---|---|---|---|
| API1 | Broken Object Level Authorization | Threat Detection | Partial — detects enumeration patterns |
| API2 | Broken Authentication | Threat Detection | Yes — credential stuffing, brute force |
| API3 | Broken Object Property Level Authorization | Data Monitoring | Yes — excessive data exposure |
| API4 | Unrestricted Resource Consumption | Threat Detection | Yes — scraping, abuse patterns |
| API5 | Broken Function Level Authorization | Threat Detection | Partial — detects privilege escalation attempts |
| API6 | Unrestricted Access to Sensitive Business Flows | Threat Detection | Yes — business logic abuse |
| API7 | Server Side Request Forgery | Out of scope | Gateway/WAF responsibility |
| API8 | Security Misconfiguration | Compliance + Posture | Yes — config drift, policy gaps |
| API9 | Improper Inventory Management | Discovery | Yes — shadow API detection |
| API10 | Unsafe Consumption of APIs | Out of scope | Client-side responsibility |
