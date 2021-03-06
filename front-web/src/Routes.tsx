import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

const Routes = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

export default Routes;