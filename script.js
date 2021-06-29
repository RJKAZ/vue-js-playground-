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
