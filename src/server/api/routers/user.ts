import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  // protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const userRouter = createTRPCRouter({
  updateFirstLogin: publicProcedure
    .input(z.object({ firstLogin: z.boolean(), userId: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.user.update({
        where: {
          id: input.userId,
        },
        data: {
          firstLogin: input.firstLogin,
        },
      });
    }),
});
