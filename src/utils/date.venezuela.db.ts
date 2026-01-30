

export function getVzlaDateForDB(date?: Date): Date {
    const diff=4 // change if the uct is different
    const now = date ? new Date(date) : new Date();
    const fechaVzlaAdjusted = new Date(now.getTime() - diff * 60 * 60 * 1000);
    return fechaVzlaAdjusted;
}
