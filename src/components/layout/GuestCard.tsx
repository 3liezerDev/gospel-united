import { Card, CardContent } from "../ui/card";
import { images } from "../../lib/guestImages";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

function getSpanClasses(colSpan: number, rowSpan: number) {
    const col = {
      1: "lg:col-span-1",
      2: "lg:col-span-2",
      3: "lg:col-span-3",
      4: "lg:col-span-4",
    }[colSpan];
  
    const row = {
      1: "lg:row-span-1",
      2: "lg:row-span-2",
      3: "lg:row-span-3",
      4: "lg:row-span-4",
    }[rowSpan];
  
    return `${col} ${row}`;
  }

export default function GuestCard({ src, alt, ministry, colSpan, rowSpan }: typeof images[0]) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className={`cursor-pointer col-span-1 row-span-1 ${getSpanClasses(colSpan, rowSpan)}`}>
            <CardContent className="w-full h-full p-0">
              <img
                src={src}
                className="w-full h-full object-cover rounded-lg"
                alt={alt}
              />
            </CardContent>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">{alt}</p>
          <p className="text-sm text-muted-foreground">{ministry}</p>
        </HoverCardContent>
      </HoverCard>
    );
  }