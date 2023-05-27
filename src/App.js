import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Main from './layout/Main';
import Orders from './component/Orders/Orders';
import PrivateRoute from './routes/PrivateRoute';
const router= createBrowserRouter([{
  path:'/',
  element:<Main></Main>,
  children:[{

     path:'/',
     element:<PrivateRoute><Home></Home></PrivateRoute>
     },
     {
     path:'/orders',
     element:<PrivateRoute> <Orders></Orders></PrivateRoute>
     },

     {
      path:'/register',
      element:<Register></Register>
     },

     {
      path:'/login',
      element:<Login></Login>
     }
]
}])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
