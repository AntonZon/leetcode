import { construct2DArray } from "./2022-Convert-1D-Array-Into-2D-Array.js";
const [expression, expected]=[[[1,2,3,4],2,2], [[1,2],[3,4]]];
console.log(construct2DArray(expression[0],expression[1],expression[2]));
// describe("construct2DArray test", () => {
//     [
//         [[[1,2,3,4],2,2], [[1,2],[3,4]]],
//         [[[1,2,3],1,3], [1,2,3]],
//         [[[1,2],1,1],[]],
//     ].forEach((it) => {
//         const [expression, expected] = it;
//         console.log(construct2DArray(expression[0],expression[1],expression[2]));
//         test(`input= ${expression[0]}, m=${expression[1]}, n=${expression[2]} => result= ${expected}`, () => {
//             const result = construct2DArray(expression[0],expression[1],expression[2]);
//             expect(result).toEqual(expected);
            
//         });
//     });
// });