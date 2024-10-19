import { Sidebar } from "@/components/sidebar";
import { TopMenu } from "@/components/top-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6 bg-white p-2 m-2 rounded pb-5">
          {children}
        </div>
      </div>
    </>
  );
}
