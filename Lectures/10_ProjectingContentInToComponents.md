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
## The component element called in the root app:
```
<app-server *ngFor="let element of elements">
    <p>
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>
</app-server>
```