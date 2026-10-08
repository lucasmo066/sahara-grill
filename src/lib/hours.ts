export const openingHours = [
  { days: "Sunday – Monday", hours: "Closed" },
  { days: "Tuesday – Thursday", hours: "11AM – 8PM" },
  { days: "Friday – Saturday", hours: "11AM – 9PM" },
];

// Restaurant hours always use Woodstock time, regardless of the visitor's timezone.
export function isRestaurantOpen(now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((value) => value.type === type)?.value;
  const day = part("weekday");
  const minutes = Number(part("hour")) * 60 + Number(part("minute"));
  const closing = day === "Fri" || day === "Sat" ? 21 * 60 : 20 * 60;
  return (
    ["Tue", "Wed", "Thu", "Fri", "Sat"].includes(day ?? "") &&
    minutes >= 11 * 60 &&
    minutes < closing
  );
}
