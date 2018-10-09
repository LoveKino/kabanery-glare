# kabanery-glare

A web component library based on kabanery

## View Specification

- `View` is a function which takes a `data` and return a `KNode`

```
View: (data) -> KNode
```

- `data` contains three parts, `props`, `onChange` and `children`

```
data = {
  props,
  onChange,
  children
}
```

- `onChange` is a callback function, which takes two parameters, `newProps` and `event`

```
onChange: (newProps, event) -> void

event = {
  type,
  sourceEvent,
  ...
}
```

- When event happened, `onChange` would be called and the `props` of View became `newProps`
