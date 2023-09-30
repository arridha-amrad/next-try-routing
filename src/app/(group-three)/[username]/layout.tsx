import MyTab from "@/components/Tab";
import { delay } from "@/utils/delay";
import { ReactNode } from "react";

type Props = {
  params: {
    username: string;
  };
  children: ReactNode;
};

const ProfilePage = async ({ params, children }: Props) => {
  await delay(1000);

  return (
    <div>
      <h1>ProfilePage</h1>
      <h2 className="font-bold text-3xl">I&apos;m {params.username}</h2>
      <MyTab username={params.username} />
      {children}
    </div>
  );
};

export default ProfilePage;
