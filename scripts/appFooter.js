var defFooter = document.getElementById("def-footer");
defFooter.outerHTML = wet.builder.appFooter({
	"footerSections": [{
		"href": "https://github.com/canada-ca/a11y/",
		"text": "Contribute to this project"
	}, {
		"href": "https://github.com/canada-ca/a11y/issues/new?title=Problem%20with%20site%3A%0A",
		"text": "Report issues on this project"
	}, {
		"href": "https://github.com/canada-ca/a11y/issues/new?title=Suggestion%3A%0A",
		"text": "Suggest a change on this project"
	}]
});
