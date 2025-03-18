import { findDisappearedNumbers } from "../00448-Find-All-Numbers-Disappeared-in-an-array.js";

xdescribe("findDisappearedNumbers test", () => {
    [
        [[4,3,2,7,8,2,3,1], [5,6]],
        [[1,1], [2]],
      //  [[1, 1, 1, 2, 2, 2, 3, 3, 4], true],
    ].forEach((it) => {
        const [expression, expected] = it;
        test('x', () => {
            const result = findDisappearedNumbers(expression);

            expect(result).toEqual(expected);
        });
    });
});