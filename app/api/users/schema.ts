import { z } from "zod";

const schema = z.object({
  name: z.string().max(50).min(1),
  email: z.string().email(),
});

export default schema;
