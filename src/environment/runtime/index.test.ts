import type { EnvironmentKind, ProcessType } from "./types";

import { assureType } from "@shared/assureType";
import { isProduction } from ".";

function createProcessFor(env: EnvironmentKind): ProcessType {
  return assureType<ProcessType>({
    env: { NODE_ENV: env },
  });
}

describe("in production mode", () => {
  it("should return `true`", () => {
    const processMock = createProcessFor("production");
    expect(isProduction(processMock)).toBe(true);
  });
});

describe("not in production mode", () => {
  it("should return `false`", () => {
    const processMock = createProcessFor("development");
    expect(isProduction(processMock)).toBe(false);
  });
});
