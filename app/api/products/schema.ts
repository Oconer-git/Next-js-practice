import { z } from "zod";

const schema = z.object({
  name: z.string().max(50).min(2),
  price: z.number().max(100000).min(1),
});

export default schema;
