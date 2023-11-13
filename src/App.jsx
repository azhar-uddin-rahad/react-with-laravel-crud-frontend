import * as React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import InsertField from './components/InsertField';
import ShowList from './components/ShowList';


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout></RootLayout>}> 
        <Route path="/post" element={<InsertField></InsertField>}> </Route>
        <Route path="/" element={<ShowList></ShowList>}> </Route>
        
        </Route>
         
      </Route>
    )
  );

  return (
   <RouterProvider router={route}></RouterProvider>
   
  )
}

export default App
