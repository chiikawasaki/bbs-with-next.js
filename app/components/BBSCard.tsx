import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque
        fuga dolorum natus? Omnis aspernatur expedita sint, debitis est magnam
        id ratione totam tempora tenetur velit inventore ea possimus minus.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts-1"} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
