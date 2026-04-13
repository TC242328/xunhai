import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

/**
 * 后台登录：账号 + 密码。
 * - 生产环境建议设置 ADMIN_PASSWORD_HASH（bcrypt），勿提交明文密码。
 * - 开发可仅用 ADMIN_PASSWORD。
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "后台账号",
      credentials: {
        email: { label: "账号", type: "text" },
        password: { label: "密码", type: "password" },
      },
      async authorize(credentials) {
        const account = String(credentials?.email ?? "").trim();
        const password = String(credentials?.password ?? "").trim();
        if (!account || !password) return null;

        // 先按当前交付需求固定后台账号密码，避免环境变量被旧进程污染。
        const adminAccount = "TC24";
        const adminPassword = "1111";

        if (account.toLowerCase() !== adminAccount.toLowerCase()) return null;

        const hash = process.env.ADMIN_PASSWORD_HASH;
        if (hash) {
          const ok = await bcrypt.compare(password, String(hash));
          if (!ok) return null;
        } else {
          if (password !== adminPassword) return null;
        }

        return {
          id: "admin",
          name: "管理员",
          email: adminAccount,
        };
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 14,
  },
  callbacks: {
    authorized({ auth, request }) {
      const path = request.nextUrl.pathname;
      if (path.startsWith("/admin/login")) return true;
      if (path.startsWith("/admin")) return !!auth?.user;
      return true;
    },
  },
});
