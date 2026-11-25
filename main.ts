// One Word, One Username, One Reward — entry: our own make.fun username.
import { mkdirSync, writeFileSync } from "node:fs";

const username = "yogi";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters, not only white space.
if (username.length < 1 || username.length > 30 || username.trim().length === 0) {
  throw new Error("username must be 1-30 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", username, "utf8");
