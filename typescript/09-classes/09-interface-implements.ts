// ------------------------------------------------------------------------------
// 📌 인터페이스 → 클래스 구현 (Interface Implements)
// ⭐️ URL : https://bit.ly/3OaI9Ef
// ------------------------------------------------------------------------------
//? - 인터페이스의 요구사항을 클래스가 구현(implements)하도록 구성할 수 있습니다.
//? - implements는 TypeScript에서 클래스가 하나 이상의 인터페이스를 구현할 때 사용하는 키워드
// ------------------------------------------------------------------------------

// Cap 클래스는 Colorful 인터페이스를 구현해야 합니다.
// Print 클래스는 Colorful, Printable 인터페이스를 모두 구현해야 합니다.

{
  interface Colorful {
    color: string;
  }

  interface Printable {
    isPortable: boolean;
    print(): void;
  }

  class Cap implements Colorful {
    constructor(public color: string) {}
  }

  class Printer implements Colorful, Printable {
    constructor(public color: string, public isPortable: boolean) {}
    public print(): void {}
  }
}
