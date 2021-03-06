import React from 'react'
import { styled, keyframes } from '@stitches/react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { violet, blackA } from '@radix-ui/colors'

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Text type="navTrigger">Features</Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Text type="navLink">Navigation Menu</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Toggle Group</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Visually Hidden</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Server Side Rendering</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Context Menu</Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Text type="navTrigger">Resources</Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Text type="navLink">Context Menu</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Server Side Rendering</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Toggle Group</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Visually Hidden</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Navigation Menu</Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Text type="navTrigger">Tutorials</Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Text type="navLink">Blog Posts</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Toggle Group</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Visually Hidden</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Server Side Rendering</Text>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <Text type="navLink">Context Menu</Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  )
}

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})
const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})
const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})
const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  border: '1px solid transparent',
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  position: 'absolute',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  zIndex: 999,
})

const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {})

// eslint-disable-next-line react/display-name
const NavigationMenuTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
)

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px',
  gap: 2,
  color: 'white',
})

const StyledCaret = styled(CaretDownIcon, {
  color: 'white',
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  paddingTop: '100px',
  paddingBottom: '30px',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: 'auto',
  minHeight: '50vh',
  color: 'white',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  lineHeight: 1,
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  width: '100%',
  backgroundColor: blackA.blackA12,
  overflow: 'hidden',
  height: 'var(--radix-navigation-menu-viewport-height)',
  zIndex: 1,
})

const ViewportPosition = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
})

const Text = styled('p', {
  variants: {
    type: {
      navTrigger: {
        fontSize: '1.2rem',
        textTransform: 'uppercase',
      },
      navLink: {
        fontSize: '2rem',
        fontWeight: '200',
      },
    },
  },
})

export default NavigationMenuDemo
