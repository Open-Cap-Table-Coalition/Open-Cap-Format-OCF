import Schema from "../../../Schema";
import PropertyFactory from "../Factory";
import InlineProperty from "./InlineProperty";
import { OneOfArrayJson } from "./OneOfArray";

export default class CompatibleObjectConst extends InlineProperty {
  protected readonly json: OneOfArrayJson;

  constructor(schema: Schema, json: OneOfArrayJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected oneOfProperties = () =>
    this.json["items"]["oneOf"].map((propertyJson) =>
      PropertyFactory.build(this.schema, propertyJson)
    );

  markdownTableDescription = () => this.description();

  markdownTableType = (inMdFileAtPath: string): string =>
    `**Array of ONE OF the Following Types/Objs:**</br>&bull; ${this.oneOfProperties()
      .map((property) => property.markdownTableType(inMdFileAtPath))
      .join("</br>&bull; ")}`;
}
