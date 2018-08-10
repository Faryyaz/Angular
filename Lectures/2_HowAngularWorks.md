#What are components?

## Piece (normally for the aestetic part) of code that can be reuse

# How Angular is rendering the components?

## By default, when we first create an application, Angular creates a component with the name of << app-root >>
## This << app-root >> element is found in the index.htmland Angular replace that element with the template defined in the << app >> folder.
## The << app.component.ts >> is the file that contains the config for the template

## e.g

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

```

# What is << main.ts >>?

## File that contains the first codes that are executed when app is rendered


```
platformBrowserDynamic().bootstrapModule(AppModule)
```

## basically the above code bootstrap all the module in << app.module.ts >> into our app
