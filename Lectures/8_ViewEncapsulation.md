# Each component has its own css which is not accessible from outside the component.
## This behaviour can be overriden using < encapsulation: ViewEncapsulation.None >
```
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None // apply css to whole application
})
```
## ViewEncapsulation.Emulated works as ViewEncapsulation.Native except that native is browser dependent. If the browser support it, then native can be used
