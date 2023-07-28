import toCelsius from "../../src/utils//toCelsius";
import { describe, expect, it } from "vitest";

describe("#toCelsius", () => {
    it("returns a celsius number roudned to the nearest whole number from a kelvin number", () =>{
        expect(toCelsius(0)).toBe(-273);
        expect(toCelsius(150)).toBe(-123);
        expect(toCelsius(300)).toBe(26.85);
    })
})