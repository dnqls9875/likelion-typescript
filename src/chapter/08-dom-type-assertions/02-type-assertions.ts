// ------------------------------------------------------------------------------
// 📌 타입 단언 (Type Assertions)
// ⭐️ URL : https://bit.ly/3g3DtmU
// ------------------------------------------------------------------------------
// - `as` 키워드를 사용해 사용자가 타입을 단언하면 TypeScript는 더 이상 경고하지 않습니다.
// - `<TYPE>data` 방법을 사용해 `as` 키워드 방법을 대체할 수 있습니다.
// ------------------------------------------------------------------------------

// unknown 타입이라 알 수 없는 iDontKnow 타입을 단언해봅니다.

{
  let iDontKnow: unknown = '어떤 타입인지 알 수 없어요.';

  let numberOfCharacters = (iDontKnow as string).length;  // & 괄호로 묶어 단언해 줄 수 있다.

  console.log(numberOfCharacters);
}

// body가 참조하는 타입을 단언해봅니다.
// 타입에 대한 명시적으로 지정하자 vs 타입 추론이 가능한 건 타입을 지정하지 말자에 대한 컨벤션 규칙에 의견 대립이 있을 것 같다.
{
  const body: HTMLBodyElement | null = document.querySelector('body') as HTMLBodyElement;

  body.addEventListener('click', (e) => {
    console.log('clicked body element');
  });
}
