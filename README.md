# Chat app by Njegos Petrovic

### Steps to start the project

- **_npm install_** - Installs all the dependencies
- **_npm start_** **\-** Runs the app in the development mode.
- **_npm test_** *\- Runs all the tests*

### Features

User can: send a message using enter or send button, like a message using double click, reply, send a thumbs up emoji, send a single large emoji.

## Design and implementation decisions

- **App template and libraries used** \- The app was created using [Create React App](https://github.com/facebook/create-react-app) even though the CRA repo has been dead for a while. The main reason behind this (and some of the following) decision is that I wanted to use as few external sources as possible to make sure everybody is familiar with the sources used and nobody is wasting time on reading docs. Real world app would use [Vite](https://vitejs.dev/) (with or without [Bun](https://bun.sh/)), [Create Next App](https://nextjs.org/docs/app/api-reference/cli/create-next-app), [Remix](https://remix.run/docs/en/main/other-api/create-remix) or similar. External libraries I **did** use are following: [TanStack Query](https://tanstack.com/query/latest) and [Tailwind](https://tailwindcss.com/) because they are an absolute industry standard and creating an app without using them (or similar alternative) would differ too much from what you would expect from a newly created web app.
- **State management** \- I decided not to use any state management solution since there is quite a few great options available at the moment. If I was creating a chat app that was meant to be released the choice would probably be either a combo of [Zustand](https://zustand-demo.pmnd.rs/) and TanStack Query or [RTK](https://redux-toolkit.js.org/) with its Query functionality. However, there are many great alternatives to consider e.g [MobX](https://mobx.js.org/) or [Jotai](https://jotai.org/). That being said, since there was only one real piece of data that needed to be shared across the app I used React's Context API for simplicity's sake.
- **Testing** \- Once again, I used libraries that are considered a default choice for React - [React testing library] & [Jest]. However, there are alternatives that should be considered as well e.g. [Vitest](https://vitest.dev/) or [Playwright](https://playwright.dev/) for E2E testing.
- **Implementation and connecting to a real API** \- As stated in project requirements the chat app only has **send** message functionality - since we decided not to create any back end. However, updating the app to support fully functional chat would be quite straight forward with two tweaks - authentication & real data. I would accomplish this using either [Firebase](https://firebase.google.com/), [Supabase](https://supabase.com/) or [Pocketbase](https://pocketbase.io/) (Pocketbase doesn't support websockets out of the box and uses SSE). If using a third party service for this was out of the questions for some reasons, then either a custom implementation of websockets Web API or a service like [Socket.io](https://socket.io/) would be necessary. React Query hooks are already setup, it would be quite straightforward to replace mock functions with real ones.

### Notes

- **New message id** - I used a Math.random() function for this - for simplicity. In real world we would use a temporary ID e.g. UUID locally ( persisting the data in case of internet outage) and then replacing it with the DB created ID once the message is sent.
- **Scroll to bottom** - I decided not to implement this once the conversation changes because of inconsistent implementation of **scrollIntoView** and **scrollTo** methods in Chromium based browsers and others. This would require a bit more research to implement a stable solution and that's why I decided to cut it from the scope.
- **Tailwind config** - I haven't configured colors, spacing, custom values to save time.
- **Handling loading and network errors** - Since we are working with mock data that cannot fail, I cut this from scope. Error messaging system, error boundaries, suspense components etc. would be added for a real app.

### Improvements and out of scope functionality

- **Message status Indicators**: Add visual indicators to show the status of each message, such as when it has been sent, delivered, and seen by the recipient.
- **Typing indicator**: Implement a dynamic typing indicator that appears when a contact is typing a message.
- **Message timestamps**: Include precise timestamps for all messages, displaying when each message was sent.
- **Media messaging**: Expand messaging capabilities by enabling the sending of images and voice messages.
- **Contact search**: Introduce a search functionality for contacts.
- **Infinite scroll for chat history**: Infinite scrolling to load previous messages as users scroll up in a chat utilizing some variation of cursor based traversal.
