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

  /**
   * Retorna una diferencia de tiempo legible en español.
   * Ejemplo: "hace 3 dias", "hace 2 meses", "hace 1 año".
   */
  static getElapsedTimeText(fromDate: Date | string | number, toDate: Date | string | number = new Date()): string {
    const start = new Date(fromDate);
    const end = new Date(toDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return 'hace 0 días';
    }

    const diffMs = Math.max(0, end.getTime() - start.getTime());
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`;
    }

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) {
      return `hace ${diffMonths} ${diffMonths === 1 ? 'mes' : 'meses'}`;
    }

    const diffYears = Math.floor(diffMonths / 12);
    return `hace ${diffYears} ${diffYears === 1 ? 'año' : 'años'}`;
  }
}