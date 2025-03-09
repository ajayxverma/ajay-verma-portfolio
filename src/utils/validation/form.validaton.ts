import { z } from 'zod';

export const contactformSchema = z.object({
  name: z.string().min(3, { message: 'name must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(5, { message: 'message must be at least 5 characters' }),
});
