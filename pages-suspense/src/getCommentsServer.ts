import { Comment } from "./types";

import { COMMENTS_DELAY, SSR_THRESHOLD } from "./constants";

export async function getCommentsServer() {
  return new Promise((resolve) => {
    let comments: Comment[] | null = null;

    try {
      let timedOut = false;

      setTimeout(() => {
        if (!comments) {
          timedOut = true;
          resolve(null);
        }
      }, SSR_THRESHOLD);

      new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, COMMENTS_DELAY);
      })
        .then(() => fetch("https://jsonplaceholder.typicode.com/comments"))
        .then((res) => res.json())
        .then((c) => {
          if (!timedOut) {
            comments = c;
            resolve(c.slice(0, 20));
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {}
  });
}
