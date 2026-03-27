# TODO (Next 24–48h)

1. [ ] Implement in-memory RoutineStore with CRUD basics.
2. [ ] Add `markCompleted(routineId, date)` with duplicate-date protection.
3. [ ] Implement streak calculations (current + longest).
4. [ ] Add endpoints: `POST /routines`, `POST /routines/:id/complete`, `GET /routines`.
5. [ ] Add request validation + typed errors.
6. [ ] Add unit tests for streak edge cases (gaps, duplicates, timezone boundaries).
7. [ ] Add integration tests for core API flows.
8. [ ] Add optional JSON file persistence via env flag.
9. [ ] Add simple CLI summary command.
10. [ ] Add GitHub Actions workflow for build + test.
