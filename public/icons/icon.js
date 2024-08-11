import React from 'react';
import { Github, LinkedIn } from "./"

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <Github />
        case 'LinkedIn':
            return <LinkedIn />
    }
}

export default Icon;