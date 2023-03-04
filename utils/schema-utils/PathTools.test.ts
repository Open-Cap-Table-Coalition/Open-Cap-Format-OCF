import { relativePathToOtherPath } from "./PathTools";

describe("relativePathToOtherPath", () => {
  it("should return the relative path to the target path from the source path", () => {
    const source_path = "/same/directory/file.json";
    const target_path = "/same/directory/other_file.json";

    expect(relativePathToOtherPath(target_path, source_path)).toEqual(".");
  });
});
