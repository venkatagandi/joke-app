# JokeApp

This is a sample of Angular 2 application which include bootstrap reference.
Please follow the below steps to run the code.

```javascript
    git clone  <giturl>
    npm install --cache-min Infinity
    ng s
```

### Adding additional components

```javascript
    ng g c <component name>
```

Update `angular-cli.json` for any css and scripts references.

##### Angular 2 Content Projection

This is something equivalent to ng-transclude concept in angular 1.x

```javascript

<master-component>

 <child-component>
   <p class="card"> some data</p>
   <div class="punchline"> some data</div>

 </child-component>

<master-component>


<child-component>
  <ng-content select=".card"></ng-content>
   ......
  <ng-content select=".punchline"></ng-content>
  .......

  ```

  Other Approach not feasible if html tags gets duplicated
  we can even provide something like html tags

  ```javascript

  <ng-content select="p"></ng-content>
   ......
  <ng-content select="div"></ng-content>
  .......

</child-component>

```

This addresses questions like

what is content projection and how we want to use it?

how to project content using ng-content tag

how to project multiple piece of content using css selectors

sometime the consumer wants to customize and configure the presentation of the component. This can be done using content projection.


