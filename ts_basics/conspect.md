### Конспект по основам TypeScript для опытных программистов

TypeScript — это типизированное надмножество JavaScript, которое добавляет статическую типизацию и другие возможности, такие как классы, интерфейсы и декораторы. TypeScript компилируется в обычный JavaScript, что делает его совместимым с любым браузером или средой выполнения.

---

### 1. **Основы синтаксиса**
- **Переменные**: Используйте `let`, `const` с указанием типов.
  ```typescript
  let x: number = 10;
  const y: string = "Hello";
  ```

- **Типы данных**: TypeScript добавляет статическую типизацию.
  - Примитивные типы: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
  - Специальные типы: `any`, `void`, `never`, `unknown`.
  - Объекты: `object`, `array`, `function`.

- **Операторы**: Аналогичны JavaScript.

- **Условные операторы и циклы**: Синтаксис такой же, как в JavaScript.

---

### 2. **Функции**
- **Объявление функций с типами**:
  ```typescript
  function myFunction(param1: number, param2: number): number {
      return param1 + param2;
  }
  ```

- **Стрелочные функции**:
  ```typescript
  const myFunction = (param1: number, param2: number): number => param1 + param2;
  ```

- **Необязательные и параметры по умолчанию**:
  ```typescript
  function greet(name: string, greeting: string = "Hello"): string {
      return `${greeting}, ${name}`;
  }
  ```

---

### 3. **Объекты и массивы**
- **Объекты с типами**:
  ```typescript
  const obj: { key1: string, key2: number } = {
      key1: 'value1',
      key2: 42
  };
  ```

- **Массивы с типами**:
  ```typescript
  const arr: number[] = [1, 2, 3];
  const arr2: Array<number> = [1, 2, 3]; // Альтернативный синтаксис
  ```

---

### 4. **Интерфейсы**
- **Определение интерфейсов**:
  ```typescript
  interface User {
      id: number;
      name: string;
      email?: string; // Необязательное свойство
  }

  const user: User = {
      id: 1,
      name: 'John Doe'
  };
  ```

---

### 5. **Классы**
- **Объявление классов**:
  ```typescript
  class MyClass {
      private param: string;

      constructor(param: string) {
          this.param = param;
      }

      public myMethod(): string {
          return this.param;
      }
  }

  const instance = new MyClass('value');
  console.log(instance.myMethod());
  ```

- **Наследование**:
  ```typescript
  class ChildClass extends MyClass {
      constructor(param: string) {
          super(param);
      }
  }
  ```

---

### 6. **Generics**
- **Использование дженериков**:
  ```typescript
  function identity<T>(arg: T): T {
      return arg;
  }

  const output = identity<string>("Hello");
  ```

---

### 7. **Модули**
- **Экспорт**:
  ```typescript
  // module.ts
  export const myFunction = (): void => { /* код */ };
  export default myFunction;
  ```

- **Импорт**:
  ```typescript
  import { myFunction } from './module';
  import myFunction from './module';
  ```

---

### 8. **Асинхронность**
- **Промисы (Promises)**:
  ```typescript
  fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  ```

- **Async/Await**:
  ```typescript
  async function fetchData(): Promise<void> {
      try {
          const response = await fetch('https://api.example.com/data');
          const data = await response.json();
          console.log(data);
      } catch (error) {
          console.error(error);
      }
  }
  ```

---

### 9. **Декораторы**
- **Использование декораторов**:
  ```typescript
  function log(target: any, key: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;

      descriptor.value = function(...args: any[]) {
          console.log(`Calling ${key} with`, args);
          return originalMethod.apply(this, args);
      };

      return descriptor;
  }

  class MyClass {
      @log
      myMethod(param: string): void {
          console.log(param);
      }
  }
  ```

---

### 10. **Полезные инструменты**
- **TSLint / ESLint**: Для проверки качества кода.
- **tsconfig.json**: Конфигурационный файл для настройки компилятора TypeScript.
- **Инструменты разработчика в браузере**: Полезны для отладки и анализа кода.

---

### 11. **Популярные библиотеки и фреймворки**
- **Angular**: Фреймворк, который активно использует TypeScript.
- **React**: Может использоваться с TypeScript для типизации пропсов и состояния.
- **Node.js**: TypeScript может использоваться для серверной разработки.

---

### 12. **Ресурсы для углубленного изучения**
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/) — официальная документация.
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) — подробный учебник.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — руководство по TypeScript.

---

Этот конспект охватывает основные концепции TypeScript, которые помогут вам быстро начать писать типизированный код. Удачи в изучении! 🚀