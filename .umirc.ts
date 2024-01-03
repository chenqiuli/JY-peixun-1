import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/one", component: "one" },
    { path: "/todolist", component: "todolist" },
    { path: "/two", component: "two" },
    { path: "/todolist2", component: "todolist2" },
    { path: "/detail/:name", component: "detail" },
    { path: "/detail2", component: "detail2" },
    { path: "/four", component: "Four" },
  ],
  npmClient: "pnpm",
});
