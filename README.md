# Working with multiple apps
This project is using angular cli to create angular app and trying to demonstrate how can we create our custom library and use it in example application.
## Working in example-app
### Creating a module
Suppose I want to create products module in eample app. Here is the cli command:
```
ng g m products
```
### Creating a container component
suppose I have a feature module called as `products` and now I want to create an `add product container component` inside it. Here is the cli command for that:
```
ng g c products/containers/add-product-container 
```
### Running example app

In order to start example app please run below cli command and navigate to `http://localhost:4210/` url.
```
npm run eample:start
```