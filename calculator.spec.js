import calculator from "./calculator";

it("adding two numbers" , () => {
 const result =calculator(1,2)
 expect(result).toBe(3)
})