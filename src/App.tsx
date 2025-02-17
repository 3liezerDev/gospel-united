
import { Button } from "@/components/ui/button"

function App() {
 

  return (
    <>
      <h1 className='text-3xl text-center font-bold underline text-blue-700'>
        Hello you're working with Tailwind css 4
      </h1>
      <section className="flex flex-col gap-4 justify-center items-center">
        <Button variant="default">
          Click me please
        </Button>
        <Button variant="destructive">
          Click me please
        </Button>
        <Button variant="outline">
          Click me please
        </Button>
        <Button variant="secondary">
          Click me please
        </Button>
        <Button variant="ghost">
          Click me please
        </Button>
        <Button variant="link">
          Click me please
        </Button>
      </section>
    </>
  )
}

export default App
