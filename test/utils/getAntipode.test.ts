import getAntipode from "../../src/utils/getAntipode"
import { describe, expect, it } from "vitest"

describe("#getAntipode", () => {
    it("returns a list of objects with weather data of a specific location", async () => {
        const returnedValue = await getAntipode(-41.500083, 172.834408);
        expect(returnedValue[0].name).toBe("Tapawera, New Zealand");
        expect(returnedValue[1].name).toBe("Mirandela Municipality, Portugal");
    })
})