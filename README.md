# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here]()
- Live Site URL: [Add live site URL here]()

## My process

### Built with

- CSS custom properties
- Flexbox
- Tailwind css
- Mobile-first workflow
- Vite JS
- [React](https://reactjs.org/) - JS library
- Framer motion

### What I learned

The scale property in css. This is a handly tool to scale up and element without affecting its widht and the height that the property has.

```js
{
  /* image section */
}
<div className="w-full relative overflow-x-hidden transform md:scale-[1.5]">
  <picture>
    <source media="(min-width: 768px)" srcSet={editor} />
    <img
      src={mobileEditor}
      alt="Blogr Editor"
      className="w-full md:w-[100rem] md:translate-x-[20%]"
    />
  </picture>
</div>;
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Futture producst are going to have animation intergrations for single page websites to improve the user experience.

## Author

- Frontend Mentor - [@mwandamena](https://www.frontendmentor.io/profile/Mwandamena)
