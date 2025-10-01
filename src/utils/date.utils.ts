export class DateUtils {
  /**
   * Retorna el primer y último día del mes actual.
   * Returns the first and last day of the current month.
   */
  static getCurrentMonthRange(): { start: Date; end: Date } {
    const today = new Date();

    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 0, 0); 

    return { start, end };
  }
  /**
   * Retorna el primer y último día de un mes específico.
   * Returns the first and last day of a specific month.
   * @param year año / year
   * @param month mes (1-12) / month (1-12)
   */
  static getMonthRange(
    year: number,
    month: number,
  ): { start: Date; end: Date } {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0, 23, 59, 59, 999);

    return { start, end };
  }
}
