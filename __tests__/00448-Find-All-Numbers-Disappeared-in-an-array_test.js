import { findDisappearedNumbers } from "../00448-Find-All-Numbers-Disappeared-in-an-array.js";

describe("findDisappearedNumbers test", () => {
    [
        [[4,3,2,7,8,2,3,1],[5,6]],
        [[1,1],[2]],
        [[],[]],
    ].forEach((it) => {
        const [expression, expected] = it;
        test(`long array`, () => {
            const result = findDisappearedNumbers(expression);

            expect(result).toEqual(expected);
        });
    });
});