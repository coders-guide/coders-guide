import { RoadmapEntry } from "../types";

export const list: RoadmapEntry[] = [
  {
    id: 1,
    category: 0,
    type: "heading",
    title: "Web development with React: from zero to hero!",
    description:
      "We will start from basic fundamentals of creating simple websites, then - step by step - you will be presented with more and more advanced concepts.\n^Let's start with junior developer level.^\nIn order to move to the first subject, click the button below.",
    repeatable: false,
    difficult: false
  },
  {
    id: 2,
    category: 2,
    type: "node",
    title: "Basics of HTML markup",
    summary:
      "Begin with essentials of creating websites.\nLearn how to format text, embed images and create lists.\nUnderstand HTML document structure. See, how your code reflects in the browser window's content.",
    description:
      "Start with opening any text editor and creating your first HTML document. Learn text formatting, embedding images and creating lists. Study HTML document structure.\nYou can use online HTML editor so you can immediately see how result changes.",
    topics: [
      "Formatting text using basic HTML tags (`<strong>`, `<em>`, `<h1>`)",
      "Embedding multimedia (`<img>`)",
      "Lists (`<ul>`, `<li>`)",
      "Nesting elements (`<p>`, `<div>`)",
      "Structure of HTML document (`<head>`, `<body>`, `<title>`)",
      "Linking to other documents (`<a>`)"
    ],
    links: [
      {
        title: "Mozilla Developer Network - HTML basics for beginners",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
      },
      {
        title: "Video: Learn HTML in 12 minutes",
        url: "https://www.youtube.com/watch?v=bWPMSSsVdPk"
      },
      {
        title: "HTML For Beginners: The Easy Way",
        url: "https://html.com/"
      },
      {
        title: "HTML Basic Elements",
        url: "https://www.learn-html.org/en/Basic_Elements"
      },
      {
        title: "HTML Tutorial for Beginners by LearnCode.academy",
        url: "https://www.youtube.com/watch?v=RjHflb-QgVc"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 200,
    category: 2,
    type: "node",
    title: "Fundamentals of website styling",
    description:
      "Websites are a piece of art - and you need to become an artist.\nLearn how to make your HTML beautiful. Discover basic CSS rules, selectors and stylesheets.\nUnderstand sizes and units on the screen.",
    topics: [
      "Basic CSS styling using inline styles (`style` attribute):",
      "Essential text attributes: `color`, `font-weight`, `background-color`",
      "Basic element selectors using <head> stylesheet (`<style>` tag)",
      "Styling with classes given to elements (`class` attribute)",
      "Nested selectors (e.g. element selectors inside class selectors)",
      "Block elements and basic layouting (`display: flex` with `<div>s`, `width`, `height`)",
      "Margins, paddings and units in CSS",
      "Including multimedia in CSS (`background-image`)",
      'Using external CSS file stylesheets (`<link rel="stylesheet">`)'
    ],
    links: [
      {
        title: "Introduction to CSS on CSSTutorial.net",
        url: "https://www.csstutorial.net/css-intro/introductioncss-part1.php"
      },
      {
        title: "CSS: First Steps on Mozilla Developer Network",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"
      },
      {
        title: "Official CSS tutorial by W3.org",
        url: "https://www.w3.org/Style/Examples/011/firstcss.en.html"
      },
      {
        title: "CSS Beginner Tutorial on HTMLDog.com",
        url: "https://www.htmldog.com/guides/css/beginner/"
      },
      {
        title: "CSS Basic Tutorial on quackit.com",
        url: "https://www.quackit.com/css/tutorial/"
      }
    ],
    repeatable: true,
    difficult: false
  },

  {
    id: 3,
    category: 4,
    type: "node",
    title: "Start using a specialized text editor",
    description:
      "Instead of using notepad, you should become familiar with a specialized tool for writing code.\nThose are specially designed applications that speed up development process - the sooner you will make good habits with your tools, the better.",
    customListHeader: "Text editors to check out:",
    customList: ["Visual Studio Code (recommended)", "Sublime Text", "Atom"],
    links: [
      {
        title: "Visual Studio Code",
        url: "https://code.visualstudio.com/"
      },
      {
        title: "Sublime Text",
        url: "https://www.sublimetext.com/"
      },
      {
        title: "Atom",
        url: "https://atom.io/"
      }
    ],
    linksHeader: "Links to text editor homepages:",
    repeatable: false,
    difficult: false,
    isSingleGoal: true
  },
  {
    id: 300,
    category: 0,
    type: "heading",
    title: "First milestone: you can code elementary websites!",
    description:
      "Good job, you should be able to utilize your newly acquired skills in order to create simple websites.\nFor instance, you can create a homepage for yourself or your parents' business - as long, as someone will take care of hosting it on the internet. Keep going!"
  },
  {
    id: 5,
    category: 0,
    type: "node",
    title: "Basics of the internet",
    summary:
      "Since we are dealing with websites, you should understand basics of internet mechanisms.\n Learn about servers and browsers, understand how do requests work and when documents are being served.",
    description:
      "Read about basic internet mechanisms and become familiar with unerlying mechanisms.",
    topics: [
      "Communication between server and browser",
      "Idea and lifecycle of browser request",
      "Serving HTML documents and other assets"
    ],
    links: [
      {
        title: '"HTTP: The Protocol Every Web Developer Must Know" on Tutsplus',
        url:
          "https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177"
      },
      {
        title: "Mozilla Developer Network: A typical HTTP session",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Session"
      },
      {
        title: "Understanding HTTP basics",
        url: "http://www.steves-internet-guide.com/http-basics/"
      },
      {
        title: "HTTP - Overview on tutorialspoint.com",
        url: "https://www.tutorialspoint.com/http/http_overview.htm"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 6,
    category: 2,
    type: "node",
    title: "Improved HTML layouting",
    description:
      "Enhance visual organization of your HTML website.\nUnderstand basic `grid` constructs, study differences between `flex` and `grid`. Get to know how and when to apply them.",
    topics: [
      "How does `display: grid` work",
      "Fractions (`fr`) and explicit size values",
      "Named columns and rows",
      "When to use `flex` versus `grid`"
    ],
    links: [
      {
        title: '"A Complete Guide to Grid" on CSS-Tricks',
        url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
      },
      { title: "Learn CSS Grid", url: "https://learncssgrid.com/" },
      {
        title:
          "Mozilla Developer Network: Relationship of grid layout to other layout methods",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 7,
    category: 2,
    type: "node",
    title: "Basics of responsive design",
    description:
      "Learn how to make your website to be readable and usable on any device.\nStudy how and when to use media queries. Understand how do different machines interpret sizes.",
    topics: [
      "Media query syntax",
      "`min-width`, `max-width` clauses",
      "Portait and landscape",
      "Concept of mobile-first and desktop-first approaches"
    ],
    links: [
      {
        title: "Tutorial Republic: Media Queries and Responsive Web Design",
        url:
          "https://www.tutorialrepublic.com/css-tutorial/css3-media-queries.php"
      },
      {
        title: "Mozilla Developer Network: Beginner's guide to media queries",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries"
      },
      {
        title:
          "Video: Learn how to use CSS Media Queries in less than 5 minutes",
        url: "https://www.youtube.com/watch?v=2KL-z9A56SQ"
      },
      {
        title:
          "Smashing Magazine: How To Use CSS3 Media Queries To Create a Mobile Version of Your Website",
        url:
          "https://www.smashingmagazine.com/2010/07/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 8,
    category: 1,
    type: "node",
    title: "Learn the basics of JavaScript",
    summary:
      "Now, you will start to learn programming for real.\nTemporarily put aside your current HTML/CSS efforts. Write your first JavaScript code and learn the basics of scripting.\nUnderstand generic concepts and common building blocks of programming languages.",
    description:
      "Start with extending your HTML code with `<script> tags. Step by step, try to put new code portions in your script and observe how does it work.",
    topics: [
      "Basic console output (`console.log`)",
      "Assigning values to variables (`let`, `const`)",
      "Conditionals (`if`)",
      "Boolean, `null` and `undefined` values",
      "Loops (`for`)",
      "Functions and parameters",
      "Arrays",
      "Array functions (`forEach`, `map`, `filter`)",
      "Objects in JavaScript"
    ],
    links: [
      {
        title: "JavaScript basics by Autotelicum",
        url:
          "https://autotelicum.github.io/Smooth-CoffeeScript/literate/js-intro.html#overview"
      },
      {
        title: "Video: Learn JavaScript - Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
      },
      {
        title: "The Modern JavaScript Tutorial",
        url: "https://javascript.info/"
      },
      {
        title: "The Only JavaScript Tutorial You Will Ever Need on BitDegree",
        url: "https://www.bitdegree.org/learn/javascript-tutorial"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 9,
    category: 1,
    type: "node",
    title: "Reference and primitive types",
    description:
      "Understand that data is categorized by type. Learn differences between handling primitives (numbers, strings) and reference types (arrays, objects, functions).\nUnderstand how and when things change.",
    topics: [
      "`typeof` operator",
      "Primitive types - numbers, strings",
      "Reference types - arrays, objects",
      "Changing object passed as a parameter inside the function"
    ],
    links: [
      {
        title: "JavaScript Primitive vs. Reference Values",
        url:
          "https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/"
      },
      {
        title: "Article and video: Reference vs Primitive Values",
        url:
          "https://www.academind.com/learn/javascript/reference-vs-primitive-values/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 10,
    category: 1,
    type: "node",
    title: "Practice: nesting objects and structuring data in JavaScript",
    description:
      "Let's dive even deeper into Javascript.\nExperiment and learn how to combine things: put objects into arrays, arrays into objects, try to extract something useful by using `forEach`, `map`, `filter`.",
    customListHeader: "Try the following challenges:",
    practices: [
      'Try to construct a "database" object that will resemble some real-life information structure: e.g. a book library or a company hierarchy',
      "Write few functions that will perform useful tasks: finding particular object, filter out something by given criteria"
    ],
    links: [
      {
        title: "Eloquent JavaScript: Data Structures: Objects and Arrays",
        url: "https://eloquentjavascript.net/04_data.html"
      }
    ],
    repeatable: true,
    difficult: false
  },
  {
    id: 11,
    category: 0,
    type: "node",
    title: "Boolean algebra basics",
    summary:
      "It’s time for a lot of Venn diagrams.\n Understand logical functions. Get to know how to apply them in conditionals and array methods.\nStudy simple but useful boolean formulas like De Morgan’s laws.",
    description:
      "Understand logical functions. Get to know how to apply them in conditionals and array methods.\nStudy simple but useful boolean formulas like De Morgan’s laws.",
    topics: [
      "Revise knowledge about `NOT`, `OR` and `AND` operators",
      "`XOR` operator",
      "Logical operator precedence",
      "De Morgan's laws"
    ],
    links: [
      {
        title: "Ryans Tutorials: Boolean Algebra - Operators and Basics",
        url:
          "https://ryanstutorials.net/boolean-algebra-tutorial/boolean-algebra.php"
      },
      {
        title:
          "StackExchange question: What is an intuitive way to explain and understand De Morgan's Law?",
        url:
          "https://cs.stackexchange.com/questions/350/what-is-an-intuitive-way-to-explain-and-understand-de-morgans-law"
      },
      {
        title: "De Morgan's laws on Simple English Wikipedia",
        url: "https://simple.wikipedia.org/wiki/De_Morgan%27s_laws"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 13,
    category: 2,
    type: "node",
    title: "Basic DOM tree interaction",
    description:
      "Use JavaScript on the website and grasp its full power: ability to modify website's content.\nLearn about targeting HTML elements, changing their content and styling.",
    topics: [
      "Capturing elements: `querySelector` and `getElementById`",
      "Changing the content statically: `innerText` and `innerHTML`",
      "Styling elements using `element.style.[...]` field"
    ],
    links: [
      {
        title:
          "JavaScript 101: Finding Elements In The DOM Using querySelector",
        url:
          "https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm"
      },
      {
        title: "Quackit: InnerHTML in Javascript",
        url:
          "https://www.quackit.com/javascript/tutorial/innerhtml_in_javascript.cfm"
      },
      {
        title: "JavaScript 101: Setting CSS Styles Using JavaScript",
        url:
          "https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm"
      }
    ],
    repeatable: true,
    difficult: false
  },
  {
    id: 14,
    category: 2,
    type: "node",
    title: "Basics of event listeners",
    description:
      "At last, you can add some interactivity to your website.\nUnderstand how event listeners are related to elements, how to add and remove them.",
    topics: [
      "`addEventListener` function",
      "Types of events (start from `<button>` and `click`)",
      "`removeEventListener` function"
    ],
    practices: [
      "Try to add and remove an event listener basing on a single function, study and understand that listener attaches function by its reference"
    ],
    links: [
      {
        title: "Video: addEventListener() method",
        url: "https://www.youtube.com/watch?v=btrJ4JH71PI"
      },
      {
        title: "Bitdegree: AddEventListener in a Nutshell",
        url: "https://www.bitdegree.org/learn/javascript-addeventlistener"
      },
      {
        title: "JavaScript Event Listeners on Tutorialrepublic",
        url:
          "https://www.tutorialrepublic.com/javascript-tutorial/javascript-event-listeners.php"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 15,
    category: 2,
    type: "node",
    title: "Forms and form elements",
    summary:
      "Even more interactivity.\nAllow your website user to change contents of the website and input some data by himself.",
    description:
      "Even more interactivity.\nAllow your website user to change contents of the website and input some data by himself.\nLearn about different form building blocks and their possible interactions.",
    topics: [
      "`<input>` tag",
      "Different `<input>` types",
      "Extracting values from `<input>` elements using `.value` and `.checked`",
      "`<textarea>` and `<select>` elements"
    ],
    links: [
      {
        title: "Mozilla Developer Network: Your First Form",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form"
      },
      {
        title: "HTML Forms Tutorial - Interneting is Hard",
        url: "https://internetingishard.com/html-and-css/forms/"
      },
      {
        title: "HTML Forms on Quackit",
        url: "https://www.quackit.com/html/tutorial/html_forms.cfm"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 16,
    category: 2,
    type: "node",
    title: "Improved DOM tree manipulation",
    description:
      "Step up your DOM-changing game!\nLearn how to modify your document tree dynamically with JavaScript. Study nodes and elements of your document.",
    topics: [
      "Dynamic creation of elements using `document.createElement`",
      "`appendChild` and `removeChild` functions",
      "Differences between `element` and `node` in DOM",
      "Traversing DOM tree using `.children` and `.parentElement`"
    ],
    links: [
      {
        title: "Mozilla Developer Network: Manipulating document",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
      },
      {
        title: "Video: tutorial for appendChild()",
        url: "https://www.youtube.com/watch?v=e0ihEHxd6vI"
      },
      {
        title:
          '"Learn How to Use JavaScript Create Element Functions" on Bitdegree',
        url: "https://www.bitdegree.org/learn/javascript-create-element"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 17,
    category: 0,
    type: "node",
    title: "Basic data structures and algorithms: trees and recursion",
    description:
      "Learn about first abstract data structure: a *tree*. Put it into work, understand algorithms. Understand recursive functions.\nNotice what the DOM tree in the HTML document really is.",
    topics: [
      "Prerequisite: basics of classes in JavaScript",
      "Theory of trees: nodes, roots, children and parents",
      "Recursive functions (try elementary examples, e.g. Fibonacci sequence generator)",
      "Functions for traversing trees (finding certain value)",
      "Special type of tree: binary tree"
    ],
    links: [
      {
        title: "Mozilla Developer Network: Classes in JavaScript",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
      },

      {
        title: "Tree Data Structures in JavaScript for Beginners",
        url:
          "https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/"
      },
      {
        title: "Recursion in Functional JavaScript",
        url: "https://www.sitepoint.com/recursion-functional-javascript/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 18,
    category: 4,
    type: "node",
    title: "Using package managers",
    description:
      "Learn how to use `npm` or `yarn`. Get to know how to leverage the power of thousands of packages and libraries that you can import and use in your project.",
    topics: [
      "Installing and using `npm` or `yarn`",
      "`package.json` structure, `install` command"
    ],
    practices: [
      "Create new JavaScript (node.js) application and install any package, e.g. `lodash`, import and use it in your app"
    ],
    links: [
      {
        title: "Node.js NPM Tutorial – How to Get Started with NPM?",
        url: "https://www.edureka.co/blog/node-js-npm-tutorial/"
      },
      {
        title: "Yarn as an alternative to NPM - getting started",
        url: "https://legacy.yarnpkg.com/lang/en/docs/getting-started/"
      },
      {
        title: "The package.json guide",
        url: "https://flaviocopes.com/package-json/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 19,
    category: 1,
    type: "node",
    title: "Error handling",
    description:
      "_When you invent the ship, you also invent the shipwreck._\nTime to break something in your code. Invoke an error and learn how to handle it.\nUnderstand that while writing apps, it's important to predict various scenarios and if necessary, to inform its user about the failure.",
    topics: ["Exceptions and `try..catch` clauses"],
    practices: [
      "Experiment with your web application, gracefully inform the user if his actions end up with code failure"
    ],
    links: [
      {
        title: 'Error handling, "try..catch"',
        url: "https://javascript.info/try-catch"
      },
      {
        title:
          "Video: JavaScript Try Catch & Error Handling ES6 Tutorial (2020)",
        url: "https://www.youtube.com/watch?v=ye-aIwGJKNg"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 20,
    category: 1,
    type: "node",
    title: "Closures and functions as first-class entities",
    description:
      "Understand that in Javascript functions are just values - they can be passed around, saved, reassigned and even modified.\nLearn how to use it to your advantage.",
    topics: [
      "Revise your information about functions",
      "Differences between arrow and regular functions",
      "Passing functions as a parameters to another function",
      "`call` and `apply` methods",
      "Variable scoping, hierarchy of variable visibility",
      "Concept of closures"
    ],
    links: [
      {
        title: "The Difference Between Regular Functions and Arrow Functions",
        url:
          "https://medium.com/better-programming/difference-between-regular-functions-and-arrow-functions-f65639aba256"
      },
      {
        title:
          "Functions as First-Class Objects in JavaScript: Why Does This Matter?",
        url:
          "https://appendto.com/2016/10/javascript-functions-as-first-class-objects/"
      },
      {
        title: "How to use the apply, call, and bind methods in JavaScript",
        url:
          "https://www.freecodecamp.org/news/how-to-use-the-apply-call-and-bind-methods-in-javascript-80a8e6096a90/"
      },
      {
        title: "Demystifying JavaScript Variable Scope and Hoisting",
        url:
          "https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/"
      },
      {
        title: "Understanding the JavaScript Closures",
        url:
          "https://www.tutorialrepublic.com/javascript-tutorial/javascript-closures.php"
      }
    ],
    repeatable: true,
    difficult: false
  },
  {
    id: 22,
    category: 1,
    type: "node",
    title: "Primitive usage of asynchronous code",
    description:
      "Understand that not everything in JavaScript is linear and immediate. Learn about asynchronous code - foundation of nearly all dynamic things that happen in modern web applications.",
    topics: [
      "`setTimeout` function",
      "validity of data in variables after a delay"
    ],
    links: [
      {
        title: "Scheduling: setTimeout and setInterval",
        url: "https://javascript.info/settimeout-setinterval"
      },
      {
        title: "JavaScript Closures: setTimeout Inside a For Loop",
        url: "https://wsvincent.com/javascript-closure-settimeout-for-loop/"
      },
      { title: "Atom", url: "https://atom.io/" }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 23,
    category: 0,
    type: "node",
    title: "Design pattern: publish-subscribe",
    description:
      "Expand your knowledge about asynchronous code. Grasp power of the most fundamental design pattern of event-driven applications: publish-subscribe.\nUnderstand why it's so important for all of the future concepts.",
    topics: ["Concept of publish-subscribe pattern"],
    practices: [
      "Code your own implementation of publish-subscribe in JavaScript",
      "Expand your implementation with multiple subscribers and unsubscribing methods"
    ],
    links: [
      {
        title:
          "Why every beginner front-end developer should know publish-subscribe pattern?",
        url:
          "https://itnext.io/why-every-beginner-front-end-developer-should-know-publish-subscribe-pattern-72a12cd68d44"
      },
      {
        title: "Video: Publish-Subscribe Architecture",
        url: "https://www.youtube.com/watch?v=ksUZtenLHnQ"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 24,
    category: 1,
    type: "node",
    title: "Promises and async/await",
    description:
      "Read about promises and how they simplify asynchronous coding and delayed execution.\nMaster this topic even better - learn `async` and `await` keywords.",
    topics: [
      "Basics of promises",
      "Exception handling",
      "`Promise.race` and `Promise.all`",
      "`async`/`await` syntax"
    ],
    practices: [
      'Try to "promisify" `setTimeout` function',
      "Compare `async` and `await` syntax to promises",
      "Learn to combine multiple promises with `Promise.race` and `Promise.all`"
    ],
    links: [
      {
        title: "Promises intro on javascsript.info",
        url: "https://javascript.info/promise-basics"
      },
      {
        title: "Video: JavaScript Promises In 10 Minutes",
        url: "https://www.youtube.com/watch?v=DHvZLI7Db8E"
      },
      {
        title: "Async/await intro on javascript.info",
        url: "https://javascript.info/async-await"
      }
    ],
    repeatable: true,
    difficult: false
  },
  {
    id: 27,
    category: 0,
    type: "node",
    title: "Further usage of HTTP protocol",
    description:
      "Modern internet isn't about statically served websites that perform some visual tricks using JavaScript. Learn how contemporary websites deal with data transfer, how many various methods are there and what are the challenges.",
    topics: [
      "JSON data format",
      "Fetching data asynchronously in web applications",
      "`fetch()` function",
      "Differences between SPA (Single Page Applications) and classic server-rendered applications"
    ],
    links: [
      {
        title: "Mozilla Developer Network: JSON Format",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
      },
      {
        title: "HTML5 and JavaScript Web Apps: Client-Side Architecture",
        url:
          "https://www.oreilly.com/library/view/html5-and-javascript/9781449332990/ch01.html"
      },
      {
        title: "Fetch tutorial on javascript.info",
        url: "https://javascript.info/fetch"
      },
      {
        title:
          "What's the difference between single-page application and multi-page application?",
        url:
          "https://www.adcisolutions.com/knowledge/whats-difference-between-single-page-application-and-multi-page-application"
      }
    ],
    repeatable: false,
    difficult: false
  },

  {
    id: 31,
    category: 4,
    type: "node",
    title: "GIT basics",
    description:
      "Learn GIT and see how to manage your code changes. Read about local and remote repositories, commits, branches and merging.\nGive yourself a test-drive and push some code to the internet.",
    topics: [
      "Commits and commiting",
      "Branches: branching, merging",
      "Local and remote repositories"
    ],
    practices: [
      "Read about basics, attach a local repository to your project",
      "Cover the topic of commits by committing some code",
      "Branch your code and try to merge it, deliberately try to make conflict and solve it"
    ],
    links: [
      {
        title: "Git - Tutorial",
        url: "https://www.vogella.com/tutorials/Git/article.html"
      },
      {
        title: "Git & GitHub Crash Course For Beginners",
        url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc"
      }
    ],
    repeatable: true,

    difficult: false
  },
  {
    id: 32,
    category: 4,
    type: "node",
    title: "Working with a remote GIT repository in the cloud",
    description:
      "Exercise your GIT skills with well-known cloud repositories like GitHub or Bitbucket. Learn how to make pull requests and code review process.",
    customList: ["GitHub", "BitBucket"],
    links: [
      { title: "GitHub", url: "https://github.com/" },
      { title: "BitBucket", url: "https://bitbucket.org/" }
    ],
    customListHeader:
      "Choose a repository provider, push your code there and fiddle with it a little:",
    isSingleGoal: true,
    repeatable: false,
    difficult: false
  },
  {
    id: 33,
    category: 0,
    type: "heading",
    title: "Milestone: software developer",
    description:
      "Congratulations - you have acquired your first developer skills and with proper guidance, you can add new functionalities to web applications. From now on, you will learn how to become more and more autonomous by learning new tools and approaches.\nKeep going!",
    topics: [],
    repeatable: false,
    difficult: false
  },
  {
    id: 34,
    category: 0,
    type: "node",
    title: "Basics of numerical systems",
    description:
      "Learn how computers store numbers. Make sure that you understand how numbers are being stored, added and subtracted. \nRead about binary and hexadecimal systems. You don't need to be able to perform hexadecimal nor binary computations in your mind - but you should know the principles.",
    topics: ["Hexadecimal numerical system", "Binary numerical system"],
    links: [
      {
        title: "Hexadecimal on Sparkfun",
        url: "https://learn.sparkfun.com/tutorials/hexadecimal/all"
      },
      {
        title: "Ryans Tutorials: Binary",
        url: "https://ryanstutorials.net/binary-tutorial/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 35,
    category: 0,
    type: "node",
    title: "Data values in computer memory",
    summary:
      "Read on how computer store various variables in its memory: strings, integers and real numbers.\nBy expanding your perspective on internal mechanics you will know when and why to use particular data structures, and when to avoid another.",
    description:
      "Read on how computer store various variables in its memory: strings, integers and real numbers.\nBy expanding your perspective on internal mechanics you will know when and why to use particular data structures, and when to avoid another.\nThere is no need to memorize everything about IEEE 754, but it's important to grasp the concept of limited precision and memory consumption.",
    topics: [
      "String as a list of characters",
      "Integer numbers (signed, unsigned)",
      "Floating point numbers (IEEE 754)"
    ],
    customListHeader: "Read about following data representations:",
    links: [
      {
        title: "How JavaScript works: memory management",
        url:
          "https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec"
      },
      {
        title:
          "What Every JavaScript Developer Should Know About Floating Points",
        url:
          "https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/"
      },
      {
        title: "How numbers are encoded in JavaScript",
        url: "https://2ality.com/2012/04/number-encoding.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 36,
    category: 4,
    type: "node",
    title: "Package management and code bundling",
    description:
      "Now, let's go back to front-end apps. You've got to know how more complex projects are being built and developed.\nAlso, you shouldn't manually refresh the browser after changing some code - introduce some automation.",
    topics: [
      "Parcel - simple module bundler",
      "Build mode and development (watch) mode",
      "Using Webpack without configuration"
    ],
    links: [
      {
        title: "Getting Started With Parcel",
        url:
          "https://medium.com/codingthesmartway-com-blog/getting-started-with-parcel-197eb85a2c8c"
      },
      {
        title:
          "Video: The Parcel Bundler - A SUPER Easy JavaScript Bundler for your Projects",
        url: "https://www.youtube.com/watch?v=OK6akGZCC88"
      },
      {
        title: "Parcel, a simpler webpack",
        url: "https://flaviocopes.com/parcel/"
      },
      {
        title: "Webpack Tutorial: From Zero Configuration To Production",
        url: "https://www.valentinog.com/blog/webpack/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 37,
    category: 4,
    type: "node",
    title: "Basics of CSS preprocessors",
    description:
      "While applications grow more and more, the structure of your styles must get smarter and simpler.\nLeverage CSS preprocessors and learn how to create scalable solutions for your styling needs.",
    topics: ["Variables", "Selector nesting", "Mixins/includes"],
    practices: [
      "Wire up your preprocessor to Parcel and import them to your existing project"
    ],
    links: [
      {
        title: "Video: Sass & SCSS Tutorial for Beginners - Getting Started",
        url: "https://www.youtube.com/watch?v=sCbXTrsl7NU"
      },
      {
        title: "The Complete Guide to SCSS/SASS",
        url:
          "https://www.freecodecamp.org/news/the-complete-guide-to-scss-sass-30053c266b23/"
      },
      {
        title: "Learn LESS in 10 Minutes (or less)",
        url: "https://tutorialzine.com/2015/07/learn-less-in-10-minutes-or-less"
      }
    ],
    customListHeader:
      "Pick one of well established dialects (SASS, LESS, Stylus) and practice following subjects:",
    repeatable: false,
    difficult: false
  },
  {
    id: 38,
    category: 4,
    type: "node",
    title: "Techniques of structuring complex CSS",
    summary:
      "Notice that while front-end projects grow, developers might eventually encounter problems with class naming. \nUnderstand mechanisms that allow managing your selectors and classes efficiently.",
    description:
      "Notice that while front-end projects grow, developers might eventually encounter problems with class naming. While names should be understandandable and consise, there is a risk of collision - especially where there are many people simultaneously working on styling.",
    practices: [
      "Understand mechanisms that allow managing your selectors and classes efficiently",
      "Read about *BEM* (Block-Element-Modifier) naming technique and try to break your app into blocks using this approach",
      "Optionally, read about ACSS (Atomic SCS) and OOCSS (Object Oriented CSS)."
    ],
    links: [
      { title: "BEM 101", url: "https://css-tricks.com/bem-101/" },
      {
        title: "BEM For Beginners: Why You Need BEM",
        url: "https://www.smashingmagazine.com/2018/06/bem-for-beginners/"
      },
      { title: "Atomic CSS", url: "https://acss.io/" },
      {
        title: "An Introduction To Object Oriented CSS (OOCSS)",
        url:
          "https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 39,
    category: 4,
    type: "node",
    title: "Various JS dialects and transpilation",
    description:
      "Well, it is not getting easier - you need to know that JavaScript isn't always the same JavaScript.\nRead about ECMA standard and its versions. Understand that there are many JS flavors and various browsers / node runtimes can run different code variants.",
    topics: ["ECMAScript versions: 5 and current", "Process of transpilation"],
    links: [
      {
        title: "JavaScript Transpilers: What They Are & Why We Need Them",
        url:
          "https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them"
      },
      {
        title: "What JavaScript Programmers Need to Know about Transpilers",
        url: "https://thenewstack.io/javascript-transpilers-need-know/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 40,
    category: 0,
    type: "node",
    title: "Basics of object oriented programming",
    description:
      "JavaScript is a multi-paradigm language - this means that there are many possible approaches to solving particular problem. One of applied models is *OOP (object-oriented programming)* with classes and objects.\nLearn the basics and decide if it fits you well.",
    topics: [
      "Classes and objects",
      "Class fields and methods",
      "Static fields",
      "Basics of inheritance and composition"
    ],
    links: [
      { title: "Class basic syntax", url: "https://javascript.info/class" },
      {
        title: "Mozilla Developer Network: Classes",
        url:
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
      },
      {
        title: "Static properties and methods",
        url: "https://javascript.info/static-properties-methods"
      },
      {
        title:
          "Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?",
        url:
          "https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9"
      },
      {
        title: "Class Composition in JavaScript",
        url: "https://alligator.io/js/class-composition/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 41,
    category: 0,
    type: "node",
    title: "Further design patterns",
    description:
      "Now when you've learned basics of classes and objects, you can move on to the next design patterns. While fairly simple in construction, they yield very powerful potential when it comes to solving various problems.",
    topics: [
      "*Singleton* pattern",
      "*Dependency injection* pattern",
      "*Decorator* pattern"
    ],
    links: [
      {
        title: "JavaScript Design Patterns: The Singleton",
        url: "https://www.sitepoint.com/javascript-design-patterns-singleton/"
      },
      {
        title: "Dependency Injection in JavaScript 101",
        url: "https://dev.to/azure/dependency-injection-in-javascript-101-2b1e"
      },
      {
        title: "The Decorator Pattern",
        url:
          "https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 410,
    category: 0,
    type: "node",
    title: "Principles of reliable programming: SOLID",
    description:
      "_Talk is cheap. Show me the code._ - Linus Torvalds\nProgramming is hard piece of engineering work with established rules and standards. Those are not petty hallucinations of formalist programmers, but rather useful conventions that will surely make your code more reliable and maintainable.\nThe sooner you will grasp them, the better.",
    topics: [
      "S: Single responsibility principle",
      "O: Open–closed principle",
      "L: Liskov substitution principle",
      "I: Interface segregation principle",
      "D: Dependency inversion principle"
    ],
    links: [
      {
        title:
          "S.O.L.I.D The first 5 principles of Object Oriented Design with JavaScript",
        url:
          "https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa"
      },
      {
        title: "Video: SOLID JavaScript - Jonathan Mills",
        url: "https://www.youtube.com/watch?v=__jNeGClKPE"
      },
      {
        title: "SOLID Principles every Developer Should Know",
        url:
          "https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 42,
    category: 3,
    type: "node",
    title: "React fundamentals",
    description:
      "It’s time for the real deal.\nBuild front-end applications using one of the most widely used and opinionated platform: *React*.\nLearn the basics of syntax, components and props.",
    topics: [
      "Syntax of JSX, transpilation to JS",
      "Writing simple components",
      "Component props"
    ],
    practices: [
      "Write and mount your first simple classic (class-based) component that outputs HTML code",
      "Nest some components, experiment with a simple hierarchy of different components",
      "Learn about props, pass few between components"
    ],
    links: [
      {
        title: "Official React website: Introducing JSX",
        url: "https://reactjs.org/docs/introducing-jsx.html"
      },
      {
        title: "Official React website: Components and Props",
        url: "https://reactjs.org/docs/components-and-props.html"
      },
      {
        title: "React Tutorial: A Comprehensive Guide to learning React.js",
        url:
          "https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/"
      },
      {
        title: "Video: React JS Tutorials for Beginners - Props",
        url: "https://www.youtube.com/watch?v=i1PLMgtG5Qo"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 43,
    category: 0,
    type: "node",
    title: "Immutable data structures",
    summary:
      "Before you take a deeper dive into React, understand an important subject of managing complex data using immutable data structures.\nGrasp the basics and learn useful tools.",
    description:
      "Before you take a deeper dive into React, understand an important subject of managing complex data using immutable data structures.\nGrasp the basics and learn useful tools. Understand how much data is really changing and which is being rewritten with references. Finally, think on how easy would be to react to particular subset of changes.",
    topics: [
      "Refresh your knowledge on JS reference and primitive types",
      "Immutable state concept",
      "Immutable.js",
      "Immer"
    ],
    practices: [
      "Use JavaScript's spread operators, experiment with changing data in a more complex structure, notice how many data is really being rewritten in memory",
      "Try to import and use `immer`, a library that simplifies using immutable structures"
    ],
    links: [
      {
        title:
          "Why the concept of immutability is so awfully important for a beginner front-end developer?",
        url:
          "https://itnext.io/why-concept-of-immutability-is-so-damn-important-for-a-beginner-front-end-developer-8da85b565c8e"
      },
      {
        title: "Learn immutability with JavaScript",
        url:
          "https://medium.com/@cristiansalcescu/learn-immutability-with-javascript-6a67e4a48d7f"
      },
      {
        title: "Immutable objects in JavaScript made really simple with immer",
        url:
          "https://medium.com/@hubert.zub/immutable-objects-in-javascript-made-really-simple-with-immer-42348bbee700"
      },
      {
        title:
          '"Immutable.js is intimidating. Here’s how to get started." at freeCodeCamp',
        url:
          "https://www.freecodecamp.org/news/immutable-js-is-intimidating-heres-how-to-get-started-2db1770466d6/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 430,
    category: 1,
    type: "node",
    title: "Functional programming",
    description:
      "As stated before, JavaScript is a multi-paradigm language. One of possible approaches of composing the code is a functional one - which is tightly related to how the application will behave and how its state and data will be treated.\nLearn concepts behind functional programming and expand your coding possibilities.",
    topics: [
      "Pure functions and side effects",
      "Currying and function composing, higher-order functions"
    ],
    links: [
      {
        title: "Functional Programming Principles in Javascript",
        url:
          "https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/"
      },
      {
        title:
          "Understanding Functional Programming in Javascript — A Complete Guide",
        url:
          "https://levelup.gitconnected.com/understanding-functional-programming-in-javascript-a-complete-guide-e85ed13b42c8"
      },
      {
        title: "An introduction to functional programming in JavaScript",
        url: "https://opensource.com/article/17/6/functional-javascript"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 44,
    category: 3,
    type: "node",
    title: "Further into React: component state and lifecycle methods",
    description:
      "Continue studying front-end development with React library.\nLearn how to manage state and data inside your app and what principles are governing over its lifecycle.",
    topics: [
      "State in class components, `setState` function",
      "Component lifecycle: mounting, rendering, re-rendering, unmounting",
      "Pure components",
      "`shouldComponentUpdate()` and `getDerivedStateFromProps()`"
    ],
    links: [
      {
        title: "Official React website: State and Lifecycle",
        url: "https://reactjs.org/docs/state-and-lifecycle.html"
      },
      {
        title: "How to understand a component’s lifecycle methods in ReactJS",
        url:
          "https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/"
      },
      {
        title: "Why and How to Use PureComponent in React.js",
        url: "https://60devs.com/pure-component-in-react.html"
      },
      {
        title: "React shouldComponentUpdate demystified",
        url:
          "https://www.freecodecamp.org/news/react-shouldcomponentupdate-demystified-c5d323099ef6/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 46,
    category: 3,
    type: "node",
    title: "Further into React: Function components and basic hooks",
    description:
      "Broaden your React skills by writing simplified function-based components.\nTry to rewrite your stateful classic components into functional components, learn how to use primitive hooks.",
    topics: ["Functional components", "`useState` hook", "`useEffect` hook"],
    practices: [
      "Read about writing functional components, notice changes from class-based ones",
      "Rewrite some of your class components into functional ones, move state management to `useState` hooks",
      "Move your lifecycle management to `useEffect` hooks"
    ],
    links: [
      {
        title: "Functional vs Class-Components in React",
        url:
          "https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108"
      },
      {
        title: "How Are Function Components Different from Classes?",
        url:
          "https://overreacted.io/how-are-function-components-different-from-classes/"
      },
      {
        title: "Getting Started With React Hooks",
        url: "https://www.valentinog.com/blog/hooks/"
      },
      {
        title: "Official React website: Introducing Hooks",
        url: "https://reactjs.org/docs/hooks-intro.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 47,
    category: 3,
    type: "node",
    title: "Further into React: asynchronous data, context and its usage",
    description:
      "While you should grasp all of the basic React concepts already, you need to confront it with asynchronous data treatment.\nAlso, learn about context. Try to pass the data and react to its changes across many component hierarchy levels.",
    links: [
      {
        title: "An Introduction To React’s Context API",
        url:
          "https://www.smashingmagazine.com/2020/01/introduction-react-context-api/"
      },
      {
        title: "How To Use async/await in React",
        url: "https://www.valentinog.com/blog/await-react/"
      },
      {
        title: "Asynchronous rendering with React",
        url:
          "https://medium.com/maxime-heckel/asynchronous-rendering-with-react-c323cda68f41"
      }
    ],
    topics: [
      "React context: providers and consumers",
      "Dealing with asynchronous data in React"
    ],
    practices: [
      "Read about context, providers and consumers, learn to pass the data downstream and react to its changes",
      "Fetch external data using component lifecycle methods or hooks, put it in your application's state",
      "Try to distribute the data across components, think about challenge of request optimization so data isn't being re-fetched when not necessary"
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 49,
    category: 3,
    type: "node",
    title: "Redux as a state manager",
    description:
      "Learn how to manage your application data in an organized way. Read about *redux* and its data lifecycle: state, actions and reducers.\nIntroduce redux to your code and notice how and when particular application parts react to changes.",
    topics: ["Redux state and reducers", "Redux actions"],
    practices: [
      "Try to create synchronous application using redux - be it a simple item list",
      "Read about presentational and container applications, introduce this pattern to your app"
    ],
    links: [
      {
        title: "React Redux Tutorial for Beginners: The Definitive Guide",
        url: "https://www.valentinog.com/blog/redux/"
      },
      {
        title: "A Complete React Redux Tutorial for Beginners",
        url: "https://daveceddia.com/redux-tutorial/"
      },
      {
        title: "Presentational and Container Components",
        url:
          "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 50,
    category: 3,
    type: "node",
    title: "Asynchronous redux",
    description:
      "Think of challenges posed by redux when used in asynchronous environment - e.g. with data originating from server fetch calls.\nDespite redux reducer system being designed as a synchronous machine, it's not impossible to utilize it in asynchronous scenarios. Learn various techniques and libraries to solve it.",
    topics: [
      "Using generators in JavaScript",
      "`redux-thunk` library",
      "`redux-saga` library"
    ],
    links: [
      {
        title: "JavaScript Generators Tutorial",
        url: "https://flaviocopes.com/javascript-generators/"
      },
      {
        title: "Understanding Redux Thunk",
        url: "https://codeburst.io/understanding-redux-thunk-6dbae0241817"
      },
      {
        title: "Redux-Saga tutorial for beginners and dog lovers",
        url:
          "https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645/"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 51,
    category: 3,
    type: "node",
    title: "Mobx as a state manager",
    description:
      "Change your perspective on a data management and give *mobx* a try.\nInstead of using plain immutable objects, you will witness the power of class-based observable objects and boost up your coding speed.",
    topics: [
      "mobx observables and actions",
      "mobx observers from `mobx-react` library"
    ],
    practices: ["Try to replace redux store in your application with mobx"],
    links: [
      {
        title: "Ten minute introduction to MobX and React",
        url: "https://mobx.js.org/getting-started.html"
      },
      {
        title: "How to build your first app with Mobx and React",
        url:
          "https://hackernoon.com/how-to-build-your-first-app-with-mobx-and-react-aea54fbb3265"
      },
      {
        title: "Mobx vs Redux - Top 8 Useful Differences You Should Know",
        url: "https://www.educba.com/mobx-vs-redux/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 52,
    category: 3,
    type: "node",
    title: "Mobx state tree basics",
    summary:
      "Broaden your knowledge with even more organized data structures powered by mobx: `mobx-state-tree`.\nLearn how to strongly type your data and how to reference one objects to another while retaining simplicity of using plain observers.",
    description:
      "Broaden your knowledge with even more organized data structures powered by mobx: `mobx-state-tree`.\nLearn how to strongly type your data and how to reference one objects to another while retaining simplicity of using plain observers.\nVisit mobx-state-tree website and introduce this library to your web application.",
    topics: [
      "Data schema with `mobx-state-tree`",
      "Integrating MST with react using `mobx-react`"
    ],
    practices: [
      "Transfer your mobx state into MobxStateTree container. Explicitly define your data structure.",
      "Use `mobx-state-tree` to keep some asynchronous data there."
    ],
    links: [
      {
        title: "Mobx-state-tree: A step by step guide for React apps",
        url:
          "https://medium.com/mr-frontend-community/mobx-state-tree-a-step-by-step-guide-for-react-apps-e65716a219d2"
      },
      {
        title: "Video: Manage application atate with Mobx-state-tree",
        url:
          "https://egghead.io/courses/manage-application-state-with-mobx-state-tree"
      },
      {
        title: "Video: Introduction to MobX State Tree",
        url: "https://www.youtube.com/watch?v=pPgOrecfcg4"
      }
    ],
    repeatable: false,
    difficult: true,
    isSingleGoal: true
  },
  {
    id: 53,
    category: 4,
    type: "node",
    title: "CSS Modules",
    summary:
      "Now when you are used to component-based systems thanks to React, you can see if it's feasible to utilize similar ideas when styling.\nUse CSS modules and discover new way to structure styles in your project.",
    description:
      "Now when you are used to component-based systems thanks to React, you can see if it's feasible to utilize similar ideas when styling.\nConfigure parcel to use CSS modules. Next, try to style a component and create CSS classes named with any general words. Import them to the react component and notice the magic.",
    links: [
      {
        title: "What are CSS Modules and why do we need them?",
        url: "https://css-tricks.com/css-modules-part-1-need/"
      },
      {
        title: "Practical Guide to React and CSS Modules",
        url:
          "https://www.triplet.fi/blog/practical-guide-to-react-and-css-modules/"
      }
    ],
    topics: ["Concept of CSS modules, local and global scopes"],
    practices: [
      "Configure CSS modules and rewrite few of your components to use it"
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 54,
    category: 4,
    type: "node",
    title: "CSS-in-JS: Styled Components",
    description:
      "Maybe it's time to ditch CSS overall? Learn to use Styled Components and see how it is possible to create beautiful styles with JavaScript, while new possibilities appear: style props, variants and theming.",
    topics: [
      "Basics: exporting styled components",
      "Styled components configurable with props"
    ],
    practices: [
      "Configure styled components and introduce it to your app",
      "Implement few variants of a single component using styled components props"
    ],
    links: [
      {
        title: "Styled components — essentials in three steps",
        url:
          "https://levelup.gitconnected.com/styled-components-essentials-in-three-steps-a61fb9372ded"
      },
      {
        title: "A 5-minute Intro to Styled Components",
        url:
          "https://www.freecodecamp.org/news/a-5-minute-intro-to-styled-components-41f40eb7cd55/"
      },
      {
        title:
          "Let's Take a Look at CSS in JS with React in 2019 - Styled Components",
        url:
          "https://dev.to/phizzard/let-s-take-a-look-at-css-in-js-with-react-in-2019-styled-components-1olc"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 55,
    category: 3,
    type: "node",
    title: "History and routing in web applications",
    description:
      "Learn to structure your application into meaningful and readable set of routes attached to particular page components.\nSee your application's structure from a time-wise point of view where user can navigate backward and forward.",
    topics: [
      "`react-router` basics, routes",
      "Browser history: push and pop state",
      "Parametrized routes",
      "Differences between classic and hashbang routing"
    ],
    practices: [
      "Introduce few routes to your app, parametrize them and try to base result data on it"
    ],
    links: [
      {
        title: "Using the HTML5 History API",
        url: "https://css-tricks.com/using-the-html5-history-api/"
      },
      {
        title: "React Router Tutorial",
        url: "https://www.codingame.com/playgrounds/6517/react-router-tutorial"
      },
      {
        title: "Learn React Router in 5 Minutes - A Beginner's Tutorial",
        url: "https://www.freecodecamp.org/news/react-router-in-5-minutes/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 56,
    category: 2,
    type: "node",
    title: "Basics of website optimization",
    description:
      "Internet is not only fiber-based and broadband connections.\nThere are a bunch of users that use mobile 3G/4G connections and still want to use your app - you're the one that need to keep it in mind and make your websites as optimized as possible.",
    topics: [
      "Code minification and bundling",
      "Responsive image `srcset`s",
      "Lazy loading of data and assets",
      "Image sprites"
    ],
    links: [
      {
        title: "What is minification?",
        url: "https://www.imperva.com/learn/performance/minification/"
      },
      {
        title: "Mozilla Developer Network: Responsive images",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
      },
      {
        title: "Lazy Loading Images and Video",
        url:
          "https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video"
      },
      {
        title:
          "CSS Sprites: What They Are, Why They’re Cool, and How To Use Them",
        url: "https://css-tricks.com/css-sprites/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 57,
    category: 4,
    type: "node",
    title: "Advanced webpack configuration",
    description:
      "Expand your knowledge about webpack - it is a miraculous tool capable of putting together gigantic applications consisting of many blocks and is able to simplify your life in many areas.",
    topics: [
      "`webpack.config.js`: entry and output",
      "rules",
      "loaders",
      "plugins",
      "integrating babel with webpack (`babel-loader`)"
    ],
    practices: [
      "Switch your parcel-enabled build system to your own Webpack configuration made from scratch. Use `babel-loader` in order to transpile ESNext to ES5, style loaders and various plugins (e.g. `html-webpack-plugin`). Try to make usable configuration both for development and production."
    ],
    links: [
      {
        title: "How to configure Webpack 4 from scratch for a basic website",
        url:
          "https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5"
      },
      {
        title: "How to set up an advanced Webpack application",
        url: "https://www.robinwieruch.de/webpack-advanced-setup-tutorial"
      },
      {
        title: "Webpack 4 course",
        url:
          "https://wanago.io/2018/07/16/webpack-4-course-part-one-entry-output-and-es6-modules/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 58,
    category: 4,
    type: "node",
    title: "Code linting",
    description:
      'If you will start coding professionally, there is a very small chance that you will work alone. More probably, you will be part of a team consisting of other developers as well - which means that you will need to work on the same codebase.\nThis is why industry established certain rules for code style so it becomes more consistent and clear. It\'s not only a philosophy - there are number of tools that help with the process of maintaining well-written and understandable code - learn them and become a "better human" to your future co-workers.',
    topics: ["`eslint`: concept and configuration"],
    practices: [
      "Install some opinionated set of `eslint` rules (e.g. `airbnb`). Introduce them to your project using webpack loaders and code editor plugins."
    ],
    links: [
      {
        title: "Getting Started with ESLint",
        url: "https://eslint.org/docs/user-guide/getting-started"
      },
      {
        title: "Airbnb's eslint config: eslint-config-airbnb",
        url:
          "https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb"
      },
      {
        title: "How to use ESLint in React",
        url: "https://www.robinwieruch.de/react-eslint-webpack-babel"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 60,
    category: 0,
    type: "heading",
    title: "Milestone: front-end React developer",
    description:
      "Congratulations! You are now capable of creating front-end applications using one of the most popular approaches in the world. While it's not the end of your journey, having knowledge described above should allow you to find a job in the programming field so you can start gaining more and more experience.\nKeep going!",
    topics: [],

    repeatable: false,
    difficult: false
  },
  {
    id: 61,
    category: 0,
    type: "node",
    title: "Networking basics",
    description:
      "Web and websites sit on the top of pretty complex networking system. While it's not crucial (or even possible) to know literally everything about the technical details and underlying mechanics, it's essential to understand few things like addressing and protocol layers.\nThis way, you will be able to understand your applications better and debug them faster.",
    topics: [
      "IP addresses, LAN/WAN networks",
      "Ports",
      "Protocol layers: *application layer*, *transport layer*, *physical layer*"
    ],
    links: [
      {
        title: "What is an IP address?",
        url:
          "https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm"
      },
      {
        title: "How Do IP Addresses Work?",
        url: "https://www.howtogeek.com/341307/how-do-ip-addresses-work/"
      },
      {
        title: "LAN 101: Networking Basics",
        url:
          "https://www.tomshardware.com/reviews/local-area-network-wi-fi-wireless,3020.html"
      },
      {
        title: "What is a port?",
        url: "https://whatismyipaddress.com/port"
      },
      {
        title: "TCP/IP Model: What is TCP IP Stack?",
        url: "https://www.guru99.com/tcp-ip-model.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 62,
    category: 1,
    type: "node",
    title: "Introduction to full stack development in JS",
    description:
      '_Never criticize an expert of a field that you do not fully understand._ - Steven Magee\nYour path is to be a well-versed front-end developer, but it can be difficult to do so without covering the fundamentals of back-end development. *The more you will know what happens on the "other side", the better understanding of the system as a whole you will have.*\nIt is pretty convenient to get into, considering you already know JavaScript which node.js already uses and which is suitable environment to create server applications.',
    topics: [
      "Basics of `express.js`: routes, handlers",
      "HTTP headers",
      "Using `Postman` for debugging"
    ],
    practices: [
      "Create simple server application that will serve dummy data using REST flavor. Send the data using JSON.",
      "Allow changing the data on the server side via proper HTTP requests. You can keep the data in variables to persist it between requests."
    ],
    links: [
      {
        title: "Server-side website programming: express web framework",
        url:
          "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
      },
      {
        title: "Node.js Express FrameWork Tutorial - Learn in 10 Minutes",
        url: "https://www.guru99.com/node-js-express.html"
      },
      {
        title:
          "Video: Express.js & Node.js Course for Beginners - Full Tutorial",
        url: "https://www.youtube.com/watch?v=G8uL0lFFoN0"
      },
      {
        title: "HTTP Headers for Dummies",
        url:
          "https://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039"
      },
      {
        title: "Postman Tutorial for Beginners with API Testing Example",
        url: "https://www.guru99.com/postman-tutorial.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 63,
    category: 0,
    type: "node",
    title: "Database basics",
    description:
      "Similarly to data being held in stores in your redux or mobx applications, larger systems on the server need to keep their vast amounts of data in an organized way: they use databases for this purposes. While it is an enourmous domain where specialized experts work, the basics are common programming knowledge that everyone should learn sooner or later.\nLearn the basics of relational databases and be able to understand data handling better. Also, you will be able to use this knowledge to prototype your systems in the future.",
    topics: [
      "Basics of relational databases: tables and records",
      "Basics of SQL syntax: `select`, `insert`, `update`",
      "Relationships in tables and records, foreign keys",
      "Basic joins in SQL select"
    ],
    practices: [
      "Install small database server on your local computer (mysql, sqlite).",
      "Connect your simple REST node.js server with the database."
    ],
    links: [
      {
        title: "SQL Tutorial for Beginners: Learn SQL in 7 Days",
        url: "https://www.guru99.com/sql.html"
      },
      {
        title: "Webucator's Free SQL Tutorial: Relational Database Basics",
        url:
          "https://www.webucator.com/tutorial/learn-sql/relational-database-basics.cfm"
      },
      {
        title: "MySQL for Absolute Beginners",
        url: "https://www.elated.com/mysql-for-absolute-beginners/"
      },
      {
        title: "Using MySQL with Node.js and the mysql JavaScript Client",
        url: "https://www.sitepoint.com/using-node-mysql-javascript-client/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 65,
    category: 1,
    type: "node",
    title: "Full-stack coding: practice",
    description:
      "Now that you have a complete overview on the web applications, it is important to practice your abstract thinking and designing systems.\nImagine a web app with a given functionality - it can be anything - then let your creativity on the loose while designing code structure and outlining proper architecture.",
    practicesHeader: "Steps for the practice",
    practices: [
      "Think of the app idea. It can be anything, for example a database for some items, a web store or a simplified clone of a well known portal like Twitter or Pinterest. One important thing: it should consist of both front-end app and back-end server.",
      "Before jumping in the code itself, design all the important building blocks. Start with thinking about the data structure. Try to make it consistent in both front-end and back-end. Next, move on to the communication - outline the shape of JSON data that will flow back and forth. Think about edge cases and possible errors.",
      "Gradually start coding application, view by view and feature by feature. While coding back-end, assist yourself using Postman for debugging.",
      "While creating the front-end part, keep in mind that it is not necessary to communicate with real back-end app: you can help your self with temporary data in mocked objects, so you can experiment with different variations (and edge cases).",
      "Read about caching. Optimize your back-end application by including simple cache, e.g. putting frequently retrieved data in the memory. Read about cache invalidation. Think of when and how to invalidate the cache."
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 66,
    category: 2,
    type: "node",
    title: "Basics of security: authorization in the web applications",
    description:
      "While tightly securing a system is usually a responsibility of a specialized back-end engineer, even front-end engineers are obligated to know how the security is being handled and understand fundamental mechanics.\nLearn most common methods for authenticating in the client-server method and practice it a bit in your own solution.",
    topics: ["Token-based authentication", "OAuth basics"],
    practices: [
      "Restrict the access to your application. In the database, add a table with users. Add a token authentication system to your application. Test it using Postman.",
      "Use your created token-based authentication back-end and create a front-end application that will communicate with it. Implement features of logging in and logging out.",
      "Using OAuth, create a sample app that will authenticate user with one of established identity providers, e.g. Google Account, GitHub or Facebook."
    ],
    links: [
      {
        title: "What is token-based authentication?",
        url:
          "https://stackoverflow.com/questions/1592534/what-is-token-based-authentication"
      },
      {
        title:
          "A guide for adding JWT token-based authentication to your single page Node.js applications",
        url:
          "https://medium.com/dev-bits/a-guide-for-adding-jwt-token-based-authentication-to-your-single-page-nodejs-applications-c403f7cf04f4"
      },
      {
        title: "Authenticate a Node ES6 API with JSON Web Tokens",
        url:
          "https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens"
      },
      {
        title: "The Simplest Guide To OAuth 2.0",
        url:
          "https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb"
      },
      {
        title:
          "How To Build a Secure Login Flow With OAuth 2, OpenId, and React",
        url:
          "https://medium.com/better-programming/building-secure-login-flow-with-oauth-2-openid-in-react-apps-ce6e8e29630a"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 67,
    category: 2,
    type: "node",
    title: "WebSockets",
    description:
      "Traditionally, communication in most web apps represent request-response model: the client (browser) requests for the data and the server responds with something.\nHowever, there are scenarios where the server must asynchronously provide its client(s) with some information - without prior asking. For those scenarios, there is a standarized mechanism named WebSocket - learn how to use it, it's not difficult.",
    topics: [
      "Pure WebSockets and their JavaScript API",
      "Assisting library: `socket.io`"
    ],
    practices: [
      'Create or extend your node.js app with WebSocket capabilities. For example, it can be a chat feature that will push messages to all participants. Another idea is a "map walking" mechanism that will update front-end app with new geographical coordinates every few seconds. You can test both classic WebSocket and `socket.io` approaches.'
    ],
    links: [
      {
        title: "WebSockets tutorial: How to go real-time with Node and React",
        url:
          "https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/"
      },
      {
        title: "Ultra fast applications using Node.js",
        url:
          "https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2505653-socket-io-let-s-go-to-real-time"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 68,
    category: 0,
    type: "node",
    title: "Test types and testing principles",
    description:
      "_\"Testing applications is like sex in high school - everybody is talking about it, but in reality most of the people don't do it or do it really bad.\"_\nTesting isn't only for QA engineers - well-versed developers know how to test their code and know all the theory behind it. Despite front-end development being more visually focused than other development fields, tests in website code are still important. Learn theory and tools.",
    topics: [
      "Concept behind unit tests, black box testing",
      "Definition of regression",
      "End-to-end tests",
      "Testing framework for JavaScript applications: Jest, Cypress"
    ],
    practices: [
      "Take certain portions of your front-end application - the more data-related, the better. A data store is a good candidate. Next, write some unit tests that will assert both successful and failing scenarios.",
      "Using Cypress, create an end-to-end test that will cover particular scenario of your application.",
      "Try to create something using Test Driven Development approach: write a complete test of a particular functionality first, then try to write the code that will cover it."
    ],
    links: [
      {
        title: "Introduction to Front-End unit testing",
        url:
          "https://dev.to/christopherkade/introduction-to-front-end-unit-testing-510n"
      },
      {
        title: "End-to-end testing tutorial: What is E2E testing with example",
        url: "https://www.guru99.com/end-to-end-testing.html"
      },
      {
        title: "New to front-end testing? Start from the top of the pyramid!",
        url:
          "https://itnext.io/new-to-front-end-testing-start-from-the-top-of-the-pyramid-a0039615353c"
      },
      {
        title:
          "Jest Tutorial for Beginners: Getting Started With Jest for JavaScript Testing",
        url: "https://www.valentinog.com/blog/jest/"
      },
      {
        title:
          "Cypress Tutorial for Beginners: Getting started with End to End Testing",
        url: "https://www.valentinog.com/blog/cypress/"
      }
    ],
    repeatable: true,
    difficult: false
  },
  {
    id: 73,
    category: 4,
    type: "node",
    title: "Operating systems basics",
    description:
      "As you will get deeper into web development, you will need to get know more and more about applications configuration and deployment. Since this subject is tightly related to various scripts and tools, you will need to perform effortlesly in the OS environment - and more and more often it will not be your personal machine.\nLearn how tu squeeze out the maximum from the shell and scripting engines too boost your productivity - and because this way, you won't be surprised in the future.",
    topics: [
      "Bash shell: basic commands for moving around the filesystem",
      "Environment variables",
      "Users, groups, file access modes",
      "Creating and running shell scripts"
    ],
    practices: [
      "Wrap your application building system (e.g. Webpack) with a shell script that accepts an argument and is being able to alter its mechanism, e.g. produce different versions for various target environments: staging, production etc."
    ],
    links: [
      {
        title: "Basic Linux/Unix Commands with Examples",
        url: "https://www.guru99.com/must-know-linux-commands.html"
      },
      {
        title: "Ryans Tutorials - Bash Scripting Tutorial",
        url: "https://ryanstutorials.net/bash-scripting-tutorial/"
      },
      {
        title: "How to Use Environment Variables",
        url: "https://scotch.io/tutorials/how-to-use-environment-variables"
      },
      {
        title: "Loading environment variables in JS apps",
        url:
          "https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 74,
    category: 2,
    type: "node",
    title: "TypeScript",
    description:
      "You will work with more and more complex application, so you need a superweapon to dramatically increase your code quality.\n*TypeScript* is a strongly typed language that will greatly help you writing more robust and organized code. While being superset of JavaScript syntax, it compiles directly to JS.\nSince it is _de facto_ standard in the industry, you should learn and adapt it as soon as possible.",
    topics: [
      "Primitive types (string, number), assigning types to variables and parameters",
      "Interfaces and assigning them as types to objects",
      "Arrays and basic generic types",
      "Optional types, `any`, `undefined` and `never`",
      "Classes and class fields encapsulation"
    ],
    practices: [
      "Read few simplest Typescript examples and notice what are the additions in contrast to pure JS. Learn primitive types in variables and class fields. Learn to distinguish between values and types. ",
      "Change your JS(X) files into TS(X) files and gradually introduce types. Introduce interfaces for common data schemas.",
      "Read about the basics of templating (generics). See how your code editor helps you with autocompletion. Gradually rewrite your code to TypeScript.",
      "If you're working with React application, add TypeScript to your data layer and state management system (mobx, redux).",
      "Add more and more types, eventually turn `strict` mode on and get rid of all `any` types. Eliminate all TS warnings.",
      "Notice how TS is being transpiled to JS."
    ],
    practicesHeader: "Proposed steps for learning TypeScript",
    links: [
      {
        title: "TypeScript in 5 minutes",
        url:
          "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
      },
      {
        title: "TypeScript Tutorial For Beginners: The Missing Guide ",
        url: "https://www.valentinog.com/blog/typescript/"
      },
      {
        title: "TypeScript for Beginners: Interfaces",
        url:
          "https://code.tutsplus.com/tutorials/typescript-for-beginners-part-3-interfaces--cms-29439"
      },
      {
        title: "Typescript Generics Explained",
        url:
          "https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f"
      }
    ],
    repeatable: false,
    difficult: false
  },

  {
    id: 76,
    category: 4,
    type: "node",
    title: "CI/CD basics",
    description:
      "As you will create more complex apps and application stacks, you will see that more time is consumed for tooling and maintaining the configuration. Most of processes revolving around the code (but not the coding itself) - compilation or transpilation, testing and deployment - can be delegated out to remote machines. Using determined process description, they can take all the mundane work from you - learn basic concepts behind it and start automating your work.",
    topics: ["Concept of continuous integration and continuous deployment"],
    practices: [
      "Create an account on BitBucket pipelines or CircleCI. try to create simplest CI/CD process that will build your front-end project."
    ],
    links: [
      {
        title: "What is CI/CD - all you need to know",
        url: "https://codilime.com/what-is-ci-cd-all-you-need-to-know/"
      },
      {
        title: "From frontend developer to a DevOps: An intro to CI/CD",
        url:
          "https://blog.logrocket.com/from-front-end-developer-to-a-devops-an-intro-to-ci-cd-7a8a8713fb34/"
      },
      {
        title:
          "Reddit discussion: what do you need to know about CI/CD as a front end developer?",
        url:
          "https://www.reddit.com/r/Frontend/comments/b72gty/what_do_you_need_to_know_about_cicd_as_a_front/"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 77,
    category: 0,
    type: "node",
    title: "Software architecture and basics of UML modelling",
    description:
      "More complex applications mean more difficulties in understanding all the processes within - especially, where it comes to communication between developers.\nThis is why developers invented formal descriptions of various software parts. One of them is UML - Unified Modeling Language. It can be used to describe virtually all parts of any application, which helps explaining why, where and how particular code works.",
    topics: [
      "Application sequence diagrams",
      "Class diagrams",
      "State diagrams"
    ],
    practices: [
      "Try to gather all possible scenarios in your front-end application and try to describe them using sequence diagrams.",
      "Take a full-stack application and try to describe its architecture using class diagram.",
      "Get any complex component from your app and try to describe all of its possible states using state diagram."
    ],
    links: [
      {
        title: "UML Class Diagram Tutorial",
        url:
          "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"
      },
      {
        title: "Video: How to Make a UML Sequence Diagram",
        url: "https://www.youtube.com/watch?v=pCK6prSq8aw"
      },
      {
        title: "State Machine Diagram: UML Tutorial with EXAMPLE",
        url: "https://www.guru99.com/state-machine-transition-diagram.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 79,
    category: 0,
    type: "heading",
    title: "Milestone: self-sufficent full-stack developer",
    description:
      "Congratulations! Right now you should be capable of independently architecturing and developing rich web applications. If you don't know something, you should already be swift in finding missing information on the internet - which is much more important skill than learning everything by heart. What's next? There are still subjects that are not directly related to the website coding - they will help you with not with creating software, but also putting it in the production state.\nCarry on!",
    repeatable: false,
    difficult: false
  },
  {
    id: 80,
    category: 2,
    type: "node",
    title: "Advanced website optimization",
    description:
      'Now as you know all the foundations for coding complex React applications, you need to get back at the subject of making them really efficient.\nIf you\'re coding websites that will go "public" on the internet, you need to take care about optimizing them so search engines will rank them as high as possible. There are many challenges and many solutions in this field - one of them is pre-rendering portions of your website on the server side using node.js. Master server-side React coding and the concept of isomorphic applications.',
    topics: [
      "Requirements for SEO-optimized websites",
      "Dynamic `import()` and code splitting",
      "Server-side rendering and isomorphic apps"
    ],
    practices: [
      "Write a node.js application that will render simple React components on the server side and send the HTML to the client.",
      "Learn about dynamic imports in JavaScript. Setup your webpack or parcel to separate bundle into chunks. Notice their sizes basing on code. Try to separate code basing on routes.",
      "Try to move portions of your front-end React application to SSR. Notice all the problems with asynchronous data handling. Try to separate your app in two parts: static (server-side rendered) and dynamic (browser-side rendered). Think of a method of fetching data on the server side. Gradually, try to fully transition your React application to the SSR approach."
    ],
    links: [
      {
        title: "An Introduction to React Server-Side Rendering",
        url: "https://alligator.io/react/server-side-rendering/"
      },
      {
        title: "Server-Side Rendering with React, Redux, and React-Router",
        url:
          "https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e"
      },
      {
        title: "Lessons Learned: Code Splitting with Webpack and React",
        url:
          "https://hackernoon.com/lessons-learned-code-splitting-with-webpack-and-react-f012a989113"
      },
      {
        title: "Get an isomorphic web app up and running in 5 minutes",
        url:
          "https://hackernoon.com/get-an-isomorphic-web-app-up-and-running-in-5-minutes-72da028c15dd"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 81,
    category: 0,
    type: "node",
    title: "Basics of cryptography",
    description:
      "As you sail through the internet, majority of your data is secured by a HTTPS protocol. It sits on the top of the computer science field of cryptography - which means that your information is secured by various keys and mathematical ciphers.\nYou need to know essential topics of this area - better understanding of internet security will result in more robust applications that you will architecture and develop in the future.",
    topics: [
      "Symmetric key algorithms (e.g. DES, AES)",
      "Asymmetric key algorithms (e.g. RSA)",
      "Digital signatures"
    ],
    practices: [
      "Having theoretical subjects covered, learn how HTTPS handshake works. Don’t memorize it by heart, understand that data is secure as long as key pairs are. Understand that asymmetric cryptography is applicable to many areas, not only HTTPS communication."
    ],
    practicesHeader: "Mind exercises",
    links: [
      {
        title: "Cryptography for absolute beginners",
        url:
          "https://medium.com/@hashelse/cryptography-for-absolute-beginners-3e274f9d6d66"
      },
      {
        title: "Public Key Cryptography Simply Explained",
        url:
          "https://hackernoon.com/public-key-cryptography-simply-explained-e932e3093046"
      },
      {
        title: "Cryptography digital signatures",
        url:
          "https://www.tutorialspoint.com/cryptography/cryptography_digital_signatures.htm"
      },
      {
        title:
          "How HTTPS Works to Keep You Secure and How it Differs From HTTP",
        url: "https://love2dev.com/blog/how-https-works/"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 82,
    category: 0,
    type: "node",
    title: "Programming in lower-level language",
    description:
      "Take a deep dive and ditch high-level language like JS for a while. It doesn't mean that you will part ways with JavaScript. The reason is that you need to understand how computer treats code and applications - and learning lower-level language is a great way to get closer to the \"core\" of the computer.\nImportant: don't take it too seriously and don't try memorizing all syntax by heart - you need to grasp the idea. You will know how many layers of processing there are underneath JS scripts and understand what are the costs of computation and memory.",
    topics: [
      "Basics of C syntax",
      "Variable pointers",
      "Allocating and freeing memory",
      "Multi-threaded programming",
      "Program code, assembly code and machine code"
    ],
    practices: [
      "Try to create a simple application that reads/writes some data to files using few threads. Notice all challenges and problems. Read about solutions: mutexes and semaphores."
    ],
    links: [
      {
        title: "C tutorial on learn-c.org",
        url: "https://www.learn-c.org/"
      },
      {
        title: "C tutorial on cprogramming.com",
        url: "https://www.cprogramming.com/tutorial/c-tutorial.html"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 83,
    category: 4,
    type: "node",
    title: "Containerisation",
    description:
      "As you will venture deeper in the software development, you should be more interested in the subject of putting applications into production.\nIn modern times, many applications that are processed on the server side are running in secured sandboxes resembling virtualized computers. This approach was dubbed *containerisation* and is heavily dominated by a tool named Docker - learn how to wrap your node.js application in a container and run it locally.",
    topics: [
      "Containers and virtualization",
      "Basics of Docker",
      "Creating a `Dockerfile`"
    ],
    practices: [
      "Install docker. Try to run some any container from the Docker hub, e.g. a database engine.",
      "Define and run your own container image - wrap your node application. Read about `docker-compose`. Run your node.js application with database using `docker-compose`."
    ],
    links: [
      {
        title: "A Docker Tutorial for Beginners",
        url: "https://docker-curriculum.com/"
      },
      {
        title: "Dockerizing a Node.js web app",
        url: "https://nodejs.org/de/docs/guides/nodejs-docker-webapp/"
      },
      {
        title: "How To Build a Node.js Application with Docker",
        url:
          "https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker"
      }
    ],
    repeatable: false,
    difficult: true
  },
  {
    id: 84,
    category: 4,
    type: "node",
    title: "Moving to the cloud",
    description:
      "Times when web applications were hosted in large server rooms may not be long gone, but it's a fact that majority of them are being deployed to the cloud. This process removes the heavy burden of maintaining and upgrading hardware, configuration and many more other challenges.\nModern cloud systems provide many kinds of different services - and both front-end and back-end web applications can take advantage from it.\nPick a cloud provider and learn how to use most popular services to expand your knowledge about delivering software.",
    customListHeader: "Cloud providers to check out",
    customList: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform"
    ],
    practices: [
      "Create an account on one of the most popular cloud services providers listed above. Research basic service types: virtual machines, container engines, application runner engines. Learn how to store files and data using cloud's API. Study how its CDN (Content Delivery Network) system work.",
      "Configure your CI/CD process to put your app in the cloud application engine (e.g. EBS or Google App Engine). Next, configure your CI/CD process to containerize your app and deploy it to cloud's container engine.",
      "Imagine creating large portal application. Mentally plan the architecture - how your front-end application should react to large volume of users. Think how and where data should be handled and cached, then plan SEO optimization.",
      "Read about scaling. Try to auto-scale your app. Wire up your front-end application to a CDN. Notice how and when it’s cached. Think of how and when the cache should be invalidated."
    ],
    links: [
      {
        title: "10-minute tutorials for AWS services",
        url: "https://aws.amazon.com/getting-started/tutorials/"
      },
      {
        title: "Microsoft Azure Tutorial for Beginners: Learn in 1 Day",
        url: "https://www.guru99.com/microsoft-azure-tutorial.html"
      },
      {
        title: "Quickstart for Node.js in the App Engine Standard Environment",
        url:
          "https://cloud.google.com/appengine/docs/standard/nodejs/quickstart"
      }
    ],
    repeatable: false,
    difficult: false
  },
  {
    id: 85,
    category: 0,
    type: "heading",
    title: "Towards seniority and beyond",
    description:
      "Whew. We're at the end - that's it for know.\nIf you are at this point with your knowledge, you should already be self-sufficent and experienced developer that is capable of developing great web applications. Should you call yourself a senior developer? It depends - if you know all of the stuff above, can work independently and use your knowledge with *confidence*, then I would say yes. But it's up to you - don't focus on titles, aim your attention at being better developer. Don't even think of settling down - development is pretty dynamic industry where you need to keep up with latest technologies all the time.\nBe up-to-date and cautious. Be smart and never stop learning. *Be a better developer every day.*\n^Good luck!^",
    repeatable: false,
    difficult: false
  }
];
