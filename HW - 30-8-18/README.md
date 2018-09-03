# Addendum to the homework assignment.

I foremost edited the `app.component.html` file.

* Whenever a change happens a `change` event fires on the `select` element. When the `change` event fires the `selectPage` method is executed and is passed into its signature the `event` object. The `event` is then transferred to `app.component.ts`.

```html

  <select (change)="selectPage($event)">
        <option value='1'>Go to page 1</option>
        <option value='2'>Go to page 2</option>
        <option value='3'>Go to page 3</option>
        <option value='4'>Go to page 4</option>
    </select>
	
```
* Inside of `app.component.ts` the `seletPage` function reads the `event` object's `target` property which holds within it the `value` the user chose. 

* The `value` is then populated into the variable I declare called `selectedPage`.

* Onward, the `selectedPage` function sends the `selectedPage` to the service located @ `user-request.service.ts`. 

```typescript

  export class AppComponent {

  selectedPage: number;
 
  localData: { users: Users };  //this variable will house the data that's received from user-request.service.ts
  constructor(private myService: UserRequestService) {
    this.localData = this.myService.userData;
    }

  selectPage (event: any) {
      this.selectedPage = event.target.value;
      this.myService.showByPageNumber(this.selectedPage);
      }
  }

```

* Inside the service the `selectedPage` vaiable is injected into the service's `showByPageNumber` function.

`ShowByPageNumber` repeats the contructor's `get` request, only this time concatenating the `selectedPage` variable to the URL which it queries, thus yielding different data:

```typescript
  
    showByPageNumber(selectedPage: number) {

      this.myHttp.get("https://reqres.in/api/users?page="+ selectedPage)
      .subscribe(
      (response:Users)=>{this.userData.users=response}
        )
      };
};

