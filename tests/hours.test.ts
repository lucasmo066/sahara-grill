import assert from "node:assert/strict";
import test from "node:test";
import { isRestaurantOpen } from "../src/lib/hours";

for (const [label, time, expected] of [
  ["closed on Sunday", "2026-10-04T16:00:00Z", false],
  ["closed on Monday", "2026-10-05T16:00:00Z", false],
  ["before opening in Eastern daylight time", "2026-10-06T14:59:00Z", false],
  ["opens at 11AM Eastern", "2026-10-06T15:00:00Z", true],
  ["open just before weekday closing", "2026-10-07T23:59:00Z", true],
  ["closed exactly at 8PM on weekdays", "2026-10-08T00:00:00Z", false],
  ["Friday stays open until 9PM", "2026-10-10T00:59:00Z", true],
  ["Friday closes exactly at 9PM", "2026-10-10T01:00:00Z", false],
  ["winter opening uses Eastern standard time", "2026-12-01T16:00:00Z", true],
  ["winter before opening", "2026-12-01T15:59:00Z", false],
] as const) {
  test(label, () => assert.equal(isRestaurantOpen(new Date(time)), expected));
}
