import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Context from "../contexts/Context";

const PrivateRoute = ({ children, redirectTo }) => {
    const { auth } = useContext(Context)
    const navigation = useNavigation()

    return auth ? children : navigation(redirectTo)
}

export default PrivateRoute