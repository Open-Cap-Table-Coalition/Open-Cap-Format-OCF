import { PropertyJson } from "./Property/Factory.js";

export interface SchemaNodeJson {
  $id: string;
  title: string;
  description: string;
  type?: string;
  properties?: { [id: string]: PropertyJson };
  required?: string[];
  allOf?: Array<{ $ref: string }>;
}

/**
 * Minimal interface for schema nodes used by the Property system.
 * This interface defines the contract that MarkdownGenerator's duck-typed objects must fulfill.
 */
export default interface SchemaNode {
  id(): string;
  title(): string;
  description(): string;
  markdownTableType(inMdFileAtPath?: string): string;
  markdownTableDescription(): string;
  mdLinkToNodesMdDocs(inMdFileAtPath: string): string;
}
