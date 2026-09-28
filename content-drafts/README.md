# Content Drafts

Staging area for all copy before it goes live. Never edit live app files
directly with new content — draft here, get approval, then apply.

## Folder structure

| Folder | Contains |
|---|---|
| `services/` | Service page drafts (one `.md` per service slug) |
| `locations/` | Location page drafts (one `.md` per city slug) |
| `blog/` | Blog post drafts (one `.md` per post slug) |
| `home/` | Homepage section drafts |

## Naming convention

```
services/ceramic-coating.md
locations/cottage-grove-or.md
blog/how-long-does-ceramic-coating-last.md
home/hero-copy.md
```

## Draft format

Each draft file follows the skill output format (SKILL.md § 13):
1. ASSUMPTIONS
2. PAGE CONTENT (all sections from blueprint)
3. META PACKAGE
4. JSON-LD SUGGESTION
5. REAL DETAILS NEEDED
6. INTERNAL LINK SUGGESTIONS

## Workflow

1. Run `/write-page` or `/audit-page` to generate a draft
2. Draft is saved here for review
3. Owner reviews and provides missing [PLACEHOLDER] facts
4. Once approved, apply to live files in `app/` and `lib/data/`
5. Run `npx tsc --noEmit` to verify no TypeScript errors
6. Archive or delete the draft file after going live
