import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  // HELLO
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // HELLO
  getAll: publicProcedure.query(async ({ ctx }) => {
    const values = await ctx.prisma.example.findFirst();

    return values;
  }),

  // HELLO
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
