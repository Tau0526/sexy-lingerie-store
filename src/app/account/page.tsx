import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      name: true,
      email: true,
      createdAt: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const createdAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(user.createdAt);

  return (
    <main className="silk-page pb-24 text-[#3D2E26]">
      <section className="mx-auto max-w-frame px-4 py-14 xl:px-0">
        <div className="moonlite-reveal border-b border-[#9C7548]/18 pb-8">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[#9C7548]">
            Moonlite Studio
          </span>
          <h1
            className={cn(
              integralCF.className,
              "mb-4 text-4xl font-normal uppercase leading-tight md:text-5xl"
            )}
          >
            Welcome Back
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-[#3D2E26]/64 md:text-base">
            Your Moonlite profile is ready for availability requests and private
            enquiries.
          </p>
        </div>

        <section className="mt-8 max-w-2xl border-y border-[#9C7548]/18 bg-[#E8DECD]/52 p-5 shadow-[0_18px_50px_rgba(61,46,38,0.05)] sm:p-8">
          <dl className="grid gap-5">
            <div className="grid gap-1 border-b border-[#9C7548]/16 pb-5 sm:grid-cols-[180px_1fr]">
              <dt className="text-xs uppercase tracking-[0.2em] text-[#9C7548]">
                Name
              </dt>
              <dd className="text-base text-[#3D2E26]">{user.name}</dd>
            </div>
            <div className="grid gap-1 border-b border-[#9C7548]/16 pb-5 sm:grid-cols-[180px_1fr]">
              <dt className="text-xs uppercase tracking-[0.2em] text-[#9C7548]">
                Email
              </dt>
              <dd className="break-all text-base text-[#3D2E26]">{user.email}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[180px_1fr]">
              <dt className="text-xs uppercase tracking-[0.2em] text-[#9C7548]">
                Created
              </dt>
              <dd className="text-base text-[#3D2E26]">{createdAt}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <LogoutButton />
          </div>
        </section>
      </section>
    </main>
  );
}
