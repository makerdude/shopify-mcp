import type { ShopifyTool } from "../lib/toolUtils.js";

// ─────────────────────────────────────────────────────────────────────
// READ-ONLY TOOL REGISTRY
//
// All mutating tools (create/update/delete/cancel/refund/merge/
// setMetafields/deleteMetafields/manageTags/setInventoryQuantities/
// draft-order completion/fulfillment creation/etc.) have been removed
// from this registry so the MCP server cannot write to the store even
// if the LLM is coerced into trying (e.g. via prompt injection in a
// product description or customer note).
//
// The tool *files* still exist on disk under src/tools/, they are just
// not imported or registered. To re-enable a specific write tool,
// uncomment its import and its entry in the `tools` array below, and
// make sure the corresponding `write_*` scope is granted on the
// Shopify custom app.
//
// Belt-and-suspenders: also configure the Shopify custom app with
// ONLY read_* scopes. Then even a bypass at this layer cannot execute
// writes — Shopify will reject them at the API.
// ─────────────────────────────────────────────────────────────────────

// Product reads
import { getProducts } from "./getProducts.js";
import { getProductById } from "./getProductById.js";

// Order reads
import { getOrders } from "./getOrders.js";
import { getOrderById } from "./getOrderById.js";

// Customer reads
import { getCustomers } from "./getCustomers.js";
import { getCustomerById } from "./getCustomerById.js";
import { getCustomerOrders } from "./getCustomerOrders.js";

// Metafield reads
import { getMetafields } from "./getMetafields.js";

// Configuration & discovery reads
import { getShopInfo } from "./getShopInfo.js";
import { getMetafieldDefinitions } from "./getMetafieldDefinitions.js";
import { getLocations } from "./getLocations.js";
import { getMarkets } from "./getMarkets.js";
import { getCollections } from "./getCollections.js";
import { getCollectionById } from "./getCollectionById.js";

// Enhanced order & fulfillment reads
import { getOrderTransactions } from "./getOrderTransactions.js";
import { getFulfillmentOrders } from "./getFulfillmentOrders.js";
import { getOrderRefundDetails } from "./getOrderRefundDetails.js";

// Inventory & pricing reads
import { getInventoryLevels } from "./getInventoryLevels.js";
import { getInventoryItems } from "./getInventoryItems.js";
import { getPriceLists } from "./getPriceLists.js";
import { getProductVariantsDetailed } from "./getProductVariantsDetailed.js";

export const tools: ShopifyTool[] = [
  // Products (2)
  getProducts,
  getProductById,
  // Orders (2)
  getOrders,
  getOrderById,
  // Customers (3)
  getCustomers,
  getCustomerById,
  getCustomerOrders,
  // Metafields (1)
  getMetafields,
  // Configuration & discovery (6)
  getShopInfo,
  getMetafieldDefinitions,
  getLocations,
  getMarkets,
  getCollections,
  getCollectionById,
  // Enhanced order & fulfillment (3)
  getOrderTransactions,
  getFulfillmentOrders,
  getOrderRefundDetails,
  // Inventory & pricing (4)
  getInventoryLevels,
  getInventoryItems,
  getPriceLists,
  getProductVariantsDetailed,
];
