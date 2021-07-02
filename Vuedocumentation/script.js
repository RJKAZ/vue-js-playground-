// this is the hello world example

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Great Big and beautiful world!',
  },
});

// this example, the HTML itself does appear, but the message in this vue is displayed when you select/hover the text in this vue
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You Loaded this page on ' + new Date().toLocaleString(),
  },
});

/*
with that last example we encounter something new, the v-bind. (its in the html page)
The v-bind attribute is called a directive. directives are prefixed with v- to indicate that they are special attributes provided by vue
they apply special reactive behavior to the rendered DOM. 
in that case the behavior was the hover/selected message that is binded to the HTML
... I think 
*/

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
  },
});

// in the aboved 3rd example, you can toggle elements, change the value of seen to false and the html will dissapear

// this example demonstrates we can bind data to not only text and attributes, but also the structure of the DOM
// Vue also has a powerful transistion effect system that can automatically apply transition effects

// we also have other directives like the v-for directive, which is used for displaying a list of items using data from an array

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  },
});

// in that example, you can add to it via the console
// in the console, enter app4.todos.push({ text: 'New item' })
// that adds a new item to the list.

// to let users interact with your app, we can use the v-on directive to attach event listeners that invoke methods on our vue instances
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

// Note that in this method we update the state of our app without touching the DOM -
// All DOM Manipulations are handled by VUE, and the code you write is focused on the underlying logic

// Vue also has the v-model directive that makes two-way binding between form input and app state a breeze:

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
  },
});

// Another important concept in Vue is the component system which makes it easier to build larger scale applications with lots of smaller re-useable components.

// In Vue, a component is essentially a Vue instance with pre-defined options.

// An example, defining a new component called todo-item that accepts a prop

Vue.component('todo-item', {
  // The todo-item component now accepts a 'prop', which is like a custome attribute. This prop is called todo
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables'},
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Whatever else humans are supposed to eat'},
    ]
  }
})



// Now onto creating a Vue Instance - every Vue application starts by creating a Vue instance with the Vue function 

var vm = new Vue({
  //options
})

// Vue's design pattern was inspired by the MVVM pattern
// MVVM = Model-view-viewmodel
// following that convention, we often use the variable vm (short for View Model) to refer to our vue instance

// When you create a Vue instance, you pass in an options object. The majority of this guide describes how you can use these options to create your desired behavior. 
// A Vue application consists of a root Vue instance created with new Vue, optionally organzied into a tree of nested reusable components. 

// Data and Methods

// When a Vue instance is created, it adds all the properties found in its data object to Vue's reactivity system. 
// When the values of those properties change, the view will "react" updating to match the new values

// our data object
var data = {a: 1}

// Now lets add that data object to a vue instance

var vm1 = new Vue({
  data: data
}) 

// Getting the property on the instance returns the one from the original data
vm1.a == data.a   // => true

// Setting the property on the instance also affects the original data
vm1.a = 2
data.a            // => 2

// and vice versa 
data.a =3
vm1.a           // => 3

// when this data changes, the view will re-render. 
// To note, properties in data are only reactive if they existed when the instance was created
// this means you add a new property, likle

vm1.b = 'hi'

// Then changes to b will not trigger any view updates. If you know you'll need a property later, but it starts out empty or non-existant, you'll need to set some initial value
// for example

/*
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
*/

/*
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app-8',
  data: obj
})
*/

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch( 'a', function (newValue, oldValue) {
  // this callback will be called when `vm.a` changes
})