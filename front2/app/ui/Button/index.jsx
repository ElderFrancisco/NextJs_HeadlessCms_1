"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

export default function Component({ url, target, text, color }) {
  if (!url) {
    return <></>;
  }
  return (
    <Button color={color}>
      <Link href={url} target={"_" + target}>
        {text}
      </Link>
    </Button>
  );
}
