"use client";

import { useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";

const Links = () => {
  const username = faker.person.firstName("male");
  const routes = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Profile", href: `/${username}/posts` },
    { name: "Settings", href: "/settings" },
  ];
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 items-start">
      {routes.map((route, i) => (
        <button
          onClick={() => router.push(route.href, { scroll: false })}
          key={i}
          className="py-2 px-5 rounded-lg bg-neutral-400 text-white font-bold"
        >
          {route.name}
        </button>
      ))}
    </div>
  );
};

export default Links;
