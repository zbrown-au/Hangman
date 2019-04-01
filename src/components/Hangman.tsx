import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../data/Store';
import styles from '../assets/styles/Hangman.scss';

const Hangman: React.FunctionComponent = () => {
    return (
        <svg width="235" height="250">
            <g display="inline">
                <title>Stand</title>            
                <line stroke={styles.black} id="svgBase" y2="216.22115" x2="206.0481" y1="216.97115" x1="28.56251" stroke-width="15" />
                <line stroke={styles.black} id="svgStand" y2="215.01922" x2="63.35098" y1="23.65865" x1="64.85098" stroke-width="10" />
                <line stroke={styles.black} id="svgTopBar" y2="23.20672" x2="146.83656" y1="23.20672" x1="60" stroke-width="10" />
            </g>
            <g display={store.guessesLeft <= 7 ? "inline" : "none" }>
                <title>Noose</title>
                <line id="svgRope" y2="53.95672" x2="143.68752" y1="22.45672" x1="144.43752" stroke-width="5" stroke={styles.black} />
                <ellipse ry="17.25" rx="12.75" id="svgNoose" cy="68.95672" cx="142.93752" stroke-width="5" stroke={styles.black} fill="none"/>
            </g>
            <g display={store.guessesLeft <= 6 ? "inline" : "none" }>
                <title>Head</title>
                <ellipse ry="13.5" rx="14.25" id="svgHead" cy="69.70673" cx="142.93752" stroke-width="5" stroke={styles.hangmanBlue} fill="#27aae1"/>
            </g>
            <g display={store.guessesLeft <= 5 ? "inline" : "none" }>
                <title>Body</title>
                <line stroke="#27aae1" id="svgBody" y2="133.41826" x2="141.88944" y1="88.45673" x1="142.63944" stroke-width="5" />
            </g>
            <g display={store.guessesLeft <= 4 ? "inline" : "none" }>
                <title>ArmLeft</title>
                <line id="svgArmLeft" y2="96.69711" x2="143.69233" y1="122.94711" x1="112.94233" stroke-width="5" stroke="#27aae1" />
            </g>
            <g display={store.guessesLeft <= 3 ? "inline" : "none" }>
                <title>ArmRight</title>
                <line id="svgArmRight" y2="122.64903" x2="170.53848" y1="98.64903" x1="143.53848" stroke-width="5" stroke="#27aae1" />
            </g>
            <g display={store.guessesLeft <= 2 ? "inline" : "none" }>
                <title>LegLeft</title>
                <line stroke="#27aae1" id="svgLegLeft" y2="173.47115" x2="121.49041" y1="132.97115" x1="141.74041" stroke-width="5" />
            </g>
            <g display={store.guessesLeft <= 1 ? "inline" : "none" }>
                <title>LegRight</title>
                <line id="svgLegRight" y2="174.51923" x2="161.68752" y1="131.76923" x1="141.43752" stroke-width="5" stroke="#27aae1" />
            </g>
            <g display={store.guessesLeft <= 0 ? "inline" : "none" }>
                <title>Eyes</title>
                <text stroke="#27aae1" transform="matrix(0.6277283430099486,0,0,0.5453718900680542,105.26011717878282,88.58855030685663) " text-anchor="middle" font-family="Sans-serif" font-size="24" id="svgEyes" y="-38.02634" x="60.68325" stroke-width="0" fill={styles.black}>x x</text>
            </g>
        </svg>
    );
};

export default observer(Hangman);