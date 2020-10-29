export default { root: `
<div>
	<div style="float:right">
    	<img alt="Vue logo" src="/photo.pn" width="250px" /><br />
    	<a href="mailto:bruno.ilponse@gmail.com">bruno.ilponse@gmail.com</a><br />
    	<a href="www.github.com/biwano">Github</a>
    </div>
    <g-render-list template-url="static://experience" data-url="locale://experiences"></g-render-list>
    <!--
    <g-render-list 
    	template-url="static://flicker" 
    	data-url="https://www.mediawiki.org/w/api.php?action=opensearch&search=toto&origin=*">
    </g-render-list>    
    -->
</div>
`}