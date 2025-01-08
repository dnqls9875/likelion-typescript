// --------------------------------------------------------------------------
// 📌 제네릭 (Generics)
// ⭐️ URL: https://bit.ly/3Tycs8T
// --------------------------------------------------------------------------
// - 제네릭은 하나 이상의 여러 타입으로 작동하는 재사용 가능한 함수 또는 클래스를 정의할 수 있습니다.
// - 처음엔 문법이 생소해 이해하고 사용하는데 어려움이 있지만, 자주 사용되므로 학습이 필요합니다.
// ! - 제네렉을 사용하면 함수 또는 클래스를 사용자가 사용할 때, 단 하나의 타입이 아닌 사용자가 전달한 타입으로 지정할 때.
// --------------------------------------------------------------------------

// const element = document.querySelector(".container") as HTMLSpanElement;

{
  // 명시적인 타입 에너테이션 (Type Annotation)
  // TypeScript 타입 추론 (Type Inference)
  const numbers: Array<number> = [-2, 13, 9];
  const colors: Array<string> = ["제네릭", "함수", "클래스"];

  function push<T>(list: T[], item: T): T[] {
    list.push(item);
    return list;
  }

  // ? if문으로 type 발리데이션 검사를 하는 거랑 비교해보면 된다.
  // ? if(typeof === 'string' || typeof === 'number'){
  // ?   list.push(item) 등등
  // ? }
  // ? 조건이 추가되면 코드가 길어지고 가독성이 떨어진다.
  // ? 하지만 타입은 간편하게 아래 제너릭으로 추가 가능

  push<string | number>(["hey"], 100);
  // colors.splice(1, 1, 100 + "");
}
