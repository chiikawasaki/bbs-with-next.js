import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import * as React from "react";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
          fuga dolorum natus? Omnis aspernatur expedita sint, debitis est magnam
          id ratione totam tempora tenetur velit inventore ea possimus minus.
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
        <Link href={"/bbs-posts-1"} className="text-blue-500">
          Read More
        </Link>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
          fuga dolorum natus? Omnis aspernatur expedita sint, debitis est magnam
          id ratione totam tempora tenetur velit inventore ea possimus minus.
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
        <Link href={"/bbs-posts-1"}>Read More</Link>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
          fuga dolorum natus? Omnis aspernatur expedita sint, debitis est magnam
          id ratione totam tempora tenetur velit inventore ea possimus minus.
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
        <Link href={"/bbs-posts-1"}>Read More</Link>
      </Card>
    </main>
  );
}
