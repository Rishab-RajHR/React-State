State is a built-in object used to store dynamic data in a React component.

It allows components to re-render automatically when the stored data changes.

State is mutable, meaning it can change over time based on user actions or events.

In functional components, state is created using the useState() hook.

Updating state is done through a setter function, not by modifying the variable directly.

State updates are asynchronous, so React batches updates for performance.

State should store only the data needed for rendering, not full objects or unnecessary values.

Avoid modifying state directly—always use the setter function to ensure re-rendering.

Multiple states can be used inside a single component through multiple useState() calls.

State is local to a component; to share it, use props or global state management (Context API, Redux, etc.).
