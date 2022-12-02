export interface BookForm {
  sys: BookFormSys;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

export interface Includes {
  Entry: Entry[];
}

export interface Entry {
  metadata: Metadata;
  sys: EntrySys;
  fields: EntryFields;
}

export interface EntryFields {
  text?: string;
  theme?: string;
  name?: string;
  placeholder?: string;
}

export interface Metadata {
  tags: any[];
}

export interface EntrySys {
  space: SubmitButton;
  id: string;
  type: LinkTypeEnum;
  createdAt: Date;
  updatedAt: Date;
  environment: SubmitButton;
  revision: number;
  contentType: SubmitButton;
  locale: string;
}

export interface SubmitButton {
  sys: SubmitButtonSys;
}

export interface SubmitButtonSys {
  type: PurpleType;
  linkType: LinkTypeEnum;
  id: string;
}

export enum LinkTypeEnum {
  ContentType = 'ContentType',
  Entry = 'Entry',
  Environment = 'Environment',
  Space = 'Space',
}

export enum PurpleType {
  Link = 'Link',
}

export interface Item {
  metadata: Metadata;
  sys: EntrySys;
  fields: ItemFields;
}

export interface ItemFields {
  heading: string;
  inputs: SubmitButton[];
  submitButton: SubmitButton;
}

export interface BookFormSys {
  type: string;
}
