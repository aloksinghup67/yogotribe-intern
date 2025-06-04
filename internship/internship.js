const express = require('express');
const app = express();
const port = 3000;

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
app.get('/', (req, res) => {
    res.send('Welcome to the Prime Checker API! Use /check/{number} to check if a number is prime.');
});

app.get('/check/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number)) {
        return res.status(400).send({ error: 'Invalid number' });
    }
    res.send({ number, isPrime: isPrime(number) });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});