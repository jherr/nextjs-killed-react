import { User } from "./types";

import { USERS_DELAY, SSR_THRESHOLD } from "./constants";

export async function getUsersServer() {
  return new Promise((resolve) => {
    try {
      let users: User[] | null = null;
      let timedOut = false;

      setTimeout(() => {
        if (!users) {
          timedOut = true;
          resolve(null);
        }
      }, SSR_THRESHOLD);

      new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, USERS_DELAY);
      })
        .then(() => fetch("https://jsonplaceholder.typicode.com/users"))
        .then((res) => res.json())
        .then((c) => {
          if (!timedOut) {
            users = c;
            resolve(c.slice(0, 20));
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {}
  });
}
