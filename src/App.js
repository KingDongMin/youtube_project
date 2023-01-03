import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import Home from './pages/Home';
import {QueryClient, QueryClientProvider} from 'react-query'
import { YoutubeApiProvider } from './context/YoutubeApiContext';



const router = createBrowserRouter([{
  path:'/',
  element: <Home/>,
  errorElement:<NotFound/>,
  children:[
    {index: true,element:<Videos/>},
    {path:'/videos' ,element:<Videos/>},
    {path:'/videos/:keyword',element:<Videos/>},
    {path:'/videoDetail', element:<VideoDetail/>},
    {path:'/videoDetail/:videoId', element:<VideoDetail/>}]
}]);

export default function App() {

  const queryClient = new QueryClient();

  return (
    <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </YoutubeApiProvider>
  );
}

