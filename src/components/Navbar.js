import { BaseStyles, Header } from '@primer/react'

import '../styles/App.css'

// Navigation bar at the top of the screen on all pages
const Navbar = props => {

    return (
        <BaseStyles>
            <Header sx={{ width: "100" }}>

                <Header.Item className='lindent' sx={{ paddingRight: 2 }}>
                    <Header.Link href="/" fontSize={5}>
                        <img src="/rocket.png" alt="HomelogButton" height="40" />
                    </Header.Link>
                </Header.Item>

            </Header>
        </BaseStyles>
    )
}

export default Navbar
