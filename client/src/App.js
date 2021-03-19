import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin'
import AdminSignup from './components/AdminSignup'
import UserSignUp from './components/UserSignUp'
import DashboardHome from './components/DashboardHome'
import NewBooking from './components/NewBooking'
import MyBooking from './components/MyBooking'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path='/' component={Home} exact />
        <Route path='/userlogin' component={UserLogin} />
        <Route path='/adminlogin' component={AdminLogin} />
        <Route path='/usersignup' component={UserSignUp} />
        <Route path='/adminsignup' component={AdminSignup} />
        <Route path='/dashboard' component={DashboardHome} />
        <Route path='/newbooking' component={NewBooking} />
        <Route path='/mybooking' component={MyBooking} />
        <Route path='/admindashboard' component={AdminDashboard} />
      </main>
    </BrowserRouter>


  );
}

export default App;
