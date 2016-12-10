export function array_diff(a1, a2) {
	var o1={}, o2={}, diff=[], i, len, k;
	for (i=0, len=a1.length; i<len; i++) { o1[a1[i]] = true; }
	for (i=0, len=a2.length; i<len; i++) { o2[a2[i]] = true; }
	for (k in o1) { if (!(k in o2)) { diff.push(k); } }
	for (k in o2) { if (!(k in o1)) { diff.push(k); } }
	return diff;
}
