function convertTemperature() {
    const input = parseFloat(document.getElementById("input").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (input * 9/5) + 32;
    } else {
        result = (input - 32) * 5/9;
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)}° ${unit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}
