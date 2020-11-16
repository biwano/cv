export default {profile: `
	  <div @click="g_exec('reload')">
	  	<img alt="Selfie" src="/photo.png" width="100px" style="float:right"/>
    	<h1 class="is-size-3">{{data.name}}</h1>
    	<h1 class="is-size-6">{{data.title}}</h1>
    	<g-render-list template-url="template://contact" data-url="locale://contact"></g-render-list>
    	<hr style="clear:both"/>
	  </div>
`, contact: `
	  	<a class="is-size-1" style="margin-right:10px" :href="data.url" target="_blank"><f-icon :icon="data.icon"></f-icon></a>
`
}
