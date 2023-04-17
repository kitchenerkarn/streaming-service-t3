import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const notificationRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ content: z.string(), userId: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.notification.create({
        data: {
          content: input.content,
          userId: input.userId,
        },
      });
    }),
  allNotificationByUserIdSeen: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.notification.updateMany({
        where: {
          userId: input.userId,
        },
        data: {
          seen: true,
        },
      });
    }),
  getNotificationsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return await prisma.notification.findMany({
        where: {
          userId: input.userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
});
