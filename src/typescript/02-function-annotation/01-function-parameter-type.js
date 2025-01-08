// ---------------------------------------------------------------------------------
// 📌 함수 매개변수 타입(Function Parameter Type)
// ⭐️ URL : https://bit.ly/3UVCUur
// ---------------------------------------------------------------------------------
// - 함수 매개변수 타입을 지정할 수 있습니다.
// - TypeScript는 매개변수 타입 에너테이션을 통해 값의 유형을 이해하고 검사를 수행합니다.
// - 함수의 매개변수에 타입을 지정하는 방법은 변수의 타입을 지정하는 것과 동일합니다.
// ---------------------------------------------------------------------------------
{
    function getRandom(n) {
        return Math.floor(Math.random() * n);
    }
    getRandom(101);
    // getRandom("101");
    // getRandom("one zero one");
    /**
     * 최솟값, 최댓값 사이의 난수를 반환하는 함수
     * @param min number
     * @param max number
     */
    function getRandomMinMax(min, max) {
        // min();
        // max.toLowerCase();
        return getRandom(max - min) + min;
    }
    console.log(getRandomMinMax(10100, 100000));
}
// ---------------------------------------------------------------------------------
{
    // 함수 매개변수 에너테이션이 설정된 경우
    var sendGreeting = function (toName, fromName, isMorning, currentYear) {
        var thisTime = isMorning ? "오전" : "오후";
        return "\uC548\uB155 ".concat(toName, "! \uC88B\uC740 ").concat(thisTime, "\uC774 \uB418\uAE38 \uBC14\uB77C. \uD589\uBCF5\uD55C ").concat(currentYear, " \uD55C \uD574\uAC00 \uB418\uAE38! - \uB2F9\uC2E0\uC758 ").concat(fromName);
    };
    // 함수 매개변수 영역을 폴딩(folding)한 후, 함수 실행 구문을 작성해봅니다.
    console.log(sendGreeting("우빈", "종국", false, new Date().getFullYear()));
}
