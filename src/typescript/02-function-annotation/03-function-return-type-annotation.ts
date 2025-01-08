// ---------------------------------------------------------------------------------
// 📌 함수 반환 값과 타입(Function return Value & Type)
// ⭐️ URL : https://bit.ly/3E1XvpT
// ---------------------------------------------------------------------------------
// - 반환 값의 타입을 지정할 수 있습니다.
// - TypeScript는 반환 값 또한 추론(inference)하지만, 명시적인 것을 선호한다면 타입을 지정합니다.
// - 반환 값의 타입은 매개변수 목록 뒤에 추가합니다.
// ---------------------------------------------------------------------------------

{
  // fibonacci 함수의 반환 값 타입을 지정해봅니다.
  const fibonacci = (n: number): number => {
    if (n < 1) return 0;
    if (n < 3) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
  };

  let fibo16 = fibonacci(16);

  console.log(fibo16);

  // fibo16();
  // fibo16.tolowerCase();
}

{
  function multiply(n: number, m: number): number {
    return n * m;
    // return undefined; => void
  }

  // * void는 함수가 아무것도 반환하지 않았다.
  // 이런! 오류가 발생했네요.
  // 오류 원인을 파악하여 문제를 해결해봅니다.
  let result = multiply(10, 20).toString();
  console.log(result);
}
