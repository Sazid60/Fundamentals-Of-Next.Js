## Fundamental Of Next.js

Welcome to Next.js!

We’re kicking off our journey with Fundamentals of Next.js — the first step toward mastering one of the most powerful React frameworks in today’s web development world.

In this module, you’ll discover why Next.js is a game-changer compared to plain React, learn how pre-rendering works, and get hands-on by building your very first Next.js app. From routing (basic, nested, dynamic, and even catch-all!) to understanding React server components, you’ll explore the core concepts that make Next.js stand out.

By the end, you’ll also be comfortable with navigation, group routing with layouts, and styling with built-in CSS modules. This module sets the foundation you’ll need to unlock all the advanced features coming up later in our Next.js journey.

Get ready to dive in — your Next.js adventure starts here!

## 51-1 Let's start our journey with Next.js

- The React Framework For The Web (used by some of the worlds largest companies)
- This is React With super Power

#### The Super Powers are

- Built In Optimization (image and font optimization will be done by default)
- Pre-rendering (SSR +SSG) -(html file created in build time)
- Next Level Data Fetching
- Powerful Routing and Layouts
- React Server Component (server side render and server side run)
- Server Actions
- Route Handlers

## 51-2 Why Next.js? The competitive edge of Next.js over React.js

- React is a js library for web and native user interfaces
- Next.js is the react framework for the web

![alt text](image.png)

### head to head comparison of React vs Next.js

![alt text](image-1.png)

![alt text](image-2.png)

- Moreover Next.js is Blazing fast because of pre-rendering

#### What is rendering?

- Rendering is a webpage is the process of turning HTML, CSS and Javascript code into an interactive page that website visitors expect to see.

##### Rendering is of Two Type

- `Pre Rendering` (Next.js)
- `Client Side Rendering` (React)

#### `Pre Rendering Performance Optimization is done in two ways`

- `Static Site generation (SSG)`
- `Server Side Rendering (SSR)`

## 51-3 Clear concept of pre-rendering and client-side rendering

### Client Side Rendering

- Client-Side Rendering (CSR) is a way of building web applications where most of the page’s content is rendered directly in the browser using JavaScript, rather than being fully generated on the server.

### Pre-Rendering

- Pre-rendering is a technique used in modern web development where the HTML for a page is generated in advance in build time and stored the html in hosting server (before a user requests it) rather than being built on the fly in the browser (CSR) or on every request from the server (SSR).

- This makes the content immediately available when someone visits the page, improving performance and SEO.

## 51-4 Create my first Next.js app

[Next.js](https://nextjs.org/)

#### Install Next.js

```
npx create-next-app@latest
```

![alt text](image-3.png)

- src -> app -> app router/app Directory (routing related works will be done here)

[Next.js Documentation](https://nextjs.org/docs/app/getting-started/installation)

## 51-5 Basic routing concept and nested routing

- each and every folder under the app folder will be a route. like about, contact

![alt text](image-4.png)

- nested routing

![alt text](image-5.png)

## 51-6 Exploring dynamic routes and catch-all routes

- whatever component we make in next.js by default becomes server component in next.js

- grabbing dynamic route

![alt text](image-6.png)

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const DynamicBlogPage = async ({ params }: any) => {
  // as its a server component by default we can use async

  console.log(await params);
  return (
    <div>
      <h1>Dynamic Blog Page Blog Id : 1 </h1>
    </div>
  );
};

export default DynamicBlogPage;
```

![alt text](image-7.png)

```tsx
import React from "react";

const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  // as its a server component by default we can use async
  // as this is a server component we are getting the params as promise 

  const { blogId } = await params;

  console.log(blogId);
  return (
    <div>
      <h1>Dynamic Blog Page Blog Id : {blogId} </h1>
    </div>
  );
};

export default DynamicBlogPage;
```

```
http://localhost:3000/blog/1
```

- lets handle more dynamic route like 

```
http://localhost:3000/blog/1/bai/habi/jani
```
- for dealing this kind of nested dynamic routes we need to use catch all routes 

- blog -> `[...slug]`

```tsx 
const CatchAllRoutes = async ({params}:{params : Promise<{slug :string[]}>}) => {
    console.log(await params)
    return (
        <div>
            <h1>Catch All Routes </h1>
        </div>
    );
};

export default CatchAllRoutes;
```

- we will  get the things in array of object


```
{ slug: [ '1', 'bai', 'habi', 'jani' ] }
```

## 51-7 Let's dive deep into React server components
- The component that directly renders in server side and runs in server side is called server component 

![alt text](image-9.png)

- converting server component to client component 
- app -> counter -> page.tsx
```tsx 
"use client"
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
        >
          +
        </button>
        <button
          onClick={() => setCount(prev => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

- this is not a best practice we can not enjoy server component facilities here. what to dow now? 

![alt text](image-10.png)

- we will just make the client component where these is interactivity required. 
- best practice 
- src -> components -> Counter.tsx

```tsx 
"use client"
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
        >
          +
        </button>
        <button
          onClick={() => setCount(prev => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

```

- src -> app -> counter -> page.tsx 

```tsx 
import Counter from '@/components/Counter';
import React from 'react';

const CounterPage = () => {
    return (
        <div>
            <Counter />
        </div>
    );
};

export default CounterPage;
```