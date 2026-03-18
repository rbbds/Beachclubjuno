# Juno Design System Guidelines

## Colors
- Never use hardcoded hex values in components. Use Tailwind utilities that map to theme.css custom properties.
- Navy: bg-primary / text-primary (#3d7183)
- Terracotta: bg-accent / text-accent (#cc6435)  
- Cream: bg-background (#f6f4db)
- Sage: bg-secondary (#9fbaae)

## Drawers
- All drawers must use BaseDrawer as wrapper
- Never build inline drawer logic — always use the shared component

## Typography
- All headlines: fontFamily 'Bebas Neue, sans-serif'
- All body text: fontFamily 'Museo, sans-serif'
- Never use style={{ fontFamily }} inline if a section already has it on the parent

## Fonts
- font-family declarations belong on section wrappers, not repeated on every child element

## Code Organization
- Use shared utility functions from /src/app/utils/ instead of duplicating code
- Keep components DRY (Don't Repeat Yourself)
- Extract common patterns into reusable components

## Animations
- All drawer animations use the drawer-open and drawer-close classes defined in theme.css
- Content stagger animations use drawer-content-1 through drawer-content-7 classes
- Never inline animation CSS — use the shared classes
