import React from 'react'
import { styled, keyframes } from '@stitches/react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { violet, mauve, blackA } from '@radix-ui/colors'

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

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink> HI </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink> HI </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  )
}

const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  zIndex: 999,
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  border: '2px solid yellow',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: '10px',
  zIndex: 9999,
})

// TRIGGER
const NavigationMenuTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
)

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  border: '2px solid yellow',
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  color: 'white',
})

const StyledCaret = styled(CaretDownIcon, {
  border: '2px solid yellow',
  position: 'relative',
  color: 'white',
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})
// TRIGGER //

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  // top: 0,
  // left: 0,
  width: '100vw',
  height: 'auto',
  minHeight: '30vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
})

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  fontSize: 50,
  lineHeight: 1,
})

const NavigationMenuViewport = styled(NavigationMenuPrimitive.Viewport, {
  // position: 'absolute',
  width: '100%',
  backgroundColor: 'white',
  overflow: 'hidden',
  height: 'var(--radix-navigation-menu-viewport-height)',
  zIndex: 1,
})

const ViewportPosition = styled('div', {
  // position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
  zIndex: 1,
})

export default NavigationMenuDemo
