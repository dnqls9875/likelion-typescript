// -----------------------------------------------------------------------------------------
// 📌 애니 타입(Any Type)
// ⭐️ URL : https://bit.ly/3E8aK8N
// -----------------------------------------------------------------------------------------
// - TypeScript의 `any` 타입은 탈출구(escape hatch)입니다.
// - `any` 타입을 자주 사용한다면? TypeScript를 사용할 이유가 없습니다.
// - `any` 타입은 타입 검사를 패스(pass)하기 때문입니다.
// -----------------------------------------------------------------------------------------

{
  let anyting: any = "anyting";

  anyting = 120901;
  anyting = false;
  anyting = null;
  anyting = undefined;

  anyting();
  anyting.unknownMethod();
}

// * 1. any를 사용하기 보다 명시적인 타입을 설정해주자.

// -----------------------------------------------------------------------------------------
// 📌 지연된 초기화(delayed initialization) & 암묵적 애니 타입(implict any)
// -----------------------------------------------------------------------------------------

{
  const movies: string[] = [
    "리멤버",
    "인생은 아름다워",
    "아인보:아마존의 전설",
  ];

  // * 타입 에너테이션이 설정되지 않았으므로 암묵적으로 any 타입이 설정
  let foundMovie; // ? 값 할당하지 않으면 (암시적으로 any 타입 설정 => type검사를 수행하지 않기 때문에 명시적인 타입을 정해주는게 좋다.)
  console.log(foundMovie); // & undfined

  // 타입 에너테이션을 설정하면 타입 검사를 수행
  // let foundMovie: string;

  for (const movie of movies) {
    if (movie.indexOf("아마존") > -1) {
      foundMovie = movie;
    }
  }

  console.log(foundMovie);

  // foundMovie();
  foundMovie = 101;
}
