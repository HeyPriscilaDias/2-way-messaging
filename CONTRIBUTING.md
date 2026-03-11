# Contributing

## Integration tags

Code that needs to be replaced during API integration is tagged with `@integration Ryan`. To find every integration point:

```bash
grep -rn "@integration Ryan" src/
```

Each tag includes context on what to replace and how the surrounding UI expects the async flow to work (optimistic updates, error states, retry logic).

See `TODO.md` for the full checklist of integration work.
