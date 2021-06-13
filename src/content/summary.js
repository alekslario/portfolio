export default [
  {
    input: "Alex.currentLocation",
    return: '"London"',
  },
  {
    input: "Alex.contactInfo",
    return:
      '["<a href="mailto:aleksandlario@gmail.com">aleksandlario@gmail.com</a>", "<a rel="noopener" target="_blank" href="https://www.linkedin.com/in/aleksandrs-larionovs/">LinkedIn</a>", "<a rel="noopener" target="_blank" href="https://github.com/alekslario">github</a>"]',
  },
  {
    input: "Alex.resume",
    return: `['<a href="AleksandrsLarionovsResume.pdf" download >resume.pdf</a>']`,
  },
  {
    input: "Alex.interests",
    return: '["tech", "fitness", "gaming"]',
  },
  {
    input: "Alex.skills",
    return:
      '["JavaScript", "Sass", "MongoDB",  "Typescript", "React", "Node", "Python", "webpack", "Docker"]',
  },
]
