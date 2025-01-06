// ------------------------------------------------------------------------------
// 📌 타입 네로우 유니언 (Type Narrowing Union Types)
// ⭐️ URL : https://bit.ly/3UyZf13
// ------------------------------------------------------------------------------
// - 타입을 좁히는(narrowing) 것은 값을 사용하기 전에 타입을 확인하는 것을 말합니다.
// - 유니언 타입을 사용할 경우 특정 타입에서만 작동하도록 코드를 나눠야 합니다.
// ------------------------------------------------------------------------------

// calcPrice 함수 내부에 구현된 로직의 오류를 확인한 후, 타입 검사에 통과하도록 타입 확인 범위를 좁혀봅니다.

{
  const calcTax = (price: string | number, tax: number = 0.1): number => {
    // 조건문을 사용해서 타입의 범위를 좁혔다.
    if (typeof price === "number") {
      price = String(price);
    }

    price = parseInt(price.replace(/(\,|원)/g, ""), 10);
    return price * tax;
  };

  calcTax(92_000);
  calcTax("10,749,500원", 0.33);
}
