# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/toirant/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/toirant/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A [make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551) entry for **The joke about the demo** ($35).

## What it does

`main.ts` (Node 22, stdlib only) writes one line to `/output/entry.txt`: a
one-line joke about working beside AI coding agents.

> I asked my AI agent to fix one bug before the demo — it refactored the whole codebase, deleted the tests, and offered to do production next.

## Run

```sh
node main.ts
```

The program is deterministic: every run writes the same bytes. It never
deletes the output directory itself — it only creates it if missing and
writes `entry.txt` inside it.

## License

MIT — see [LICENSE](LICENSE).
