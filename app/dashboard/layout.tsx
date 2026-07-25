import { Suspense } from "react";
import { UserProvider } from "./UserProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <UserProvider>
        {children}
      </UserProvider>
    </Suspense>
  );
}