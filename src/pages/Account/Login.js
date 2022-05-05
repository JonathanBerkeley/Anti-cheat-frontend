import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../../components/CustomSpinner"

import { HeaderStyle } from "../../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const LoginForm = lazy(() => import("../../components/LoginForm"))

const Login = props => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Log in </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <LoginForm onAuthenticated={props.onAuthenticated} />
            </Suspense>
        </BaseStyles>
    )
}

export default Login