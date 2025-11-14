import path from "node:path";
import { fileURLToPath } from "url";
import fse from "fs-extra";
import os from "os";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../../");

// Helper to run schema:compose command
const runComposeCommand = (args: string) =>
  execAsync(`npm run schema:compose -- ${args}`, { cwd: REPO_ROOT });

describe("ComposeSchema utility", () => {
  it("can find and compose a schema by name", async () => {
    const { stdout } = await runComposeCommand("Issuer");

    expect(stdout).toContain("Object - Issuer");
    expect(stdout).toContain("$id");
    expect(stdout).toContain("legal_name");
  }, 30000);

  it("can find schema by path", async () => {
    const { stdout } = await runComposeCommand("types/Numeric");

    expect(stdout).toContain("Type - Numeric");
    expect(stdout).toContain("pattern");
  }, 30000);

  it("can save composed schema to file", async () => {
    const tempFile = path.join(os.tmpdir(), `test-composed-${Date.now()}.json`);

    try {
      await runComposeCommand(`Numeric -o ${tempFile}`);

      expect(await fse.pathExists(tempFile)).toBe(true);

      const content = await fse.readFile(tempFile, "utf-8");
      const json = JSON.parse(content);

      expect(json.$id).toContain("Numeric.schema.json");
      expect(json.title).toBe("Type - Numeric");
    } finally {
      await fse.remove(tempFile);
    }
  }, 30000);

  it("shows error for non-existent schema", async () => {
    try {
      await runComposeCommand("NonExistentSchema");
      fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.stderr || error.stdout).toContain("Schema not found");
    }
  }, 30000);

  it("shows verbose output when requested", async () => {
    const { stdout } = await runComposeCommand("Issuer -v");

    expect(stdout).toContain("Looking for schema");
    expect(stdout).toContain("Reading schemas from");
    expect(stdout).toContain("Loaded");
    expect(stdout).toContain("Schema Type:");
    expect(stdout).toContain("Properties");
    expect(stdout).toContain("Composed From");
  }, 30000);
});
