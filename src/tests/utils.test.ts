import {expect, test} from 'vitest';
import {groupThenSum} from "../utils/utils.js";

test('groupBySum', () => {
    let a = {x:1}; let b = {x:2};
    let result = groupThenSum([{id: a, val: 100}, {id: a, val: 200}, {id: b, val: 50}, {id: b, val: 10}], 'id', 'val');

    expect(result.get(a)).toBe(300);
    expect(result.get(b)).toBe(60);
    }
)
