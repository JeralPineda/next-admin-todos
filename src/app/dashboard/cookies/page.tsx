import { TabBar } from "@/components/tab-bar";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies",
};

export default function page() {
  const cookiesStore = cookies();
  const cookieTab = cookiesStore.get("selectedTab")?.value ?? "1";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar
          //? También para comvertir el string a numero se puede agregar un + antes de la variable +cookieTab
          currentTab={Number(cookieTab)}
        />
      </div>
    </div>
  );
}
