export class DateUtils {
  /**
   * Retorna el primer y último día del mes actual.
   * Returns the first and last day of the current month.
   */
  static getCurrentMonthRange(): { start: Date; end: Date } {
    const today = new Date();

    const start = new Date(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-01T00:00:00.000Z`);
    const end = new Date(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()}T23:59:59.999Z`);

    return { start, end };
  }

  /**
   * Retorna el primer y último día de un mes específico.
   * Returns the first and last day of a specific month.
   * @param year año / year
   * @param month mes (1-12) / month (1-12)
   */
  static getMonthRange(year: number, month: number): { start: Date; end: Date } {
    const start = new Date(`${year}-${month.toString().padStart(2, '0')}-01T00:00:00.000Z`);
    const lastDay = new Date(year, month, 0).getDate();
    const end = new Date(`${year}-${month.toString().padStart(2, '0')}-${lastDay}T23:59:59.999Z`);

    return { start, end };
  }

  /**
   * Retorna el año actual en formato completo.
   * Returns the current year in full format.
   */
  static GetYear(): string {
    const year = new Date().getFullYear();
    return `${year}`;
  }

  /**
   * Retorna el mes actual en formato MM.
   * Returns the current month in MM format.
   */
  static GetMonthMM(): string {
    const month = new Date().getMonth() + 1;
    return month.toString().padStart(2, '0');
  }
}