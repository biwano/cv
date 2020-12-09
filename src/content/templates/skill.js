export default { skill: `
	<div class="tags has-addons">
		<f-icon style="color:lightgrey" v-for="i in Array(5 - data.level)" icon="star" :key="i"></f-icon>
		<f-icon style="color:#552fbc" v-for="i in Array(data.level)" icon="star" :key="i"></f-icon>
		<g-link :route="'/page_skill/' + metadata.list_key" >
			<span class="tag is-light">{{data.name}}</span>	  
		</g-link>
	</div>
`}
