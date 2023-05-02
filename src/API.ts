/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactUsInput = {
  id?: string | null,
  title: string,
  detail: string,
  contact_type: number,
  isResolve: boolean,
  updated_at: string,
};

export type ModelContactUsConditionInput = {
  title?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  contact_type?: ModelIntInput | null,
  isResolve?: ModelBooleanInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelContactUsConditionInput | null > | null,
  or?: Array< ModelContactUsConditionInput | null > | null,
  not?: ModelContactUsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ContactUs = {
  __typename: "ContactUs",
  id: string,
  title: string,
  detail: string,
  contact_type: number,
  isResolve: boolean,
  updated_at: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactUsInput = {
  id: string,
  title?: string | null,
  detail?: string | null,
  contact_type?: number | null,
  isResolve?: boolean | null,
  updated_at?: string | null,
};

export type DeleteContactUsInput = {
  id: string,
};

export type ModelContactUsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  detail?: ModelStringInput | null,
  contact_type?: ModelIntInput | null,
  isResolve?: ModelBooleanInput | null,
  updated_at?: ModelStringInput | null,
  and?: Array< ModelContactUsFilterInput | null > | null,
  or?: Array< ModelContactUsFilterInput | null > | null,
  not?: ModelContactUsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContactUsConnection = {
  __typename: "ModelContactUsConnection",
  items:  Array<ContactUs | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactUsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  detail?: ModelSubscriptionStringInput | null,
  contact_type?: ModelSubscriptionIntInput | null,
  isResolve?: ModelSubscriptionBooleanInput | null,
  updated_at?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactUsFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactUsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateContactUsMutationVariables = {
  input: CreateContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type CreateContactUsMutation = {
  createContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactUsMutationVariables = {
  input: UpdateContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type UpdateContactUsMutation = {
  updateContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactUsMutationVariables = {
  input: DeleteContactUsInput,
  condition?: ModelContactUsConditionInput | null,
};

export type DeleteContactUsMutation = {
  deleteContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactUsQueryVariables = {
  id: string,
};

export type GetContactUsQuery = {
  getContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactusesQueryVariables = {
  filter?: ModelContactUsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactusesQuery = {
  listContactuses?:  {
    __typename: "ModelContactUsConnection",
    items:  Array< {
      __typename: "ContactUs",
      id: string,
      title: string,
      detail: string,
      contact_type: number,
      isResolve: boolean,
      updated_at: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionContactUsFilterInput | null,
};

export type OnCreateContactUsSubscription = {
  onCreateContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionContactUsFilterInput | null,
};

export type OnUpdateContactUsSubscription = {
  onUpdateContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactUsSubscriptionVariables = {
  filter?: ModelSubscriptionContactUsFilterInput | null,
};

export type OnDeleteContactUsSubscription = {
  onDeleteContactUs?:  {
    __typename: "ContactUs",
    id: string,
    title: string,
    detail: string,
    contact_type: number,
    isResolve: boolean,
    updated_at: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
