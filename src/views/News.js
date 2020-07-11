import React from 'react';
import NewsLogo from '../img/react.png';

export default function News() {
    return (
        <div className="App">
            <header className="App-header">
                <div class="container">
                    <div class="row">
                        <div class="col-7">
                            <h1>This Is News</h1>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </article>
                        </div>
                        <div class="col-5">
                            <div class="slopeIcon">
                                <img src={NewsLogo} style={{ width: 200, height:200 }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}