import { construct2DArray } from "../2022-Convert-1D-Array-Into-2D-Array.js";

xdescribe("construct2DArray test", () => {
    [
        [[1,2,3,4],2,2, [[1,2],[3,4]]],
        [[1,2,3],1,3, [1,2,3]],
        [[1,2],1,1,[]],
    ].forEach((it) => {
        const [expression, expected] = it;
        test('x', () => {
            const result = functionName(expression);

            expect(result).toEqual(expected);
        });
    });
});