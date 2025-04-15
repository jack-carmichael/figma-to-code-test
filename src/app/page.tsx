import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 container">
      <h1 className="text-4xl my-8">Figma to code test</h1>
      <h2 className="text-3xl my-4">Test 1 - full page</h2>
      <p>
        <a
          className="text-blue-900 underline hover:text-blue-950"
          target="_blank"
          href="https://www.figma.com/design/1C5CJ0Bn9M7CbX8EXuf6dI/Whitepace---SaaS-Landing-Page--Community-?node-id=9-101&t=fZ1kEVvEd8ShFo3F-1"
        >
          Figma
        </a>
      </p>
      <Link
        href="./test1"
        className="text-blue-900 underline hover:text-blue-950"
      >
        Slingshot
      </Link>
      <br></br>
      <Link
        href="./test1chatgpt"
        className="text-blue-900 underline hover:text-blue-950"
      >
        ChatGPT
      </Link>
      <h2 className="text-3xl my-4">Test 2 - full page</h2>
      <p>
        <a
          className="text-blue-900 underline hover:text-blue-950"
          target="_blank"
          href="https://www.figma.com/design/AbqMZaJVGkMJAhKjU9IWsE/Sample-homepage--Community-?node-id=0-1&t=hn0GA68YF7dwPi7v-1"
        >
          Figma
        </a>
      </p>
      <Link
        href="./test2"
        className="text-blue-900 underline hover:text-blue-950"
      >
        Slingshot
      </Link>
      <br></br>
      <Link
        href="./test2chatgpt"
        className="text-blue-900 underline hover:text-blue-950"
      >
        ChatGPT
      </Link>
      <h2 className="text-3xl my-4">Test 3 - section</h2>
      <p>
        <a
          className="text-blue-900 underline hover:text-blue-950"
          target="_blank"
          href="https://www.figma.com/design/9jfWgk47tY8IansdQKmCsY/Free-Figma-Website-Landing-Pages---Startup-App--Community-?node-id=0-1177&t=C0mOvBuQbvMRyuZb-1"
        >
          Figma
        </a>
      </p>
      <Link
        href="./test3"
        className="text-blue-900 underline hover:text-blue-950"
      >
        Slingshot
      </Link>
      <br></br>
      <Link
        href="./test3chatgpt"
        className="text-blue-900 underline hover:text-blue-950"
      >
        ChatGPT
      </Link>
      <h2 className="text-3xl my-4">Test 4 - buttons</h2>
      <p>
        <a
          className="text-blue-900 underline hover:text-blue-950"
          target="_blank"
          href="https://www.figma.com/design/9jfWgk47tY8IansdQKmCsY/Free-Figma-Website-Landing-Pages---Startup-App--Community-?node-id=7-10075&t=DIp9p6fKLKgVFgKl-1"
        >
          Figma
        </a>
      </p>
      <Link
        href="./test4"
        className="text-blue-900 underline hover:text-blue-950"
      >
        Slingshot
      </Link>
      <br></br>
      <Link
        href="./test4chatgpt"
        className="text-blue-900 underline hover:text-blue-950"
      >
        ChatGPT
      </Link>
    </div>
  );
}
