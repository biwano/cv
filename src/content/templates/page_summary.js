export default { page_summary: `
<div>
	<div class="columns">
		<div class="column">
			<span class="title is-6">SKILLS</span>
			<hr/>
		    <g-render-list template-url="template://skill" data-url="locale://skills"></g-render-list>
		</div>
		<div class="column">
			<span class="title is-6">POSITIONS</span>
			<hr/>
		    <g-render-list template-url="template://position" data-url="locale://positions"></g-render-list>
		    <hr/>
			<span class="title is-6">EDUCATION</span>
			<hr/>
		    <g-render-list template-url="template://education" data-url="locale://education"></g-render-list>
		</div>
	</div>
    <!--
    <g-render-list 
    	template-url="template://flicker" 
    	data-url="https://www.mediawiki.org/w/api.php?action=opensearch&search=toto&origin=*">
    </g-render-list>    
    -->
</div>
`}