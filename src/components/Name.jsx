import React from 'react'
import styled from '@emotion/styled'

import theme from '../styles/theme'

const Name = ({ children }) => {
    return <StyledSpan>{children}</StyledSpan>
}

const StyledSpan = styled.span`
font-family: 'Pacifico', cursive;
color: ${theme.accent2};
text-shadow: 1px 0px 0px ${theme.accent5},
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
    11px 12px 0px ${theme.dark};
    }
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
    &:after {
    z-index: -1;
    text-shadow: 
    -1px -1px 0 ${theme.accent6},
    1px -1px 0 ${theme.accent6}, 
    -1px 1px 0 ${theme.accent6}, 
    1px 1px 0 ${theme.accent6}, 
    -3px 3px 2px ${theme.dark}, 
    -5px 5px 2px ${theme.dark},
    -7px 7px 2px ${theme.dark},
    -8px 8px 2px ${theme.dark},
    -9px 9px 2px ${theme.dark},
    -11px 11px 2px ${theme.dark};
    }
`

export default Name