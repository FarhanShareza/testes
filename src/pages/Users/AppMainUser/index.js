import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Invitations } from '..'
import { Footer, Header} from '../../../components/molecules/User'
import './user_main.scss'

const MainAppUser = () => { 
    return (
        <div className="wrapper">
            <Router>
            {/* <div className="header-wrapper">
                <Header/>
            </div> */}
            <div className="content-wrapper-main">
                <Switch>
                    <Route path="/anggun-iqbal">
                        <Invitations />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            {/* <div>
                <Footer/>
            </div> */}
            </Router>
        </div>
    )
}

export default MainAppUser
