import React from 'react';

// icons
import {GiTacos} from "react-icons/gi";

function HomeNav() {
    return (
<nav id="HomeNav" class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Nick Yopko</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/coding">Coding</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/marketing">Marketing</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/writing">Writing</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/resume">Contact/Resume</a>
            </li>
        </ul>
    </div>
</nav>

    );
}

export default HomeNav;