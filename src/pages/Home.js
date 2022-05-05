import { BaseStyles, Heading } from "@primer/react"
import { lazy, Suspense } from "react"
import CustomSpinner from "../components/CustomSpinner"

import { HeaderStyle } from "../styles/Styles"

// Lazy imports, if the loading takes a long time a spinner can be shown instead
const BanTable = lazy(() => import("../components/BanTable"))

const Home = () => {
    return (
        <BaseStyles>
            <Heading sx={HeaderStyle}> Global bans </Heading>
            <Suspense fallback={<CustomSpinner />}>
                <BanTable />
            </Suspense>
        </BaseStyles>
    )
}

export default Home
