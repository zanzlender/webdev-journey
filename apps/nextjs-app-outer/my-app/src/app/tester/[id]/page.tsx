import Image from "next/image";
import SomeComponent from "../../../../components/SomeComponent";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main
      onClick={() => {
        console.log("1");
        console.log("1");
        console.log("1");
        console.log("1");
        console.log("1");
        console.log("1");
        console.log("1");
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          {params.id}
        </p>
      </div>
    </main>
  );
}
