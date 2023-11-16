import * as React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import InsertField from './components/InsertField';
import ShowList from './components/ShowList';
import UpdateData from './components/UpdateData';


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout></RootLayout>}> 
        <Route path="/" element={<ShowList></ShowList>}> </Route>
        <Route path="/post" element={<InsertField></InsertField>}> </Route>
        <Route path="/post/:id/update" element={<UpdateData></UpdateData>}> </Route>
        
        </Route>
         
      </Route>
    )
  );

  return (
   <RouterProvider router={route}></RouterProvider>
   
  )
}

export default App
