import ReactDOM from 'react-dom/client';
import Router from './Routes/router';
import { QueryClientProvider, QueryClient } from 'react-query';



const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
   

          {/* <GlobalStyle /> */}
          <Router />
      
     
    </QueryClientProvider>
);
