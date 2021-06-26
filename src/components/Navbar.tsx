import React, { Component } from 'react';

import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface IStateNavbar {
    isOpen: boolean;
}

export default class Navbar extends Component<{}, IStateNavbar> {

    public readonly state: Readonly<IStateNavbar> = {
        isOpen: false,
    }

    public render() {
        const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className='logoHeader'>
                            <h1>HOBO CHAMBERS</h1>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

    private handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
