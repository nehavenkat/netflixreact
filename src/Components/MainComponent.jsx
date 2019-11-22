import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import GallaryComponent from './GallaryComponent';
import { Container} from "reactstrap"


class MainComponent extends Component {
    render() {
        return (
            <Container>
                <NavbarComponent/>
                <GallaryComponent/>
             </Container>
        );
    }
}

export default MainComponent;