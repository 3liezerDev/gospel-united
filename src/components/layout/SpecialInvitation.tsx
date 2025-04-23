import { Card, CardContent } from "../ui/card";

const SpecialInvitation = () => {
  return (
    <Card className="w-[80%] md:w-[90%] lg:max-w-4xl mx-auto">
      <CardContent className="w-full h-full p-0">
        <div className="relative w-full h-96 md:h-auto pb-0 md:pb-[56.25%] overflow-hidden rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/l65ibKGJqA0"
            title="Saludo Especial - Gospel United"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialInvitation;
