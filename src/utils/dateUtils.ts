const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export function getMonthName(monthNumber: number): string {
    return monthNames[monthNumber-1]
}

export function startOfMonthDate(year: number, month: number): Date {
    return new Date(year, month-1, 1);
}

export function endOfMonthDate(year: number, month: number): Date {
    return new Date(year, month, 0);
}

export function startOfYearDate(year: number): Date {
    return new Date(year, 0, 1);
}

export function endOfYearDate(year: number): Date {
    return new Date(year, 11, 31);
}

/**
 * Возвращает день недели указанной даты: 1 - понедельник, и т.д.
 * */
export function dayOfWeek(date: Date): number {
    let d = new Date(date).getDay();
    if (d === 0) d = 7;
    return d;
}

export function isWorkDay(date: Date): boolean {
    let dow = dayOfWeek(date);
    return dow >= 1 && dow <= 5;
}

export function isHoliday(date: Date): boolean {
    let dow = dayOfWeek(date);
    return dow === 6 || dow === 7;
}

export function getCurrentYear(): number {
    return new Date().getFullYear();
}

export function getCurrentMonth(): number {
    return new Date().getMonth()+1;
}

/**
 * Возвращает объект даты
 * @param year
 * @param month параметр должен быть в диапазоне 1-12
 * @param day
 */
export function newDate(year: number, month: number, day: number): Date {
    return new Date(year, month-1, day);
}