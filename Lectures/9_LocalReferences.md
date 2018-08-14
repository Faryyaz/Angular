# What is local References?

## Local references are use on the template to refer to a specific element.

## example
```
<input type="text" class="form-control" #serverNameInput>


<button class="btn btn-primary" (click)="doSomething(serverNameInput)"></button>
```

## In the above example, we are using the localReference #serverNameInput and passing it to the function doSomething of the button.
## Important:  This local reference can only be use in the template and not in the typeScript and thus, this is why it is passed as a parameter.
## we can now access the value of the element like in normal javascript `serverNameInput.value` in the typeScript as a parameter
