# Advanced Redux

## Side Effect, Async tasks and Redux

### Reducers must be a pure, side-effect free, synchronous functions

### Where should side effect and asynchronous tasks be executed ? 
1. Inside the components (e.g. useEffect) or
2. Inside the action creators 

## NOTE: we must not mutate the code of inside the reducers object outsidet the reducers

## Fat Reducers vs Fat Components vs Fat Actions
where should our logic go : <br> 
1. Synchronous, side-effect free code (i.e data transformations): Prefer <mark> Reducers </mark> 
Avoid action creator or Components <br>
2. Async code or code with side effect : Prefer Actions Creator or Components Never use Reducers

## What is "Thunk":
- A Function that delays an action until later
- An action creator function that does NOT return the action itslef but another fucntion which eventually returns the action

## React Dev Tool for debugging : 
<!-- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en -->
[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en)