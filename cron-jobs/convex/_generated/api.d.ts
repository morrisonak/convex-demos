/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.15.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as clearAllMessages from "../clearAllMessages";
import type * as crons from "../crons";
import type * as listMessages from "../listMessages";
import type * as sendMessage from "../sendMessage";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  clearAllMessages: typeof clearAllMessages;
  crons: typeof crons;
  listMessages: typeof listMessages;
  sendMessage: typeof sendMessage;
}>;
