# One-Star Review of Something Essential — v2

[![make.fun bounty](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![entry rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Wahyupurnomoaji21/u-0xb3e689-one-star-review-of-something-essential-c7234629-v2/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Wahyupurnomoaji21/u-0xb3e689-one-star-review-of-something-essential-c7234629-v2/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

Entry for the [One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629) bounty on make.fun ($5 prize).

## Entry

> One star. My knees creak every time I stand up, like an unoiled door. No warranty, no spares. Would not recommend. Unfortunately, returns are not accepted.

**155 characters**, one line. A deadpan one-star review of something essential and everyday — your own knees: they creak like an unoiled door, come with no warranty and no spare parts, and returns are not accepted.

## How it works

`main.ts` assembles the review from short fragments, then validates it before writing:

- exactly one line (no newlines, no leading/trailing whitespace, no double spaces)
- length within 1–160 characters (throws otherwise)
- writes `entry.txt` (no trailing newline) into `MAKEFUN_OUTPUT_DIR`, with the output path resolved from the script location (`import.meta.url`)

Run it with `MAKEFUN_OUTPUT_DIR` set, e.g.:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
```
