
 - What is the difference between State and Props?
Answer: 
Props = data passed from parent to child. The child cannot change props.
State = data managed inside the component. The component can change its own state.


 - What is the useState hook, and how does it work?
Answer:
useState is a React hook that lets a component store and update data.
How it works:
we call useState(initialValue)
It gives you two things:
1.a state value
2.a function to update that value.


 - How can you share state between components in React?
Answer:
We can share state between components by lifting the state up to their common parent.
How it works:
Put the state in the parent component using useState.
Pass the state and the update function (setter) to child components as props.

 - How is event handling done in React?
Answer:
Event handling in React works just like HTML, but with camelCase names and functions. 