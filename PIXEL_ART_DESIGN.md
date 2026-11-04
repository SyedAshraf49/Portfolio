# Pixel Art Design System

This portfolio now features a complete pixel art aesthetic inspired by retro 8-bit and 16-bit games.

## Key Features

### Typography
- **Font**: Press Start 2P (Google Fonts)
- Pixelated, monospace font reminiscent of classic arcade games
- Crisp, no anti-aliasing for authentic pixel look

### Color Palette
```
--pixel-bg-dark: #080d1b    (Deep navy background)
--pixel-bg-mid: #111d36     (Card and panel surface)
--pixel-bg-light: #192b4a   (Raised navy surface)
--pixel-blue: #4d8dff       (Primary cobalt accent)
--pixel-cyan: #62d9e6       (Bright cyan highlight)
--pixel-teal: #42cbb4       (Secondary ocean accent)
--pixel-amber: #ffc857      (Warm highlight and secondary badge)
--pixel-gold: #ffd166       (Achievement and featured marker)
--pixel-orange: #e99b4f    (Warning accent)
--pixel-red: #d97755       (Error feedback)
--pixel-white: #e8f2ff     (Text)
--pixel-gray: #9fb5d1      (Muted text)
```

Blue remains dominant; teal and amber provide restrained contrast. Pink is not part of the palette. Legacy `green`, `magenta`, and `yellow` variable names are compatibility aliases only.

### Visual Effects

#### Borders
- 4px solid borders (no rounded corners)
- Sharp, blocky edges
- Color-coded by category

#### Shadows
- Block shadows instead of blur
- Format: `8px 8px 0 color` (stepped, not blurred)
- Layered shadows for depth

#### Animations
- `steps()` timing function for choppy, retro motion
- No smooth easing curves
- Stepped transitions (4-8 steps typically)

#### Grid Overlay
- Subtle 2-4px pixel grid visible on background
- Scanline effect option
- Dithering patterns for texture

### Components

#### Buttons
- 4px borders
- Block shadows
- Active state: translates to simulate button press
- No gradients, solid colors only

#### Cards
- No border-radius
- Thick borders (4px)
- Dithering pattern overlays
- Box shadows for 3D effect

#### Inputs & Forms
- Monospace pixel font
- Block-style borders
- Solid color focus states

#### Skills Section
- Grid-based layout
- Pixel art cards with category colors
- Stepped hover animations
- Tooltip with retro styling

## Implementation Details

### CSS Techniques
1. **Image Rendering**: `image-rendering: pixelated` for crisp edges
2. **No Anti-Aliasing**: Disabled on all elements
3. **Stepped Animations**: `animation-timing-function: steps(n)`
4. **Block Shadows**: Multiple `box-shadow` layers
5. **Text Shadows**: Offset shadows for depth, no blur

### Font Sizes
Due to the chunky pixel font:
- Base: 8px
- Headings: 0.5rem - 2rem (8px - 32px)
- Body text: 0.5rem - 0.65rem (8px - 10.4px)
- Small text: 0.4rem - 0.5rem (6.4px - 8px)

### Responsive Considerations
- Font sizes scale with viewport
- Grid layouts adapt but maintain blocky aesthetic
- Touch targets remain accessible (min 44px)

## Browser Support
- Modern browsers with CSS Grid and Custom Properties
- Google Fonts API for Press Start 2P
- Graceful degradation for older browsers

## Performance
- Minimal animations (stepped, not continuous)
- CSS-only effects (no JavaScript for styling)
- Optimized font loading

## Accessibility
- Maintained WCAG 2.1 AA contrast ratios
- Pixel font remains readable at proper sizes
- Keyboard navigation preserved
- Screen reader friendly structure
- Focus indicators using dotted outlines (pixel-style)
