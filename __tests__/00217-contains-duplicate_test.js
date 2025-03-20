import { containsDuplicate } from "../00217-contains-duplicate.js";

xdescribe("containsDuplicate test", () => {
    [
        [[1, 2, 3, 1], true],
        [[1, 2, 3, 4], false],
        [[1, 1, 1, 2, 2, 2, 3, 3, 4], true],
        [[1,2,3,4,5,6,7,8,1],true],
        [Array(10^7).fill().map((element, index) => index + 5)
        ,false],
    ].forEach((it) => {
        const [expression, expected] = it;
        test(`${expression}`, () => {
            const result = containsDuplicate(expression);

            expect(result).toEqual(expected);
        });
    });
});