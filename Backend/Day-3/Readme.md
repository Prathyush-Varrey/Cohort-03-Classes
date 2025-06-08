Middlewares :
               Middle ware in express refers to the function that process before reaching the route handlers
               These functions can modify req and res objects, end the req-res cycle or call next() middle ware function.
               Middleware functions are executed in the order they defined.

               Middleware can perform tasks like
                    Auth
                    logging or
                    error handling etc,.

               Middleware helps separate concerns and manage complex rountes effciently.

               Working of Middleware
               ![Middleware Flow Image] (images/Middleware flow.png)
```javascript
          app.use((req, res, next)=>{
               console.log(`Middle ware`);
               next();
          })


          What Middleware does in Express?
           1) Execute code.
           2) Modify Req and Res
           3) End the Req and Res cycle.
           4) Call the Next Middle ware.

How Middlware works ?
     1. Request arrives at the server.
     2. Middleware function are applied to the request, One by one.
     3. Each Middle ware can either :
          - send a response and end the req-res cycle.
          - call next() to pass control to the next middleware.
     4. if no middle ware ends the cycle, the route handler is reached, and the final response is sent.

Types of Middle ware:
     - Application-level Middleware,
     - Router-level Middleware,
     - Error-Handling middleware,
     - Built-in Middleware,
     - Third-party Middleware