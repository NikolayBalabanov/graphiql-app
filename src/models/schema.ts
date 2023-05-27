export type TSchema = {
  data: {
    __schema: {
      queryType: {
        name: string;
      };
      mutationType: null;
      subscriptionType: null;
      types: TType[];
      directives: TDirective[];
    };
  };
};
export type TArgsType = {
  kind: string;
  name: string | null;
  ofType: null | TArgsType;
};
export type TArgs = {
  name: string;
  description: string;
  type: TArgsType;
  defaultValue: string | null;
};
export type TDirective = {
  name: string;
  description: string;
  locations: string[];
  args: TArgs[];
};
export type TQueryType = {
  name: string;
};
export type TTypeField = {
  name: string;
  description: string;
  args: TArgs[];
  type: TArgsType;
  isDeprecated: boolean;
  deprecationReason: null;
};

export type TEnumsValues = null | {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: null;
};

export type TType = {
  kind: string;
  name: string;
  description: string;
  fields: TTypeField[] | null;
  inputFields: TArgs[] | null;
  interfaces: [] | null;
  enumValues: TEnumsValues;
  possibleTypes: null;
};
