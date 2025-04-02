
// Декоратор для логирования
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Вызов метода ${key} с аргументами: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Метод ${key} вернул: ${JSON.stringify(result)}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(2, 3); // Вызов метода add с аргументами: [2,3]
                      // Метод add вернул: 5
