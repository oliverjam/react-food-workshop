# Workshop

We're going to build a simplified food delivery menu page. It'll have a list of dishes plus a form to filter them. The final result should look something like this:

![burger-place](https://user-images.githubusercontent.com/9408641/58384401-35473280-7fd9-11e9-80db-1403465ad70f.gif)

Don't worry, we'll work our way there step by step.

## Part 1: Project setup

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

![part 2 example](https://user-images.githubusercontent.com/9408641/58384685-90c6ef80-7fdc-11e9-80ea-d0d54df5bca0.png)

## Part 3: Create price inputs

We want to be able to filter the list of dishes by minimum and maximum price. To do this we'll need to create two [range inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Create some state to represent the range values.

You can refer back to the [introduction to controlled components](https://github.com/oliverjam/learn-react/blob/master/05-transform-the-form/README.md#controlled-components) if you need to.

It can be a good idea to group and label related elements using the [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element.

You should end up with something like this:

![part 3 example](https://user-images.githubusercontent.com/9408641/58385206-b821ba80-7fe4-11e9-9108-0b0805a34820.png)

## Part 4: Filter list by price

Now we need to filter our dish list based on the price state.

   <details>
    <summary>
    Hint (you can click me)
    </summary>

Remember our list is a normal JavaScript array. You can manipulate it using any of the array methods you're used to.

   </details>

You should have something like this:

![part 4 example](https://user-images.githubusercontent.com/9408641/58385194-8a3c7600-7fe4-11e9-899d-576e46106f1d.png)

## Part 5: Modularise your components

Our `App` component is starting to get a bit unwieldy. We've got our state management plus two totally separate bits of the page all rendering in one place. Let's try splitting it up into a couple of smaller components.

Create two new files: `DishList.js` and `PriceFilter.js`. Create new components in each and copy over the respective code from `App.js`. You won't have access to the state you were using in the new files—you'll need to find a way to pass data down to child components from `App`.

Don't forget to export your new components!

  <details>
    <summary>
    Hint (you can click me)
    </summary>

You might want to review the section on [props](https://github.com/oliverjam/learn-react/blob/master/02-component-proponent/README.md#props) from the earlier workshop.

   </details>

## Part 6: Create radio group

We also want to filter our dishes by category. This is a good use-case for a group of radio inputs as the categories are mutually exclusive.

Create a new file called `CategoryFilter.js` and make a new component in it. We need a radio input for each category. You can probably find a way to render the inputs dynamically so you don't have to write 8 radios by hand :)

You'll also need a state value to keep track of which radio is selected. You should end up with something like this:

![part 6 example](https://user-images.githubusercontent.com/9408641/58385192-86a8ef00-7fe4-11e9-8b7c-fec1ff5c98b7.png)

## Part 7: Filter list by category

Now we need to filter our list by category as well as the existing price filters. Use your category state value to filter the array in `DishList`. Make sure you keep the price filter working.

If everything is hooked up correctly you should see something like the gif from the beginning 🎉

![burger-place](https://user-images.githubusercontent.com/9408641/58384401-35473280-7fd9-11e9-80db-1403465ad70f.gif)

## Stretch goals

1. It would be nice if the price filters were constrained by the lowest/highest available price on the page (so you don't end up filtering everything away)
1. Add a text input that lets users search for dishes by title
1. Make it look even better 💅
