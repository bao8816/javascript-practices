export const CELSIUS = 'C';
export const FAHRENHEIT = 'F';
export const KELVIN = 'K';

export function convert(temperature, fromUnit, toUnit) {
    let unitArray = [CELSIUS, FAHRENHEIT, KELVIN];
    let result = temperature;

    if (typeof (temperature) != 'number')
        throw new Error("The \"temperature\" is not a number")

    if (!unitArray.includes(fromUnit) || !unitArray.includes(toUnit))
        throw new Error("The \"from\" or \"to\" parameter is not a valid temperature unit")

    // From C
    if (fromUnit === 'C') {
        if (toUnit === 'F') {
            result = result * (9/5) + 32;
        }

        if (toUnit === 'K') {
            result = result + 273.15;
        }
    }

    // From F
    if (fromUnit === 'F') {
        if (toUnit === 'C') {
            result = (result - 32) * (5/9);
        }

        if (toUnit === 'K') {
            result = (result + 459.67) * (5/9);
        }
    }

    // From K
    if (fromUnit === 'K') {
        if (toUnit === 'C') {
            result = result - 273.15;
        }

        if (toUnit === 'F') {
            result = (result - 273.15) * 1.8 + 32;
        }
    }

    return Math.round(result * 100) / 100;
}

//DONE
