Vue.component('task-list', {
  template: `
    <div>
      <task v-for='task in tasks'>{{task.description}}</task>
    </div>
  `,
  data(){
    return {
      tasks: [
        {description: 'Go to the store', completed: true},
        {description: 'Buy', completed: false},
        {description: 'Work', completed: false},
        {description: 'Clean', completed: true},
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});


new Vue({
  el: '#root'
});
