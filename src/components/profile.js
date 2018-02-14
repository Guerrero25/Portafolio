import React, { Component } from 'react';
import Head from './head';
import Bio from './bio';
import Contacts from './contacts';
import Skills from './skills';


class Profile extends Component {
    render () {
        return (
            <section className="profile-section">
                    <Head /> 
                    <Bio />
                    <Contacts />
                    <Skills />
                </section>
        )
    }
}

export default Profile;