# What is databinding?

## Use to output data from the typescript logic to the template (HTML)

# 2 Types of databinding

## String interpolation
```
{{ data }}
```

## Property Binding
```
[property] = data
```

# To capture data from the Template and transfer to the TypeScript logic

## We use the following:
## Event binding
```
(event) = "expression"
```

# We can combine both "Two-Way-Binding"
```
[(ngModel)] = "data"
```
### **** IMPORTANT ***
## for it to work we need to import ` FormsModule `