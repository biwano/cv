export default { page_skill: `
	<g-render template-url="template://page_skill_be" :data-url="'locale://skills::' + data.id"></g-render>
`, page_skill_be: `
<div>
	<div class="columns">
		<div class="column">
			<span class="title is-6">{{ data.name }}</span>
		    <g-render-list template-url="template://project" :data-url="'locale://projects::skills=' + data.$subpath"></g-render-list>
		</div>
	</div>
</div>
`}