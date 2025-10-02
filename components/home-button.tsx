import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type HomeButtonProps = {
  href?: string;
};
const HomeButton = ({ href = "/" }: HomeButtonProps) => {
  return (
    <Button variant={"outline"} size={"icon"} asChild>
      <Link href={href}>
        <HomeIcon />
      </Link>
    </Button>
  );
};

export default HomeButton;
