// --------------------------------------------------------------------------
// TypeScript + Express.js를 활용해 간단한 API 서버 구성
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
// 이미지, 스타일, 스크립트 파일과 같은 정적 파일을 제공하려면 기본 제공되는 미들웨어 함수를 사용합니다.
// 여러 정적 에셋 디렉토리를 사용하려면 express.static 미들웨어 함수를 여러 번 호출합니다.
// --------------------------------------------------------------------------

import "dotenv/config";
import express, { response } from "express";
import type { Express, Request } from "express";
import type { RequestUser, User } from "./types/user";
import { resolve } from "node:path";
import { readUsers, writeUsers } from "./lib/users";

/* CONFIG. ------------------------------------------------------------------ */

// for Windows Users
const HOSTNAME = "localhost";
// const HOSTNAME = process.env.HOSTNAME ?? 'localhost';
const PORT = Number(process.env.PORT) ?? 4000;
const MESSAGE = `웹 서버 구동 : http://${HOSTNAME}:${PORT}`;

/* Application -------------------------------------------------------------- */

const app: Express = express();

/* Middleware --------------------------------------------------------------- */

// app.use(greetingMessage);
app.use(express.static(resolve(__dirname, "../public")));
app.use(express.json());

/* Routing ------------------------------------------------------------------ */
//
// 라우팅은 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 어떻게 응답할지 결정하는 것을 말하며,
// 이는 URI(또는 경로)와 특정 HTTP 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)입니다.
// 각 경로에는 하나 이상의 핸들러 함수가 있을 수 있으며, 이 함수는 경로가 일치할 때 실행됩니다.
//
// --------------------------------------------------------------------------

// GET
// app.get('/', entryHandler);

// POST
// app.post('/', (request, response) => {
//   // 클라이언트 요청 URL
//   console.log(request.url);

//   // 서버 -> 클라이언트 응답
//   response.status(201 /* Created */).send({
//     message: 'POST 요청이 홈페이지로부터 주어졌습니다.',
//   });
// });

/* Users API ---------------------------------------------------------------- */

// CREATE ----------------------------------------------------------------------

// `POST /api/users`
app.post(
  "/api/users",
  async (request: Request<{}, {}, RequestUser>, response) => {
    // 클라이언트 요청(JSON)
    console.log(request.body);

    // 서버에서 프로그래밍
    // 1. 데이터 파일 읽기
    const users = await readUsers();

    // 새롭게 생성될 사용자(User) 객체
    const newId = users.length + 1;
    // const newId = crypto.randomUUID();
    const newUser: User = {
      id: newId,
      ...request.body,
    };

    // 2. 데이터 파일 쓰기
    // 기존의 Users 배열에 새 User를 추가

    try {
      users.push(newUser);
      // 클라이언트에 응답
      // 성공한 경우
      await writeUsers(newUser);
      response.status(201).json(newUser);
    } catch (error: unknown) {
      // 실패한 경우
      response.status(401).json({
        message: "이런 사용자 정보 생성에 실패했습니다.",
      });
    }
  }
);

// READ ------------------------------------------------------------------------

// `GET /api/users`
app.get("./api/users", async (request, response) => {
  try {
    const users = await readUsers();
    response.status(201).json(users);
  } catch (error: unknown) {
    response.status(400).json({
      message: "데이터를 알 수 없습니다.",
    });
  }
});

// `GET /api/users/:id`
app.get("/api/users/:id", async (request, response) => {
  // request parameters : id
  const { id } = request.params;

  try {
    const users = await readUsers();

    // 요청된 ID 값과 일치하는 사용자가 존재하는지 검토
    const requestUser = users.find((user) => user.id === Number(id));
    if (requestUser) {
      // 요청한 사용자 정보가 있을 경우, 응답
      response.status(200).json(requestUser);
    } else {
      // 요청한 사용자 정보가 없을 경우
      response.status(400).json({
        meassage: `요청한 사용자 "${id}" 정보가 존재하지 않습니다.`,
      });
    }
  } catch (error: unknown) {
    response.status(500).json({
      meassage: `알 수 없는 오류가 발생했습니다!`,
    });
  }
});

// UPDATE ---------------------------------------------------------------------

// `PUT /api/users/:id`

// `PATCH /api/users/:id`

// DELETE ---------------------------------------------------------------------

// `DELETE /api/users/:id`

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, HOSTNAME, () => {
  console.log(MESSAGE);
});
