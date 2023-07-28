import toFahrenheit from "../../src/utils/toFahrenheit"
import { describe, expect, it } from "vitest";

describe("#toFahrenheit", () => {
    it("returns a fahrenheit number rounded to the nearest whole number from a kelvin number", () => {
        expect(toFahrenheit(0)).toBe(-460);
        expect(toFahrenheit(150)).toBe(-190);
        expect(toFahrenheit(300)).toBe(80);
        expect(toFahrenheit(450)).toBe(350);
    })
})