export type ExampleJson =
  | {
      items: Array<{ object_type: string }>;
    }
  | {};

/**
 * Represents JSON examples of OCF.
 */
export default class Examples {
  protected readonly examplesJson: ExampleJson[];

  constructor(examplesJson: ExampleJson[]) {
    this.examplesJson = examplesJson;
  }

  findExampleItemsByObjectTypes = (objectTypes: string[]) =>
    this.examplesJson.flatMap((exampleJson) =>
      "items" in exampleJson
        ? exampleJson["items"].filter((item) =>
            objectTypes.includes(item["object_type"])
          )
        : []
    );
}
