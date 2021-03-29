import { GenericObject, Module, BuilderConfigVariable } from "../../types";

/**
 * Interface: Variables
 */
export interface ConfigVariables {
  transformValues?: GenericObject | string;
  transformOriginValues?: GenericObject | string;
}

/**
 * Type: Module
 */
export type ModuleType = Module<ConfigVariables>;

/**
 * Supported Declarations
 * */
export const defaultNames = {
  "tt:n": "ttn",
  "tt:c": "ttc",
  "tt:u": "ttu",
  "tt:l": "ttl",
};

/**
 * Builder config for variables
 * */
export const configVariables: BuilderConfigVariable[] = [
  {
    name: "trf",
    variable: "transformValues",
  },
  {
    name: "trfo",
    variable: "transformOriginValues",
  },
];