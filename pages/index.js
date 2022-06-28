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
const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})
const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})
// const fadeIn = keyframes({
//   from: { opacity: 0 },
//   to: { opacity: 1 },
// })
// const fadeOut = keyframes({
//   from: { opacity: 1 },
//   to: { opacity: 0 },
// })

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
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
})

const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
})

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
})

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: violet.violet10,
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

const NavigationMenuTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
)

const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  // top: 0,
  // left: 0,
  width: '100vw',
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
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
})

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
})

export default NavigationMenuDemo
