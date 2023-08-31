import Link from "next/link";
import { Button } from "@/components/common/Button";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="gradient-text drop-shadow-2xl text-center">Home Page</h1>

      <div className="w-full gap-10 flex text-2xl flex-col">
        <Button
          className="text-2xl "
          variant={"secondary"}
          size="lg"
          href="/product/6781"
        >
          Go to product view
        </Button>
        <Button
          className="text-2xl "
          variant={"secondary"}
          size="lg"
          href="/product/6781/edit"
        >
          Go to product edit
        </Button>
      </div>
    </div>
  );
}
