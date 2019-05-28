Vue.component('message',{
	props:['title','body'],

	data()
	{
		return{
			isVisible: true	
		};
	},

	template:'<article v-show="isVisible" class="message is-primary"><div class="message-header"><p> {{ title }}</p><button @click="isVisible=false">x</button></div><div class="message-body">{{body}}</div></article>',

// using method:-
	// methods:{
	// 	hideModal(){
	// 		this.isVisible=false;
	// 	}
	// }
});

new Vue({
	el: '#root'
});