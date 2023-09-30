"use client";

import { Tab } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MyTab({ username }: { username: string }) {
  const tabs = [
    {
      name: "Posts",
      url: `/${username}/posts`,
    },
    {
      name: "Products",
      url: `/${username}/products`,
    },
    {
      name: "Friends",
      url: `/${username}/friends`,
    },
  ];

  const router = useRouter();

  const pathname = usePathname();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.url === pathname);
    setSelectedIndex(index);
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabs.map((tab) => (
            <Tab
              onClick={() => router.push(tab.url, { scroll: false })}
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
