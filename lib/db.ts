import { PrismaClient } from "@prisma/client";

/** Prisma 单例，避免开发热重载时连接数暴涨 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
