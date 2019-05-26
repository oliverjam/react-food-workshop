# Workshop

We're going to build a simplified food delivery menu page. It'll have a list of dishes plus a form to filter them. The final result should look something like this:

![burger-place](https://user-images.githubusercontent.com/9408641/58384401-35473280-7fd9-11e9-80db-1403465ad70f.gif)

Don't worry, we'll work our way there step by step.

## Part 0: Project setup

1. Clone this repo
1. Run `npm install`
1. Run `npm start` to open the site

![initial app](https://user-images.githubusercontent.com/9408641/58384502-2e6cef80-7fda-11e9-9e79-af32561922f0.png)

Open `src/index.js` in your editor. This is where we render our React app to the DOM. You can see that we have a top-level component named `App`. Open `App.js` to see what's being rendered.

## Part 2: Render a list

React can render arrays of elements just like a single element. E.g.

```jsx
function App() {
  return (
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </ul>
  );
}
```

is the same as:

```jsx
function App() {
  return <ul>{[<li>Apple</li>, <li>Orange</li>, <li>Banana</li>]}</ul>;
}
```

This isn't very ergonomic, but it comes in very handy when you need to render a dynamic list. We can generate an array from our data and render that:

```jsx
function App() {
  const fruits = ["Apple", "Orange", "Banana"];
  const fruitList = fruits.map(fruit => <li key={fruit}>{fruit}</li>);
  return <ul>{fruitList}</ul>;
}
```

We're passing a special prop called `key` to the top-level element in our array. This allows React to keep track of where each element is so it doesn't mess up the order. `key` should be unique and not change when the array order does. React will warn you if you forget this.

It's common to inline the `.map()` call:

```jsx
function App() {
  const fruits = ["Apple", "Orange", "Banana"];
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Task

Uncomment the line importing `"../data.js"`. This is an array of objects, each representing a dish in our restaurant. Use `.map` to render all of them to the page inside the `ul`.

Take a look at what data you have available for each dish and try to render it all. You should end up with something like this:

![part 1 example](https://user-images.githubusercontent.com/9408641/58384685-90c6ef80-7fdc-11e9-80ea-d0d54df5bca0.png)

## Part 3: Create price inputs

## Part 4: Filter list by price

## Part 5: Modularise your components

## Part 6: Create radio group

## Part 7: Filter list by category
