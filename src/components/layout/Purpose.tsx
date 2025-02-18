import React from 'react';
import { Card } from '@/components/ui/card';

const Purpose = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-4 ">
        {/* Título principal - más grueso y oscuro */}
        <h1 className="text-5xl font-semibold text-teal-950">
          GOSPEL UNITED
        </h1>
        
        {/* Texto descriptivo - más ligero y gris */}
        <div className=" mx-auto  my-8">
          <p className="text-xl max-w-[80%] mx-auto font-sm text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras finibus ut augue a faucibus. In iaculis at diam suscipit sodales.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras finibus ut augue a faucibus. In iaculis at diam suscipit sodales.
            
          </p>
          
        </div>

        <div className="flex flex-col justify-start items-start md:flex-row gap-2">
          <Card className="flex flex-col justify-start items-center w-full md:w-1/2 h-96 rounded-3xl border-neutral-200">
            <img
            className="w-full h-full md:w-xs lg:w-md object-cover rounded-md"
            src="src/assets/images/light.webp"
            alt=""
            />
          </Card>

          <div className="w-full md:w-1/2 space-y-4 text-left">
            {/* Subtítulo - peso medio */}
            <h2 className="text-2xl font-medium text-teal-900">
              gospel united
            </h2>
            
            {/* Texto descriptivo - más ligero y gris */}
            <div className="space-y-6">
              <p className="font-sm text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras finibus ut augue a faucibus.
              </p>
              <p className="font-sm text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras finibus ut augue a faucibus.
              </p>
              <p className="font-sm text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras finibus ut augue a faucibus.
              </p>
              
              <p className="font-sm text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras finibus ut augue a faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;