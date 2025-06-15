import {expect, test} from 'vitest';
import {dayOfWeek, getMonthName, isHoliday, isWorkDay, newDate} from "../utils/dateUtils.ts";

test('getMonthName_1', () => {
    expect(getMonthName(1)).toBe('Январь')
    }
)

test('dayOfWeek', () => {
    expect(dayOfWeek(newDate(2025, 6, 13))).toBe(5)
    }
)

test('isHoliday', () => {
    expect(isHoliday(newDate(2025, 6, 13))).toBe(false)
    }
)

test('isWorkDay', () => {
    expect(isWorkDay(newDate(2025, 6, 13))).toBe(true)
    }
)