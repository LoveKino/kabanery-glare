## View

```
View: (data) -> view
data={props[, onChange]}
onChange: (newProps, e) -> void
props={style, value, ...}
```

## View Combinator

```
View Combinator: (...Views) -> View
```

### hash Combinator

```
({[key]: View}) -> View

{k1: V1, k2: V2, ..., kn: Vn, ...} -> V,
Vi: ({props: pi, onChange: oci}) -> vi, i = 1, ..., n
V: ({props: p, onChange: oc}) -> v.

p = {k1: p1, ..., kn: pn, ...}

oci = (newPi) => {
} 

(p) -> V
```
