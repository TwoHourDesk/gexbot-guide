/** Toy European Black-Scholes. Not Gexbot. */

function nPdf(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function nCdf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  const t = 1 / (1 + p * Math.abs(x));
  const y =
    1 -
    ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x / 2);
  return 0.5 * (1 + sign * y);
}

export function d1(
  spot: number,
  strike: number,
  tYears: number,
  vol: number,
  rate = 0,
): number {
  const t = Math.max(tYears, 1 / 365 / 24);
  return (Math.log(spot / strike) + (rate + 0.5 * vol * vol) * t) / (vol * Math.sqrt(t));
}

export function callDelta(spot: number, strike: number, tYears: number, vol: number): number {
  return nCdf(d1(spot, strike, tYears, vol));
}

export function putDelta(spot: number, strike: number, tYears: number, vol: number): number {
  return callDelta(spot, strike, tYears, vol) - 1;
}

export function gamma(spot: number, strike: number, tYears: number, vol: number): number {
  const t = Math.max(tYears, 1 / 365 / 24);
  return nPdf(d1(spot, strike, tYears, vol)) / (spot * vol * Math.sqrt(t));
}

export function callPayoff(spot: number, strike: number): number {
  return Math.max(spot - strike, 0);
}

export function putPayoff(spot: number, strike: number): number {
  return Math.max(strike - spot, 0);
}
