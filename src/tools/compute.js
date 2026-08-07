// PER-SITE FILE — the calculator math for this niche.
// Contract: compute(values) -> { status: "<statusId>", outputs: { "<outputId>": { value, note? } } }
export function compute(v) {
  const sum = (v.a || 0) + (v.b || 0);
  return {
    status: sum >= 0 ? 'ok' : 'warn',
    outputs: { sum: { value: String(sum) } }
  };
}
