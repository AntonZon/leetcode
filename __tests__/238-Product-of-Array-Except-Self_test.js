import { productExceptSelf } from "../238-Product-of-Array-Except-Self.js";

describe("productExceptSelf test", () => {
    [
        [[1,2,3,4], [24,12,8,6]],
        [[-1,1,0,-3,3], [0,0,9,0,0]],
        // [[1, 1, 1, 2, 2, 2, 3, 3, 4], true],
        // [[1,2,3,4,5,6,7,8,1],true],
        // [Array(10^7).fill().map((element, index) => index + 5)
        // ,false],
    ].forEach((it) => {
        const [expression, expected] = it;
        test(`${expression}`, () => {
            const result = productExceptSelf(expression);

            expect(result).toEqual(expected);
        });
    });
});