import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Notification {
  title: string;
  description: string;
}

interface CardModProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  notifications: Notification[];
  buttonText: string;
  className?: string;
}

export function CardMod({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  notifications,
  buttonText,
  className,
}: CardModProps) {
  return (
    <article className="flex flex-col md:flex-row justify-center w-full h-full gap-4 md:gap-5">
      <img
        className="w-full h-60 md:min-h-96 md:w-xs lg:w-md object-cover rounded-md"
        src={imageSrc}
        alt={imageAlt}
      />
      <Card className={cn("w-full md:w-lg", className)}>
        <CardHeader>
          <CardTitle className='text-teal-900' >{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-700" />
                <div className="space-y-1">
                  <p className="text-sm  font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">{buttonText}</Button>
        </CardFooter>
      </Card>
    </article>
  );
}
