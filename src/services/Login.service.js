import { Component } from "react";
import axios from "axios";

const baseURL = "https://userauth23-fbe378948f7c.herokuapp.com/login";

class LoginService extends Component {
    constructor(props) {
        super(props);
    }

    loginAPI = async () => {
        const { username, password } = this.props;
        try {
            let login = axios
                .post(baseURL, {
                    username: username,
                    password: password,
                })

            return login
        } catch (error) {
            console.error(error)
        }


    };
}

export default LoginService;
