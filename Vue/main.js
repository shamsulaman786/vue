Vue.component('task-list',{
	template:	'<ul><task v-for="task in tasks">{{ task.task}}</task></ul>',

// template: '<ul><task v-for="task in tasks">{{task.task}}</task></ul>',

	data(){
		return{
			tasks:[
				{task: 'go to shop', complete:true},
				{task: 'go to masjid', complete:false},
				{task: 'go to home', complete:true},
				{task: 'go to anywhere', complete:false}
			]
		};
	}
});
Vue.component('task',{
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
});