export interface User {
  id: number;
  name: string;
  gender: string;
  age: number;
}

// ? 특정한 속성을 빼오는 방법은? 타입스크립트 유틸리티 Pick를 사용해라
// * 특정한 속성을 제외하는 방법은? 타입스크립트 유틸리티 Omit을 사용해라
// export type RequestUser = Pick<User, "age" | "gender" | "name">;
export type RequestUser = Omit<User, "id">;

export default User;
