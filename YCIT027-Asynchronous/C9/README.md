# JavaScript Runtime Environment

A JavaScript runtime environment is a collection of software components that provide the runtime environment in which JavaScript can execute. Modern JavaScript runtime environments consists of:

-   A JavaScript engine, which is responsible for parsing and executing JavaScript code.
-   A standard library, which provides a set of built-in objects such as Array, Date, and Math, as well as functions like parseInt().
-   A set of APIs which allow interaction with the host environment. For example, in a web browser, the APIs allow interaction with the web browser window, the DOM, and other web browser-specific functionality. setTimeout() is an example of a web browser and Node.js API.
-   A message queue, which is used to schedule tasks to be executed by the event loop.
-   An event loop, which is responsible for executing tasks from the message queue.

## JavaScript Engines

A JavaScript engine is a computer program or an interpreter which executes JavaScript code. The JavaScript engine is usually embedded in the host environment. The most common JavaScript engines are:

-   [V8](https://v8.dev/) - developed by Google for the Chrome browser (Microsoft Edge also uses this engine and Node.js)

-   [SpiderMonkey](https://spidermonkey.dev/) - developed by Mozilla for the Firefox browser

-   [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) - developed by Apple for the Safari browser

The JavaScript engine contains a call stack and a heap. The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocations (function calls). The heap is a name given to a large and mostly unstructured region of memory.

## Built-in / Standard JavaScript Libraries

JavaScript has a standard library of built-in objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. These built-in objects and language elements are commonly referred to as the **ECMAScript** specification.

## External JavaScript Libraries

An external JavaScript library is JavaScript code that you can include in your project. Some libraries are called "Frameworks" because they are opinionated about how you should write your code. Other libraries are called "Libraries" because they are more flexible and don't make assumptions about how you should write your code. Some examples of JavaScript libraries are:

-   [React](https://reactjs.org/) - a JavaScript library for building user interfaces

-   [Angular](https://angular.io/) - a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations

-   [Vue](https://vuejs.org/) - an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications

-   [jQuery](https://jquery.com/) - a cross-platform JavaScript library designed to simplify the client-side scripting of HTML

**Note** that these libraries are not part of the JavaScript runtime environment. They are separate libraries that you can include in your project.

## Environment APIs (Web APIs or Node.js APIs)

A JavaScript API is a set of functions and objects that allow you to build applications and provide a way to interact with the browser.

See https://developer.mozilla.org/en-US/docs/Web/API for more information.

Important APIs include:

-   [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - the Document Object Model (DOM) is a programming interface for HTML and XML documents

-   [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) - sets a timer which executes a function or specified piece of code once the timer expires

-   [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) - repeatedly calls a function or executes a code snippet, with a fixed time delay between each call

-   [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - the Fetch API provides an interface for fetching resources (including across the network)

-   [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - the localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions

-   [SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) - the sessionStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across page reloads for the same page

**Note** that some of these APIs/endpoints are only available in the browser and some are only available in Node.js. For example, the `localStorage` API is not available in Node.js and the `fs` API is not available in the browser.

Check out the MDN Web API reference for a complete list of Browser APIs: https://developer.mozilla.org/en-US/docs/Web/API

Check out the Node.js API reference for a complete list of Node.js APIs: https://nodejs.org/api/

## Message Queue

A message queue is a data structure that uses the First In, First Out (FIFO) principle to temporarily store messages until they are processed by a receiving program (in our case, the JavaScript engine). Messages are added to the message queue by the browser's API or Node.js API. Messages are removed (dequeued) from the message queue by the event loop.

Some environments will have more than one message queue. For example, the browser has a task queue and a micro-task queue. Messages in the micro-task queue are processed before messages in the task queue.

## Event Loop

The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. It works by checking the message queue to see if there are any messages to process. If there are no messages, the program waits until a message is added to the queue. If there are messages in the queue, the event loop takes the first message from the queue and processes it. The event loop continues to process (dequeue) messages until the queue is empty.

**HOWEVER**, if the JavaScript engine is executing a long-running script, the event loop will not be able to process messages in the message queue. This is because the call stack is _blocked_ by the long-running script. The event loop will only be able to process messages in the message queue once the call stack is empty.

### Please read the following article:

[Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
