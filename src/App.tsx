import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Chat from './Chat';
import { ConversationContextProvider } from './contexts/ConversationContext';

const queryClient = new QueryClient();

function App() {
  return (
    <ConversationContextProvider>
      <QueryClientProvider client={queryClient}>
        <Chat />
      </QueryClientProvider>
    </ConversationContextProvider>
  );
}

export default App;
