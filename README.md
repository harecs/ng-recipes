
# ng-recipes

My web app for the SoftUni Project Defense (Angular - February 2024)

It is a website about recipes. Guests can view the recipes and view the details for a specific recipe.
Logged users can explore all the recipes and can create recipes, which they can edit and delete.
Also logged users can view their profile and all the recipes that they have created.

## Run Locally

- Clone the project

- Go to the project directory

- Install dependencies

```bash
npm install
```

- Start the server (Use one of the following)

```bash
npm run start
```
```bash
ng serve
```

- Navigate to `http://localhost:4200/`
## Application Pages

#### Home Page
![App Screenshot](https://gcdnb.pbrd.co/images/s7mvpxjgdoJa.png?o=1)

#### Recipes (users and guests)
![App Screenshot](https://gcdnb.pbrd.co/images/GyIh1YGgfaxN.png?o=1)

#### Recipe Details
![App Screenshot](https://gcdnb.pbrd.co/images/p9jIrHZl8V1W.png?o=1)

#### Register
![App Screenshot](https://gcdnb.pbrd.co/images/2LAPLodIZPMB.png?o=1)

#### Register (Form Validation)
![App Screenshot](https://gcdnb.pbrd.co/images/TkVVd4igwPCQ.png?o=1)

#### Login
![App Screenshot](https://gcdnb.pbrd.co/images/ZEGjPbeM3FKi.png?o=1)

#### Add Recipe (only for logged users)
![App Screenshot](https://gcdnb.pbrd.co/images/jEvgFedBYMaO.png?o=1)

#### Recipe Details (when the recipe creator)
![App Screenshot](https://gcdnb.pbrd.co/images/rlD3cyNw5qaI.png?o=1)

![App Screenshot](https://gcdnb.pbrd.co/images/eEQMLzyaRdoF.png?o=1)

#### Edit Recipe (when the recipe creator)
![App Screenshot](https://gcdnb.pbrd.co/images/wBWOz3VXgcdB.png?o=1)

#### Delete Recipe (when the recipe creator)
![App Screenshot](https://gcdnb.pbrd.co/images/Fb0RuCqxefx0.png?o=1)

#### Profile (only for logged users)
![App Screenshot](https://gcdnb.pbrd.co/images/WyecBJQWdiFI.png?o=1)

![App Screenshot](https://gcdnb.pbrd.co/images/a4jAYan09vDZ.png?o=1)

#### 404 Not Found
![App Screenshot](https://gcdnb.pbrd.co/images/YNLF87cB9pOH.png?o=1)

#### Error handling
![App Screenshot](https://i.ibb.co/WxpMTnq/Screenshot-2024-04-02-at-20-26-20.png)

![App Screenshot](https://i.ibb.co/v1Nk8dP/Screenshot-2024-04-02-at-20-37-22.png)
## Project Architecture




```
∇ app
    ∇ core              
        ∇ component-a
            component-a.component.html|css|ts
        ∇ component-b
            component-b.component.html|css|ts
    ∇ guards              
        guard-a.activate.ts
        guard-b.activate.ts
    ∇ modules
         ∇ feature-a
              ∇ components
                  ∇ component-a
                      component-a.component.html|css|ts
                  ∇ component-b
                      component-b.component.html|css|ts
              service-a.service.ts
              feature-a-routing.module.ts
              feature-a.module.ts
          ∇ feature-b
              ∇ components
                  ∇ component-a
                      component-a.component.html|css|ts
                  ∇ component-b
                      component-b.component.html|css|ts
              service-b.service.ts
              feature-b-routing.module.ts
              feature-b.module.ts
    ∇ shared
         ∇ components
              ∇ shared-component-a
                   shared-component-a.component.html|css|ts
              ∇ shared-component-b
                   shared-component-b.component.html|css|ts
         ∇ utils
              shared-util.ts
         ∇ validators
              validator.directive.ts
         shared.module.ts
    ∇ types
        type-a.ts
        type-b.ts
  app-http.interceptor.ts
  app-routing.module.ts
  app.component.css
  app.component.html
  app.component.ts
  app.module.ts
∇ environments
    environment.development.ts
    environment.ts
favicon.ico
index.html
main.ts
styles.css
```