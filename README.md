# Bug repro

Success when:

> pnpm i
>
> node packages/B/main.mjs

Failure when:

> bazel run //packages/B:script
