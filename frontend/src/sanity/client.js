import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "hfqosm5d",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});