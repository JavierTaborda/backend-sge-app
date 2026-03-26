/**
 * Calculates the final amount after applying discounts.
 * Discounts are provided as a string like "10+5" (10% + 5%).
 * Each discount is applied sequentially to the amount.
 *
 * @param amount - The original amount
 * @param desc - The discount string (e.g., "10+5")
 * @returns The final amount after discounts
 */
export const CalculateDesc = (amount: number, desc: string): number => {
  if (!desc) return amount;

  const discounts = desc.trim().split('+').map(Number); // [N, N] array split

  let finalAmount = amount;
  for (const d of discounts) {
    finalAmount -= finalAmount * (d / 100); // aplica cada descuento
  }
  return finalAmount;
};