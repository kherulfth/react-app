import React from 'react';
import logoIg from '../img/ig.png';
import logoWa from '../img/wa.png';
import logoFb from '../img/fb.png';

export default function Footer() {
    return (
        <div className="App">
            <header className="App-header">
                <footer class="footsy">
                    <div class="row">
                        <div class="col-3 mobileStack">
                            <h1>SOSMED</h1>
                            <ul>
                                <li><img src={logoFb} style={{ width: 20, height: 20}} /> Facebook</li>
                                <li><img src={logoIg} style={{ width: 20, height: 20}} /> Instagram</li>
                                <li><img src={logoWa} style={{ width: 20, height: 20}} /> WhatsApp</li>
                            </ul>
                        </div>
                        <div class="col-3 mobileStack">
                            <h1>Company</h1>
                            <ul>
                                <li>About</li>
                                <li>Press Center</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div class="col-3 mobileStack">
                            <h1>Resources</h1>
                            <ul>
                                <li>Contact</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </header>
        </div>
    )
}