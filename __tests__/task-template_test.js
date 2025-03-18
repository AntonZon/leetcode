import { functionName } from "../task-template.js";

describe("functionName test", () => {
    [
        //[[1, 2, 3, 1], true],
       // [[1, 2, 3, 4], false],
      //  [[1, 1, 1, 2, 2, 2, 3, 3, 4], true],
    ].forEach((it) => {
        const [expression, expected] = it;
        test('x', () => {
            const result = functionName(expression);

            expect(result).toEqual(expected);
        });
    });
});