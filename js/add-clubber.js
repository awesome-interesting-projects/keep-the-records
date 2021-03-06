var parentNames;
var parentIds;

$(document).ready(function() {
    $('#add-clubber-form').validationEngine('attach');
    $('#success').delay(5000).fadeTo('slow', 0, 'swing');

    // for edit only
    if ($('#grade').attr('selectedindex') != undefined) {
	$('#grade').attr('selectedIndex', $('#grade').attr('selectedindex'));
	$('#club-level').attr('selectedIndex', $('#club-level').attr('selectedindex')); }

    $('input').attr('spellcheck', false).attr('autocomplete', false);

    $('#name').focus();

    $('#parent-name-2').blur(function() {
	if ($('#release-to').val() == "") {
	    $('#release-to').val($('#parent-name-1').val() + ', ' + $('#parent-name-2').val()); }});

    $('#grade').blur(function() {
	var grade = $('#grade').val();
	
	if (grade == 'age-2-or-3') {
	    $('#club-level').val('Puggies'); }
	else if (grade == 'pre-k') {
	    $('#club-level').val('Cubbies'); }
	else if (grade == 'K' || grade == '1' || grade == '2') {
	    $('#club-level').val('Sparks'); }
	else if (grade == '3' || grade == '4' || grade == '5' || grade == '6') {
	    $('#club-level').val('TnT'); }
	else if (grade == '7' || grade == '8') {
	    $('#club-level').val('Trek'); }});

    parentNames = $('#parent-names').val().split('|');
    parentIds = $('#parent-ids').val().split('|');
    $('#parent-name-1').autocomplete(parentNames); });