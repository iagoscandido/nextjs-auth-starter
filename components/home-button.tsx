import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type HomeButtonProps = {
  href?: string;
  className?: string;
};
const HomeButton = ({ href = "/", className }: HomeButtonProps) => {
  return (
    <Button className={className} variant={"outline"} size={"icon"} asChild>
      <Link href={href}>
        <HomeIcon />
      </Link>
    </Button>
  );
};

export default HomeButton;
