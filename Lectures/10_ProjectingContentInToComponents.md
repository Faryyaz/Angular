#Content can be projected into components

##Example:

##Component template:
```
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <ng-content></ng-content> <--! ng-content is like a hook and is replaced  by the content of defined in the component element <app-server>   -->
  </div>
</div>
```
## The component element called in the root app html:
```
<app-server *ngFor="let element of elements">
    <p>
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>
</app-server>
```

## By using @ContentChild we can access the element in typescript provided that the component has been called using ng-content.

```
<app-server *ngFor="let element of elements">
    <p #contentParagraph> <------- HERE THE REFERENCE
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>
</app-server>
```

##In app.component.ts we can now have access to this element '#contentParagraph'
```
@ContentChild('contentParagraph') paragraph: ElementRef;


```
