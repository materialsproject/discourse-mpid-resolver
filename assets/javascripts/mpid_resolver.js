function mpify (text) {
	return text.replace(
    /\bm(?:p|vc)-\d+\b/g,
    "<a href=\"https://materialsproject.org/materials/$&\">$&</a>");
}

Discourse.Dialect.postProcessText(function (text) {
	text = [].concat(text); // text might be array or string, coerce into array
	for (var i = 0; i < text.length; i++) {
		// only run on non-empty strings that do not contain html
		if (text[i].length > 0 && text[i][0] !== "<") {
			text[i] = mpify(text[i]);
		}
	}
	return text;
});
