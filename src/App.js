import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, VIEW_USERS } from "./Queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

import gql from "graphql-tag";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {  
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;





// function App() {
//   // const getAllUsers = useQuery(GET_USERS);
//   // const userInfo = useQuery(VIEW_USERS, { variables: { companyid: 1 }});
//   // if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
//   // if (getAllUsers.error || userInfo.error) return <React.Fragment>Error :(</React.Fragment>;

//   let input;
//   const { data, loading, error } = useQuery(GET_USERS);
//   // const [createTodo] = useMutation(CREATE_TODO);
//   // const [deleteTodo] = useMutation(REMOVE_TODO);
//   // const [updateTodo] = useMutation(UPDATE_TODO);

//   if (loading) return <p>loading...</p>;
//   if (error) return <p>ERROR</p>;
//   if (!data) return <p>Not found</p>;

//   return (
//     <div className="container">
//       <Card>
//         <CardHeader>Query - Displaying all data</CardHeader>         
//         <ul>
//           {data.getCompany.map((todo) =>
//             <li key={todo.companyid} className="w-100">
//               <span className={todo.completed ? "done" : "pending"}>
//                 {todo.companyname}
//               </span>
//             </li>
//           )}
//           {
//             typeof data.getCompany
//           }
//         </ul>
//       </Card>
//     </div>
//   )
// }

// export default App;

        