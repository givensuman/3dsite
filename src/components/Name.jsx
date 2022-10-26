import React from 'react'
import styled from '@emotion/styled'

import theme from '../styles/theme'

const Name = ({ p, children }) => {
    return <StyledSpan p={p}>{children}</StyledSpan>
}

const shade = (fn, numbers, color) => {
    if (fn) {
        return `${fn(numbers[0])}px ${fn(numbers[1])}px ${fn(numbers[2])}px ${color}`
    } else {
        return `1px 0px 0px ${theme.accent5},
        0px 1px 0px ${theme.accent5},
        2px 1px 0px ${theme.accent5},
        1px 2px 0px ${theme.accent5},
        3px 2px 0px ${theme.accent5},
        2px 3px 0px ${theme.accent5},
        4px 3px 0px ${theme.accent5},
        3px 4px 0px ${theme.accent5},
        5px 4px 0px ${theme.accent5},
        4px 5px 0px ${theme.accent5},
        6px 5px 0px ${theme.accent5},
        5px 6px 0px ${theme.accent5},
        7px 6px 0px ${theme.accent5},
        6px 7px 0px ${theme.accent5},
        8px 7px 0px ${theme.accent4},
        7px 8px 0px ${theme.accent4},
        9px 8px 0px ${theme.accent4},
        8px 9px 0px ${theme.accent4},
        10px 9px 0px ${theme.accent4},
        9px 10px 0px ${theme.accent4},
        11px 10px 0px ${theme.accent4},
        10px 11px 0px ${theme.accent4},
        11px 12px 0px ${theme.dark};`
    }
}

const StyledSpan = styled.span`
font-family: 'Pacifico', cursive;
color: ${theme.accent2};
text-shadow: ${props => [
    {
        color: theme.accent5,
        values: [0.1, 0, 0]
    }, 
    {
        color: theme.accent5,
        values: [0, 0.1, 0]
    },
    {
        color: theme.accent5,
        values: [0.2, 0.1, 0]
    },
    {
        color: theme.accent5,
        values: [0.1, 0.2, 0]
    },
    {
        color: theme.accent5,
        values: [0.3, 0.2, 0]
    },
    {
        color: theme.accent5,
        values: [0.2, 0.3, 0]
    },
    {
        color: theme.accent5,
        values: [0.4, 0.3, 0]
    },
    {
        color: theme.accent5,
        values: [0.3, 0.4, 0]
    },
    {
        color: theme.accent5,
        values: [0.5, 0.4, 0]
    },
    {
        color: theme.accent5,
        values: [0.4, 0.5, 0]
    },
    {
        color: theme.accent5,
        values: [0.6, 0.5, 0]
    },
    {
        color: theme.accent5,
        values: [0.5, 0.6, 0]
    },
    {
        color: theme.accent5,
        values: [0.7, 0.6, 0]
    },
    {
        color: theme.accent5,
        values: [0.6, 0.7, 0]
    },
    {
        color: theme.accent4,
        values: [0.8, 0.7, 0]
    },
    {
        color: theme.accent4,
        values: [0.7, 0.8, 0]
    },
    {
        color: theme.accent4,
        values: [0.9, 0.8, 0]
    },
    {
        color: theme.accent4,
        values: [0.8, 0.9, 0]
    },
    {
        color: theme.accent4,
        values: [1.0, 0.9, 0]
    },
    {
        color: theme.accent4,
        values: [0.9, 1.0, 0]
    },
    {
        color: theme.accent4,
        values: [1.1, 1.0, 0]
    },
    {
        color: theme.accent4,
        values: [1.0, 1.1, 0]
    },
    {
        color: theme.dark,
        values: [1.1, 1.2, 0]
    }
].map(obj => shade(props.p, obj.values, obj.color)).join(',')};
    
    &:before, :after {
    content: attr(data-heading};
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    }
    &:before {
        color: ${theme.accent3};
        width: 100%;
        z-index: 5;
    }
`

export default Name